import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import fs from 'fs'

const htmlUploadPlugin = () => {
  return {
    name: 'html-upload',
    configureServer(server) {
      server.middlewares.use('/api/upload-article', (req, res) => {
        if (req.method !== 'POST') return res.end();
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
          try {
            const data = JSON.parse(body);
            const content = data.content;
            let filename = data.filename;
            
            // Validate filename
            if (!filename.endsWith('.html')) filename += '.html';
            const baseSlug = filename.replace('.html', '').replace(/[^a-z0-9-]/gi, '-').toLowerCase();
            filename = baseSlug + '.html'; // normalize
            
            // Extract meta tags
            const titleMatch = content.match(/<title>(.*?)<\/title>/);
            const title = titleMatch ? titleMatch[1] : 'Bài viết mới';
            
            const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/);
            const excerpt = descMatch ? descMatch[1] : '';
            
            const imgMatch = content.match(/<meta\s+property=["']og:image["']\s+content=["'](.*?)["']/);
            const image = imgMatch ? imgMatch[1] : '/fpt_recruitment_poster_1774947811802.png';
            
            const date = new Date().toLocaleDateString('vi-VN');
            const href = `/${filename}`;

            // 1. Write HTML file
            fs.writeFileSync(resolve(__dirname, filename), content, 'utf8');

            // 2. Update landingData.js
            const dbPath = resolve(__dirname, 'src/data/landingData.js');
            let dbContent = fs.readFileSync(dbPath, 'utf8');
            const newArticle = `    {\n      title: "${title.replace(/"/g, '\\"')}",\n      excerpt: "${excerpt.replace(/"/g, '\\"')}",\n      image: "${image}",\n      date: "${date}",\n      href: "${href}"\n    }`;
            dbContent = dbContent.replace(/articles:\s*\[/, `articles: [\n${newArticle},`);
            fs.writeFileSync(dbPath, dbContent, 'utf8');

            // 3. Update vite.config.js input
            const configPath = resolve(__dirname, 'vite.config.js');
            let configContent = fs.readFileSync(configPath, 'utf8');
            const newConfigLine = `input: {\n        ${baseSlug.replace(/-/g, '')}: resolve(__dirname, '${filename}'),`;
            if (!configContent.includes(newConfigLine)) {
                configContent = configContent.replace(/input:\s*\{/, newConfigLine);
                fs.writeFileSync(configPath, configContent, 'utf8');
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true, message: 'Upload thành công!' }));
          } catch (e) {
            console.error(e);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: false, error: e.toString() }));
          }
        });
      });
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), htmlUploadPlugin()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tuyensinh: resolve(__dirname, 'tuyen-sinh.html')
      }
    }
  }
})
