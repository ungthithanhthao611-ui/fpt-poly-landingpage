<script setup>
const methods = [
  {
    icon: "/icon-book.svg",
    title: "Project-based Learning",
    desc: "Học tập qua dự án thật với doanh nghiệp"
  },
  {
    icon: "/icon-person.svg",
    title: "Blended Learning",
    desc: "Học tập tích hợp 70% thực hành, 30% lý thuyết"
  },
  {
    icon: "/icon-lightbuild.svg",
    title: "Kỹ năng thế kỷ 21",
    desc: "Kỹ năng mềm, tin học, ngoại ngữ, làm việc nhóm"
  }
];
</script>

<template>
  <section id="about" class="about-section">
    <div class="container container-about">
      <div class="section-header text-center">
        <div class="mini-badge">
          <span>⚡</span> MÔI TRƯỜNG <span class="orange">HỌC TẬP</span>
        </div>

        <h2 class="main-title-top">
          <span class="title-dark">VỀ </span>
          <span class="gradient-text">FPT POLYTECHNIC ĐỒNG NAI</span>
        </h2>
      </div>

      <div class="about-top animate-fade-in">
        <div class="about-visual">
          <img src="/about-img.png" alt="FPT Building" class="building-img" />
          <div class="stats-float">
            <span class="count">97.7%</span>
            <span class="label">Tỉ lệ việc làm</span>
          </div>
        </div>

        <div class="about-text">
          <p class="main-text">
            Trường Cao đẳng FPT Polytechnic là trường đào tạo trong lòng doanh nghiệp với đa ngành nghề, đa lĩnh vực.
            Các chương trình đào tạo của trường được thiết kế dựa trên kỹ năng thiết yếu nhất để làm việc và tương thích
            với các hệ thống đào tạo tiên tiến trên thế giới.
          </p>

          <p>
            Với nhận định nền kinh tế Việt Nam đang phát triển mạnh mẽ, FPT Polytechnic Đồng Nai nhằm tới mục tiêu cung
            cấp nguồn nhân lực được đào tạo tốt, đảm bảo tính cạnh tranh trong môi trường phát triển ngày càng cao của khu vực phía Nam.
          </p>

          <p>
            FPT Polytechnic Đồng Nai không chỉ chú trọng kiến thức chuyên môn mà còn rèn luyện kỹ năng mềm, thái độ làm việc
            chuyên nghiệp, giúp sinh viên tự tin chinh phục nhà tuyển dụng ngay sau khi tốt nghiệp.
          </p>
        </div>
      </div>

      <div class="mission-section text-center animate-fade-in">
        <h2 class="sub-title">TRƯỜNG CAO ĐẲNG FPT POLYTECHNIC</h2>
        <div class="title-underline"></div>

        <p class="mission-desc">
          Trường Cao đẳng FPT Polytechnic là trường đào tạo trong lòng doanh nghiệp với đa ngành nghề, đa lĩnh vực.
          FPT Polytechnic Đồng Nai ra đời với mong muốn đem đến cho người học những giá trị đào tạo thực tế
          đúng với triết lý <span class="quote">"Thực học – Thực nghiệp"</span>.
        </p>

        <div class="center-links">
          <a href="#" class="view-more">Xem thêm</a>
        </div>
      </div>

      <div class="learning-methods grid-3 animate-fade-in mt-80">
        <div v-for="method in methods" :key="method.title" class="method-card">
          <div class="method-icon-box">
            <img :src="method.icon" :alt="method.title" class="method-icon" />
          </div>
          <h4 class="method-title">{{ method.title }}</h4>
          <p class="method-desc">{{ method.desc }}</p>
        </div>
      </div>

      <div class="text-center mt-60">
        <a href="#register" class="btn btn-main-orange-large">
          TÌM HIỂU THÊM VỀ FPT POLYTECHNIC &rsaquo;
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background-color: white;
  padding: 100px 0;
}

