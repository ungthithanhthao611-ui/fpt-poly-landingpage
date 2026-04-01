<script setup>
import { computed, ref } from 'vue';

const activeTab = ref('Công nghệ thông tin');

const majorsList = [
  { 
    id: 1, 
    name: 'Công nghệ thông tin', 
    subtitle: 'Học lập trình ứng dụng đa nền tảng, xây dựng hệ thống phần mềm doanh nghiệp hiện đại.',
    img: '/program-img1.png', 
    items: [
      'Phát triển phần mềm', 
      'Lập trình Web', 
      'Ứng dụng phần mềm'
    ]
  },
  { 
    id: 2, 
    name: 'Quản trị kinh doanh', 
    subtitle: 'Làm chủ các kỹ năng quản trị, marketing, và vận hành doanh nghiệp trong kỷ nguyên số.',
    img: 'https://caodang.fpt.edu.vn/wp-content/themes/fpoly/assets/standalone/images/program-img3.png',
    items: [
      'Digital Marketing', 
      'Tổ chức sự kiện', 
      'Quản lý vận tải và dịch vụ logistics'
    ]
  },
  { 
    id: 3, 
    name: 'Thiết kế đồ họa', 
    subtitle: 'Sáng tạo không giới hạn với tư duy thẩm mỹ và kỹ năng sử dụng công cụ thiết kế chuyên sâu.',
    img: 'https://caodang.fpt.edu.vn/wp-content/themes/fpoly/assets/standalone/images/program-img6.png',
    items: [
      'Thiết kế đồ họa 2D, 3D',
      'Thiết kế giao diện Website',
      'Xử lý ảnh tại các studio',
      'Thiết kế quảng cáo, marketing'
    ]
  },
  { 
    id: 4, 
    name: 'Tiếng Trung Quốc', 
    subtitle: 'Trang bị nền tảng ngôn ngữ và văn hóa vững chắc để làm việc tại các doanh nghiệp đa quốc gia.',
    img: '/program-img5.png',
    items: [
      'Tiếng Trung giao tiếp',
      'Biên phiên dịch tiếng Trung',
      'Văn hóa doanh nghiệp Trung Quốc'
    ]
  }
];

const currentMajor = computed(() => majorsList.find(m => m.name === activeTab.value) || majorsList[0]);
</script>

<template>
  <section id="majors" class="majors-section">
    <div class="container">
      <div class="majors-header">
        <h2 class="title-top">CHƯƠNG TRÌNH ĐÀO TẠO</h2>
        <h3 class="title-main">HỌC ĐỂ CÓ VIỆC LÀM NGAY</h3>
      </div>

      <div class="majors-tabs">
        <button 
          v-for="major in majorsList" 
          :key="major.name"
          @click="activeTab = major.name"
          :class="['tab-pill', { active: activeTab === major.name }]"
        >
          {{ major.name }}
        </button>
      </div>

      <div class="major-detail-card">
        <div class="card-image-side">
          <div class="img-overlay-gradient"></div>
          <img :src="currentMajor.img" :alt="currentMajor.name" class="major-img" />
        </div>
        
        <div class="card-content-side">
          <h4 class="major-name">{{ currentMajor.name }}</h4>
          <p class="major-desc">{{ currentMajor.subtitle }}</p>
          
          <ul class="sub-majors-list">
            <li v-for="item in currentMajor.items" :key="item" class="sub-major-item">
              <span>{{ item }}</span>
              <span class="item-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 16L16 12L12 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M8 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </li>
          </ul>

          <div class="card-footer">
            <a href="#register" class="cta-register-btn">
              ĐĂNG KÝ NGAY
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.majors-section {
  background-color: #0099ff;
  background-image: linear-gradient(135deg, #0099ff 0%, #0077ee 100%);
  padding: 100px 0 120px;
  color: white;
}

.majors-header {
  text-align: center;
  margin-bottom: 60px;
}

.title-top {
  font-size: clamp(2rem, 5vw, 3.2rem);
  margin-bottom: 15px;
  line-height: 1.3;
}

.title-main {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  color: #ffaa00;
  text-shadow: 0 4px 10px rgba(0,0,0,0.15);
  font-weight: 800;
}

.majors-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 60px;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.tab-pill {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 10px 24px;
  border-radius: 35px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
}

.tab-pill:hover { background: rgba(255, 255, 255, 0.2); border-color: white; }

.tab-pill.active {
  background: #f26c21; border-color: #f26c21;
  box-shadow: 0 10px 25px rgba(242, 108, 33, 0.4);
}

.major-detail-card {
  background: white; border-radius: 40px; display: grid; grid-template-columns: 0.9fr 1.1fr;
  max-width: 1150px; margin: 0 auto; overflow: hidden;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.3); color: #333;
}

.card-image-side {
  position: relative; background: linear-gradient(45deg, #ff4c4c 0%, #f26c21 100%);
  display: flex; align-items: center; justify-content: center; overflow: hidden;
}

.major-img { width: 85%; height: auto; object-fit: contain; transition: 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); }
.major-detail-card:hover .major-img { transform: scale(1.1) rotate(2deg); }

.card-content-side { padding: 60px; display: flex; flex-direction: column; }

.major-name { color: #f26c21; font-size: 2.2rem; margin-bottom: 15px; font-weight: 900; }

.major-desc { font-size: 1.1rem; line-height: 1.7; color: #555; margin-bottom: 35px; }

.sub-majors-list { list-style: none; padding: 0; margin: 0 0 40px; }

.sub-major-item {
  border-bottom: 1.5px dashed #f0f0f0; padding: 15px 0; display: flex;
  justify-content: space-between; align-items: center; font-weight: 800;
  color: #222; transition: 0.3s; font-size: 1.05rem;
}

.sub-major-item:hover { color: #f26c21; transform: translateX(10px); }

.item-icon { color: #ccc; transition: 0.3s; }
.sub-major-item:hover .item-icon { color: #f26c21; opacity: 1; }

.card-footer { margin-top: auto; display: flex; justify-content: flex-end; }

.cta-register-btn {
  background: #f26c21; color: white; padding: 16px 35px; border-radius: 999px;
  font-weight: 950; font-size: 1.1rem; display: flex; align-items: center; gap: 10px;
  box-shadow: 0 12px 30px rgba(242, 108, 33, 0.3); transition: 0.3s;
}

.cta-register-btn:hover { background: #e15b14; transform: translateY(-3px); box-shadow: 0 18px 40px rgba(242, 108, 33, 0.4); }

@media (max-width: 1000px) { .major-detail-card { grid-template-columns: 1fr; margin: 0 20px; } .major-img { width: 60%; } }

@media (max-width: 600px) {
  .title-top { font-size: 1.8rem; }
  .title-main { font-size: 1.5rem; }
  .card-content-side { padding: 40px 25px; }
  .major-name { font-size: 1.8rem; }
}
</style>
