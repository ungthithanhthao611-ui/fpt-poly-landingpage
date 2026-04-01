<script setup>
import { landingData } from '../../data/landingData';
</script>

<template>
  <section id="news" class="news-section">
    <div class="container">
      <div class="section-header text-center animate-fade-in">
        <h2 class="section-title">Tin tức & Sự kiện</h2>
        <p class="section-subtitle">Cập nhật những thông tin mới nhất từ FPT Polytechnic Đồng Nai</p>
      </div>

      <div class="news-grid">
        <article v-for="(article, index) in landingData.articles" :key="index" class="news-card">
          <a :href="article.href" class="news-image-wrapper">
            <img :src="article.image" :alt="article.title" class="news-image" />
          </a>
          <div class="news-content">
            <div class="news-meta">
              <span class="news-date">🗓️ {{ article.date }}</span>
            </div>
            <h3 class="news-title">
              <a :href="article.href">{{ article.title }}</a>
            </h3>
            <p class="news-excerpt">{{ article.excerpt }}</p>
            <a :href="article.href" class="read-more">Xem chi tiết →</a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.news-section {
  padding: 80px 0;
  background-color: #f9fafb;
}

.section-header {
  margin-bottom: 50px;
}

.section-title {
  font-size: 2.2rem;
  color: #f26c21;
  font-weight: 800;
  margin-bottom: 10px;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: #f26c21;
  border-radius: 2px;
}

.section-subtitle {
  color: #666;
  font-size: 1.1rem;
  margin-top: 20px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.news-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.news-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.news-image-wrapper {
  display: block;
  width: 100%;
  padding-top: 60%; /* Aspect ratio ~16:9 */
  position: relative;
  overflow: hidden;
}

.news-image {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.news-card:hover .news-image {
  transform: scale(1.05);
}

.news-content {
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.news-meta {
  color: #888;
  font-size: 0.85rem;
  margin-bottom: 10px;
}

.news-title {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 15px;
}

.news-title a {
  color: #333;
  text-decoration: none;
  transition: 0.2s;
}

.news-title a:hover {
  color: #f26c21;
}

.news-excerpt {
  color: #555;
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 20px;
  flex: 1;
}

.read-more {
  display: inline-block;
  color: #f26c21;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
  transition: 0.2s;
}

.read-more:hover {
  color: #d15615;
  transform: translateX(5px);
}

@media (max-width: 992px) {
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
