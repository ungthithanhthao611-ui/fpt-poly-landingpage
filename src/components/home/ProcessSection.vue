<script setup>
import { landingData } from '../../data/landingData';
</script>

<template>
  <section id="process" class="process">
    <div class="container process-container">
      <div class="section-header text-center">
        <span class="badge">Lộ trình nhập học</span>
        <h2 class="section-title">Quy trình <span>đăng ký tuyển sinh</span></h2>
        <p class="description">Chỉ với 3 bước đơn giản, bạn sẽ chính thức trở thành thành viên của gia đình FPT Polytechnic Đồng Nai.</p>
      </div>

      <div class="steps-grid animate-fade-in">
        <div v-for="step in landingData.processSteps" :key="step.step" class="step-card">
          <div class="step-line"></div>
          <div class="step-number">{{ step.step }}</div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-description">{{ step.description }}</p>
        </div>
      </div>

      <div class="cta-center text-center mt-60">
        <a href="#register" class="btn btn-primary">Bắt đầu ngay hôm nay</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process {
  background-color: var(--secondary);
  color: white;
}

.process .section-title {
  color: white;
}

.process .description {
  color: #cdd4da;
  max-width: 700px;
  margin: 0 auto 60px auto;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  position: relative;
}

.step-card {
  text-align: center;
  position: relative;
  z-index: 2;
  padding: 40px 20px;
}

.step-number {
  width: 100px;
  height: 100px;
  background-color: var(--primary);
  color: white;
  margin: 0 auto 30px auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 900;
  box-shadow: 0 15px 30px rgba(242, 108, 33, 0.4);
  position: relative;
  z-index: 5;
}

.step-title {
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 15px;
}

.step-description {
  color: #cdd4da;
  line-height: 1.7;
}

.step-line {
  position: absolute;
  top: 90px;
  right: -50%;
  width: 100%;
  height: 2px;
  background-color: rgba(242, 108, 33, 0.3);
  z-index: 1;
}

.step-card:last-child .step-line {
  display: none;
}

.mt-60 {
  margin-top: 60px;
}

@media (max-width: 900px) {
  .steps-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }
  
  .step-line {
    display: none;
  }

  .step-card {
    padding: 20px;
  }
}
</style>
