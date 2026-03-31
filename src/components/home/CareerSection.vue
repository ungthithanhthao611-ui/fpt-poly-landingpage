<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

const careers = [
  {
    id: 1,
    title: "CÔNG NGHỆ THÔNG TIN",
    color: "#00adef",
    image: "/career-img1.png",
    points: [
      "Lập trình viên Game (Game Developer)",
      "Thiết kế đồ họa Game (Game Artist)",
      "Chuyên viên IT của doanh nghiệp",
      "Quản trị dự án CNTT",
      "Kỹ sư học máy (Machine Learning Engineer)",
      "Lập trình viên AI (AI Developer)",
      "Chuyên viên phát triển/Lập trình Website",
      "Chuyên viên Quản trị Website và Thương mại điện tử"
    ]
  },
  {
    id: 2,
    title: "QUẢN TRỊ KINH DOANH",
    color: "#f26c21",
    image: "/career-img2.png",
    points: [
      "Chuyên viên sự kiện (Account)",
      "Chuyên viên tổ chức sự kiện (Event Executive)",
      "Chuyên viên kinh doanh sự kiện (Sales)",
      "Chuyên viên điều phối sự kiện (Event Coordinator)",
      "Nhân viên bán hàng và dịch vụ chăm sóc khách hàng",
      "Nhân viên quảng cáo, tổ chức sự kiện và quan hệ công chúng (PR)",
      "Chuyên viên PR & Marketing online",
      "Chuyên viên Chăm sóc khách hàng"
    ]
  },
  {
    id: 3,
    title: "THIẾT KẾ ĐỒ HỌA",
    color: "#f26c21",
    image: "/career-img3.png",
    points: [
      "Chuyên viên thiết kế đồ họa 2D, 3D",
      "Chuyên viên thiết kế dàn trang, chế bản điện tử, thiết kế in ấn, biên tập ảnh số",
      "Chuyên viên thiết kế giao diện cho Website",
      "Chuyên viên thiết kế quảng cáo, marketing",
      "Chuyên viên xử lý ảnh làm việc tại các studio",
      "Phụ trách mỹ thuật tại các doanh nghiệp"
    ]
  },
  {
    id: 4,
    title: "CÔNG NGHỆ KỸ THUẬT ĐIỀU KHIỂN & TỰ ĐỘNG HOÁ",
    color: "#f26c21",
    image: "/8c2a75c51d599307ca48.jpg",
    points: [
        "Chuyên viên kỹ thuật tại các nhà máy chế tạo, lắp ráp sản phẩm điện tử",
        "Chuyên viên thiết kế, lắp đặt, vận hành, bảo dưỡng hệ thống điều khiển và tự động hóa",
        "Chuyên viên lập trình, mô phỏng hệ thống điều khiển và tự động hóa",
        "Chuyên viên lập trình điều khiển robot công nghiệp",
        "Lắp ráp - sửa chữa thiết bị điện tử",
        "Kỹ thuật viên đóng gói và kiểm tra vi mạch (Back-End Process)"
    ]
  },
  {
    id: 5,
    title: "LOGISTICS & QUẢN LÝ CHUỖI CUNG ỨNG",
    color: "#00adef",
    image: "/career-img4.png",
    points: [
        "Nhân viên quản lý kho bãi, điều phối vận tải",
        "Chuyên viên thu mua, quản lý đơn hàng",
        "Nhân viên xuất nhập khẩu, thực hiện thủ tục hải quan",
        "Chuyên viên phân tích chuỗi cung ứng",
        "Quản lý vận hành tại các trung tâm phân phối thương mại điện tử"
    ]
  },
  {
    id: 6,
    title: "HỌC BỔNG POLY NEXT SCHOLAR",
    color: "#f26c21",
    image: "/career-img5.png",
    points: [
        "Học bổng dành cho Thế hệ mới",
        "Hơn 2,000 suất học bổng toàn quốc tại FPT Polytechnic",
        "Tổng trị giá quỹ học bổng lên đến 48 TỶ ĐỒNG",
        "Cơ hội nhận học bổng 25%, 50%, 75% học phí toàn khóa",
        "Ưu tiên cho thí sinh đăng ký xét tuyển sớm"
    ]
  }
];

const currentIndex = ref(0);
const itemsPerPage = ref(3);
let timer = null;

const updateItemsPerPage = () => {
    if (window.innerWidth <= 768) {
        itemsPerPage.value = 1;
    } else if (window.innerWidth <= 1100) {
        itemsPerPage.value = 2;
    } else {
        itemsPerPage.value = 3;
    }
};

const maxIndex = computed(() => Math.max(0, careers.length - itemsPerPage.value));

const next = () => {
    if (currentIndex.value >= maxIndex.value) {
        currentIndex.value = 0;
    } else {
        currentIndex.value++;
    }
};

const prev = () => {
    if (currentIndex.value <= 0) {
        currentIndex.value = maxIndex.value;
    } else {
        currentIndex.value--;
    }
};

