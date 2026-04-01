<script setup>
import { ref } from 'vue';

const fileInput = ref(null);
const isUploading = ref(false);
const message = ref('');
const isError = ref(false);

const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  if (file.type !== 'text/html' && !file.name.endsWith('.html')) {
    message.value = 'Chỉ hỗ trợ file định dạng .html!';
    isError.value = true;
    return;
  }

  isUploading.value = true;
  message.value = 'Đang xử lý...';
  isError.value = false;

  try {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const content = e.target.result;
      
      const payload = {
        filename: file.name,
        content: content
      };

      const response = await fetch('/api/upload-article', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      
      if (result.success) {
        message.value = 'Tải lên hoàn tất! Đang khởi động lại hệ thống... (Vui lòng chờ 3s rồi trở về trang chủ)';
        isError.value = false;
        setTimeout(() => {
          window.location.href = '/';
        }, 3000);
      } else {
        throw new Error(result.error);
      }
    };
    reader.onerror = () => { throw new Error('Không thể đọc file'); };
    reader.readAsText(file);
    
  } catch (error) {
    message.value = 'Đã xảy ra lỗi: ' + error.message;
    isError.value = true;
  } finally {
    isUploading.value = false;
    if (fileInput.value) fileInput.value.value = '';
  }
};
</script>

<template>
  <div class="upload-page">
    <div class="upload-card">
      <div class="icon-wrap">
        📄
      </div>
      <h2>Đăng bài viết mới</h2>
      <p class="subtitle">Định dạng file yêu cầu: <strong>.html</strong> (bài viết chuẩn SEO đã được cấu trúc sẵn)</p>
      
      <div class="upload-area" @click="() => fileInput.click()">
        <input 
          type="file" 
          ref="fileInput" 
          accept=".html,text/html" 
          @change="handleFileUpload" 
          style="display: none;" 
        />
        <div class="upload-placeholder" v-if="!isUploading">
          <span class="upload-icon">⬆️</span>
          <span>Bấm vào đây để chọn file HTML từ máy tính</span>
        </div>
        <div class="uploading-state" v-else>
          <div class="spinner"></div>
          <span>Hệ thống đang lưu trữ và build lại giao diện...</span>
        </div>
      </div>

      <div v-if="message" class="message-box" :class="{ error: isError, success: !isError }">
        {{ message }}
      </div>

      <a href="/" class="back-link">← Hủy và quay lại trang chủ</a>
    </div>
  </div>
</template>

<style scoped>
.upload-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f6f9;
  font-family: 'Inter', sans-serif;
  padding: 20px;
}

.upload-card {
  background: white;
  padding: 50px 40px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.06);
  text-align: center;
  max-width: 600px;
  width: 100%;
}

.icon-wrap {
  font-size: 3.5rem;
  margin-bottom: 15px;
}

h2 {
  color: #1a1a1a;
  font-size: 1.8rem;
  margin-bottom: 8px;
  font-weight: 800;
}

.subtitle {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 30px;
}

.upload-area {
  border: 2px dashed #cbd5e1;
  border-radius: 12px;
  padding: 40px 20px;
  cursor: pointer;
  background: #f8fafc;
  transition: all 0.3s;
}

.upload-area:hover {
  border-color: #f26c21;
  background: #fff4ec;
}

.upload-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  color: #475569;
  font-weight: 500;
}

.upload-icon {
  font-size: 2rem;
}

.message-box {
  margin-top: 25px;
  padding: 15px;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
}

.message-box.error {
  background: #fef2f2;
  color: #ef4444;
  border: 1px solid #fecaca;
}

.message-box.success {
  background: #f0fdf4;
  color: #16a34a;
  border: 1px solid #bbf7d0;
}

.back-link {
  display: block;
  margin-top: 30px;
  color: #64748b;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: 0.3s;
}

.back-link:hover {
  color: #f26c21;
}

.spinner {
  width: 30px;
  height: 30px;
  border: 3px solid rgba(242, 108, 33, 0.2);
  border-radius: 50%;
  border-top-color: #f26c21;
  animation: spin 1s ease-in-out infinite;
  margin: 0 auto 15px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.uploading-state {
  color: #f26c21;
  font-weight: 600;
}
</style>
