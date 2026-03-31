<script setup>
import { landingData } from '../../data/landingData';
</script>

<template>
  <section id="contact" class="campus">
    <div class="container campus-container">
      <div class="grid-2 align-center">
        <div class="campus-info animate-fade-in">
          <span class="badge">Vị trí cơ sở Đồng Nai</span>
          <h2 class="section-title text-left">
            <span class="orange">CAO ĐẲNG</span><br>
            <span class="orange">FPT POLYTECHNIC ĐỒNG NAI</span>
          </h2>
          
          <div class="contact-details">
            <div class="contact-card">
              <div class="icon">📍</div>
              <div class="text">
                <h4 class="contact-card-title">Địa chỉ:</h4>
                <p>{{ landingData.college.address }}</p>
              </div>
            </div>
            
            <div class="contact-card">
              <div class="icon">📞</div>
              <div class="text">
                <h4 class="contact-card-title">Hotline tuyển sinh:</h4>
                <p>{{ landingData.college.hotline }}</p>
              </div>
            </div>
            
            <div class="contact-card">
              <div class="icon">✉️</div>
              <div class="text">
                <h4 class="contact-card-title">Email:</h4>
                <p>{{ landingData.college.email }}</p>
              </div>
            </div>
          </div>
          
          <div class="campus-actions">
            <a :href="`tel:${landingData.college.hotline.replace(/\s/g, '')}`" class="btn btn-primary">Gọi ngay tư vấn</a>
            <a href="https://maps.app.goo.gl/uXvL8e4m8x8j8e8j8" target="_blank" class="btn btn-secondary">Xem bản đồ</a>
          </div>
        </div>
        
        <div class="campus-map animate-fade-in">
          <div class="map-placeholder">
            <div class="map-overlay">
               <p class="map-title">Bản đồ khu vực Hiệp Hòa, Biên Hòa</p>
               <span>Đang tải dữ liệu Google Maps...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.campus { background-color: var(--white); padding: 100px 0; }

.align-center { align-items: center; }

.text-left { text-align: left; margin-bottom: 25px; }

.section-title {
  font-size: clamp(2.2rem, 6vw, 3.8rem);
  line-height: 1.4;
  letter-spacing: -1.2px;
}

.section-title .orange { color: #f26c21; }

.contact-details { display: flex; flex-direction: column; gap: 20px; margin-bottom: 40px; }

.contact-card {
  display: flex; gap: 20px; align-items: flex-start; padding: 20px;
  background-color: var(--light-bg); border-radius: var(--radius-md);
  transition: var(--transition); border: 1px solid transparent;
}

.contact-card:hover {
  background-color: var(--white); border-color: var(--primary);
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.contact-card .icon {
  font-size: 1.5rem; background-color: var(--white); width: 50px; height: 50px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.03);
}

.contact-card-title {
  font-size: 1rem; color: var(--secondary); margin-bottom: 5px;
}

.contact-card p { font-size: 1.05rem; color: var(--text-gray); line-height: 1.6; }

.campus-actions { display: flex; gap: 15px; }

.campus-map { width: 100%; }

.map-placeholder {
  width: 100%; aspect-ratio: 1 / 1; background-color: #e9ecef;
  border-radius: var(--radius-lg); overflow: hidden; position: relative;
  background: linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.05)), url('https://antigravity-images.s3.amazonaws.com/placeholder_fpt_location.jpg') center/cover;
  box-shadow: 0 30px 60px rgba(0,0,0,0.1); border: 4px solid var(--white);
}

.map-overlay {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  text-align: center; background-color: rgba(255, 255, 255, 0.9);
  padding: 25px 40px; border-radius: var(--radius-md);
  box-shadow: var(--shadow); backdrop-filter: blur(5px);
}

.map-title { color: var(--secondary); margin-bottom: 5px; }

.map-overlay span { font-size: 0.8rem; color: var(--text-gray); }

@media (max-width: 768px) {
  .grid-2 { grid-template-columns: 1fr; gap: 50px; }
  .campus-info { order: 1; }
  .campus-map { order: 2; }
  .campus-actions { flex-direction: column; }
  .map-placeholder { aspect-ratio: 4/3; }
  .section-title { font-size: 2.2rem; }
}
</style>
