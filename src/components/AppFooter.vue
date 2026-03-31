<script setup>
const currentYear = new Date().getFullYear();

const campuses = [
  {
    name: 'Cơ sở Hà Nội',
    address: 'Cổng số 1, Tòa nhà FPT Polytechnic, Phố Trịnh Văn Bô, Nam Từ Liêm, Hà Nội',
    hotline: '024 8589 6969'
  },
  {
    name: 'Cơ sở TP Hồ Chí Minh',
    address: 'Tòa nhà FPT Polytechnic, 391A Nam Kỳ Khởi Nghĩa, Quận 3, TP HCM',
    hotline: '028 3526 8799'
  },
  {
    name: 'Cơ sở Thái Nguyên',
    address: 'Tòa nhà Viettel, số 525 Lương Ngọc Quyến, Phường Phan Đình Phùng, Thái Nguyên',
    hotline: '0981 725 836'
  },
  {
    name: 'Cơ sở Đà Nẵng',
    address: '137 Nguyễn Thị Thập, Phường Hòa Minh, Quận Liên Chiểu, TP Đà Nẵng',
    hotline: '(0236) 371 0999'
  },
  {
    name: 'Cơ sở Hải Phòng',
    address: '271 Lê Thánh Tông, Phường Máy Chai, Quận Ngô Quyền, TP Hải Phòng',
    hotline: '(0225) 355 1068'
  },
  {
    name: 'Cơ sở Quy Nhơn',
    address: '52 Mai Xuân Thưởng, Phường Lý Thường Kiệt, TP Quy Nhơn, Tỉnh Bình Định',
    hotline: '(0256) 625 4555'
  },
  {
    name: 'Cơ sở Hà Nam',
    address: 'Số 422, Tổ dân phố 8, Phường Ba Sao, Kim Bảng, Hà Nam',
    hotline: '0345 690 031'
  },
  {
    name: 'Cơ sở Tây Nguyên',
    address: 'Số 27 Nguyễn Tất Thành, phường Tân Lợi, TP Buôn Ma Thuột, Đắk Lắk',
    hotline: '(0262) 355 5678'
  },
  {
    name: 'Cơ sở Thanh Hóa',
    address: 'Lô số 11, Khu đô thị mới Nam thành phố Thanh Hóa, Phường Đông Vệ, TP Thanh Hóa',
    hotline: '0237 845 9999'
  },
  {
    name: 'Cơ sở Đồng Nai',
    highlight: true,
    address: 'Số 193 Đỗ Văn Thi, phường Hiệp Hòa, TP Biên Hòa, tỉnh Đồng Nai',
    hotline: '0345 690 031',
    website: 'www.fpt.edu.vn'
  },
  {
    name: 'Cơ sở Cần Thơ',
    address: 'Số 288 Nguyễn Văn Linh, phường An Khánh, quận Ninh Kiều, TP Cần Thơ',
    hotline: '(0292) 373 5959'
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
             <span class="icon">📞</span> 0345 690 031
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
  height: 55px; filter: brightness(0) invert(1); margin-bottom: 40px;
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