.container-about {
  max-width: 1200px;
}

.mini-badge {
  display: inline-block;
  background-color: #f8f9fa;
  padding: 8px 24px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  margin-bottom: 25px;
}

.mini-badge .orange { color: #f26c21; }

.main-title-top {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
  gap: 15px;
  margin-bottom: 80px;
  line-height: 1.4;
  letter-spacing: -1.5px;
}

.title-dark {
  color: #111827;
  font-size: clamp(2.5rem, 8vw, 4.5rem);
}

.gradient-text {
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  background: linear-gradient(90deg, #f26c21 0%, #c78655 45%, #00adef 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.about-top {
  display: flex;
  gap: 60px;
  align-items: center;
  margin-bottom: 120px;
}

.about-visual {
  flex: 1;
  position: relative;
}

.building-img {
  width: 100%;
  border-radius: 24px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
}

.stats-float {
  position: absolute;
  bottom: -30px;
  right: -30px;
  background: white;
  padding: 25px 35px;
  border-radius: 20px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  text-align: center;
  z-index: 5;
}

.stats-float .count {
  font-size: 2.2rem;
  color: #f26c21;
  line-height: 1;
}

.stats-float .label {
  font-size: 0.9rem;
  color: #666;
  font-weight: 700;
  margin-top: 5px;
}

.about-text { flex: 1.1; }

.about-text p {
  color: #555;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 22px;
}

.main-text {
  font-weight: 600;
  color: #333 !important;
}

.mission-section {
  max-width: 900px;
  margin: 0 auto 100px;
}

.sub-title {
  font-size: clamp(2rem, 5vw, 3.2rem);
  margin-bottom: 15px;
  letter-spacing: -1px;
}

.title-underline {
  width: 120px;
  height: 4px;
  background-color: #f26c21;
  margin: 0 auto 35px;
  border-radius: 2px;
}

.mission-desc {
  font-size: 1.25rem;
  color: #555;
  line-height: 1.8;
  margin-bottom: 25px;
}

.mission-desc .quote {
  color: #f26c21;
  font-weight: 700;
}

.view-more {
  color: #f26c21;
  font-weight: 800;
  text-decoration: underline;
  font-size: 1rem;
}

.method-card {
  background: white;
  padding: 45px 30px;
  border-radius: 24px;
  text-align: center;
  border: 1px solid #f26c2130;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.method-card:hover {
  transform: translateY(-12px);
  border-color: #f26c21;
  box-shadow: 0 25px 50px rgba(242, 108, 33, 0.12);
}

.method-icon-box {
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #f26c21 0%, #ff8c42 100%);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px auto;
  box-shadow: 0 10px 25px rgba(242, 108, 33, 0.3);
}

.method-icon {
  width: 45px;
  height: 45px;
  filter: brightness(0) invert(1);
}

.method-title {
  font-size: 1.4rem;
  color: #1a1a1b;
  margin-bottom: 15px;
}

.method-desc {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

.btn-main-orange-large {
  background-color: #f26c21;
  color: white;
  padding: 18px 45px;
  border-radius: 45px;
  font-weight: 950;
  font-size: 1.15rem;
  display: inline-block;
  box-shadow: 0 12px 30px rgba(242, 108, 33, 0.25);
  transition: 0.3s;
}

.btn-main-orange-large:hover {
  transform: scale(1.03);
  box-shadow: 0 15px 40px rgba(242, 108, 33, 0.35);
}

@media (max-width: 1024px) {
  .about-top {
    flex-direction: column;
    gap: 50px;
  }
}

@media (max-width: 768px) {
  .grid-3 { grid-template-columns: 1fr; }
  .main-title-top { gap: 8px; margin-bottom: 50px; }
  .title-dark, .gradient-text { font-size: 2.5rem; }
  .stats-float { padding: 15px 25px; bottom: -20px; right: -15px; }
}
</style>