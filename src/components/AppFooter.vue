<script setup>
const currentYear = new Date().getFullYear();

const campuses = [
  {
    name: 'Cơ sở Đồng Nai',
    highlight: true,
    address: 'Số 193 Đỗ Văn Thi, phường Hiệp Hòa, TP Biên Hòa, tỉnh Đồng Nai',
    hotline: '0989.871.031',
    website: 'www.fpt.edu.vn'
  }

];
</script>

<template>
  <footer class="footer">
    <div class="container footer-container">
      <div class="footer-content">
        <div class="footer-brand">
          <img src="/logo.svg" alt="FPT Polytechnic" class="footer-logo" />
          <h3 class="contact-title">THÔNG TIN LIÊN HỆ</h3>
          <div class="contact-item">
             <span class="icon">📧</span> caodang@fpt.edu.vn
          </div>
          <div class="contact-item">
             <span class="icon">📞</span> 0989.871.031
          </div>
        </div>

        <div class="footer-locations">
          <h3 class="locations-title">HỆ THỐNG VĂN PHÒNG TUYỂN SINH</h3>
          <div class="locations-grid">
            <div v-for="campus in campuses" :key="campus.name" class="location-card" :class="{ 'highlight': campus.highlight }">
              <h4 class="campus-name">{{ campus.name }}</h4>
              <p class="campus-address">{{ campus.address }}</p>
              <p class="campus-hotline">Hotline: {{ campus.hotline }}</p>
              <p v-if="campus.website" class="campus-web">Website: {{ campus.website }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {{ currentYear }} Bản quyền thuộc về FPT Polytechnic Đồng Nai</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #002e5a;
  color: white;
  padding: 80px 0 40px;
}

.footer-container { max-width: 1300px; }

.footer-content { display: flex; gap: 60px; margin-bottom: 60px; }

.footer-brand { flex: 0 0 280px; }

.footer-logo {
  height: 55px; margin-bottom: 40px;
}

.contact-title {
  color: #f26c21; font-size: 1.25rem; font-weight: 950; margin-bottom: 25px;
}

.contact-item {
  font-size: 1rem; margin-bottom: 12px; display: flex; align-items: center; gap: 10px;
}

.footer-locations { flex: 1; }

.locations-title {
  color: #f26c21; font-size: 1.4rem; font-weight: 950; margin-bottom: 35px;
}

.locations-grid {
  display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px 40px;
}

.location-card { font-size: 0.95rem; line-height: 1.7; }

.location-card.highlight .campus-name {
  color: #f26c21;
  font-size: 1.15rem;
  font-weight: 950;
  text-decoration: underline;
}

.campus-name { margin-bottom: 8px; color: #fff; font-weight: 800; }

.campus-address { color: #ced4da; margin-bottom: 5px; }

.campus-hotline { color: #ced4da; font-weight: 700; }

.footer-bottom {
  text-align: center; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.05); font-size: 0.95rem; color: #adb5bd;
}

@media (max-width: 1024px) { .footer-content { flex-direction: column; gap: 50px; } }
@media (max-width: 768px) {
  .locations-grid { grid-template-columns: 1fr; }
  .footer-brand { text-align: center; flex: 1; }
  .footer-logo { margin: 0 auto 30px; }
  .contact-item { justify-content: center; }
  .locations-title { font-size: 1.2rem; }
}
</style>