const startTimer = () => {
    timer = setInterval(next, 1000);
};

const stopTimer = () => {
    if (timer) clearInterval(timer);
};

onMounted(() => {
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    startTimer();
});

onUnmounted(() => {
    window.removeEventListener('resize', updateItemsPerPage);
    stopTimer();
});
</script>

<template>
  <section id="career" class="career-section">
    <div class="container" @mouseenter="stopTimer" @mouseleave="startTimer">
      <div class="section-header text-center">
        <h2 class="section-title">CƠ HỘI <span class="gradient-text">NGHỀ NGHIỆP</span></h2>
        <p class="description">Khám phá những cơ hội việc làm hấp dẫn sau khi tốt nghiệp</p>
      </div>

      <div class="career-slider-container">
        <!-- Controls -->
        <button class="slider-arrow prev" @click="prev">
           <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        <div class="career-track-container">
          <div class="career-track" :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }">
            <div v-for="career in careers" :key="career.id" class="career-slide" :style="{ flex: `0 0 ${100 / itemsPerPage}%` }">
                <div class="career-card">
                    <div class="card-img">
                        <img :src="career.image" :alt="career.title" />
                    </div>
                    <div class="card-content">
                        <h3 class="career-title gradient-text">{{ career.title }}</h3>
                        <ul class="points-list">
                            <li v-for="(point, index) in career.points" :key="index">
                                <span class="bullet">✦</span> {{ point }}
                            </li>
                        </ul>
                        <div class="card-footer">
                            <a href="#" class="btn-link">Xem thêm</a>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>

        <button class="slider-arrow next" @click="next">
           <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
        </button>
      </div>

      <div class="career-pagination">
        <span 
            v-for="(_, index) in (careers.length - itemsPerPage + 1)" 
            :key="index"
            :class="['page-dot', { active: currentIndex === index }]"
            @click="currentIndex = index"
        ></span>
      </div>

      <div class="text-center mt-60">
        <a href="#register" class="btn btn-main-orange-large">TÌM HIỂU THÊM VỀ FPT POLYTECHNIC &rsaquo;</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.career-section {
  background-color: white;
  padding: 80px 0 100px;
}

.section-title {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  color: #1a1a1b;
  margin-bottom: 15px;
}

.gradient-text {
  background: linear-gradient(90deg, #f26c21 0%, #c78655 45%, #00adef 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.description {
  font-size: 1.1rem;
  color: #666;
  font-weight: 500;
}

.career-slider-container {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 60px;
  gap: 20px;
}

.slider-arrow {
  background: white;
  border: 1px solid #eee;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ccc;
  transition: 0.3s;
  flex-shrink: 0;
  z-index: 10;
}

.slider-arrow:hover {
  border-color: #f26c21; color: #f26c21;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transform: scale(1.1);
}

.career-track-container { overflow: hidden; flex: 1; }
.career-track { display: flex; transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.career-slide { padding: 0 12px; box-sizing: border-box; }

.career-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.04);
  transition: all 0.3s;
  border: 1px solid #f1f3f5;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.career-card:hover { transform: translateY(-10px); box-shadow: 0 20px 50px rgba(0,0,0,0.12); border-color: #eee; }
.card-img { height: 200px; overflow: hidden; }
.card-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.career-card:hover .card-img img { transform: scale(1.08); }
.card-content { padding: 24px; flex: 1; display: flex; flex-direction: column; }

.career-title {
  font-size: 1.35rem;
  margin-bottom: 20px;
  text-align: center;
  line-height: 1.3;
}

.points-list { padding: 0; margin: 0 0 24px 0; list-style: none; flex: 1; }
.points-list li { font-size: 0.95rem; line-height: 1.6; color: #555; margin-bottom: 10px; display: flex; gap: 8px; align-items: flex-start; }

.bullet { color: #f26c21; font-weight: bold; }
.card-footer { text-align: right; border-top: 1px solid #f8f8f8; padding-top: 15px; }
.btn-link { color: #f26c21; font-weight: 700; font-size: 0.85rem; text-decoration: underline; }

.career-pagination { display: flex; justify-content: center; gap: 10px; margin-top: 40px; }
.page-dot { width: 20px; height: 5px; background: #eee; border-radius: 10px; cursor: pointer; transition: 0.3s; }
.page-dot.active { background: #f26c21; width: 40px; }

.mt-60 { margin-top: 60px; }

.btn-main-orange-large {
  background-color: #f26c21;
  color: white;
  padding: 16px 40px;
  border-radius: 40px;
  font-weight: 800;
  font-size: 1.15rem;
  display: inline-block;
  box-shadow: 0 10px 25px rgba(242, 108, 33, 0.25);
  transition: all 0.3s ease;
}

.btn-main-orange-large:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(242, 108, 33, 0.35);
  background-color: #e15b14;
}

@media (max-width: 768px) { .slider-arrow { display: none; } .career-title { font-size: 1.2rem; } }
</style>
