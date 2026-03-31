<script setup>
const partners = [
  { name: 'HyperSol', logo: '/partner-img1.png' },
  { name: 'TopCV', logo: '/partner-img2.png' },
  { name: 'CMC', logo: '/partner-img3.png' },
  { name: 'Elcom', logo: '/partner-img4.png' },
  { name: 'GHTK', logo: '/partner-img5.png' },
  { name: 'Novaon', logo: '/partner-img6.png' },
  { name: 'Mik Group', logo: '/partner-img7.png' },
  { name: 'Sol Beach', logo: '/partner-img8.png' },
  { name: 'Sun Group', logo: '/partner-img9.png' }
];
</script>

<template>
  <section class="partner-section">
    <div class="container container-partner">
      <div class="section-header">
        <h2 class="section-title">
          <span class="orange">ĐỐI TÁC </span> 
          <span class="gradient-text">CỦA CHÚNG TÔI</span>
        </h2>
      </div>
      <div class="partner-grid">
         <div v-for="partner in partners" :key="partner.name" class="partner-item">
            <img :src="partner.logo" :alt="partner.name" class="partner-logo" />
         </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.partner-section {
  padding: 80px 0 100px;
  background-color: white;
}

.section-header {
  text-align: center;
  margin-bottom: 70px;
}

.section-title {
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  color: #1a1a1b;
}

.section-title .orange { color: #f26c21; }

.gradient-text {
  background: linear-gradient(90deg, #f26c21 0%, #c78655 45%, #00adef 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  display: inline-block;
}

.partner-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  align-items: center;
}

.partner-item {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.partner-item:hover { transform: scale(1.1); }

.partner-logo {
  max-width: 100%;
  max-height: 80px;
  object-fit: contain;
  transition: 0.3s;
}

@media (max-width: 1024px) {
  .partner-grid { grid-template-columns: repeat(3, 1fr); gap: 30px; }
}

@media (max-width: 768px) {
  .section-title { font-size: 2.2rem; }
  .partner-grid { grid-template-columns: repeat(2, 1fr); }
  .partner-logo { max-height: 60px; }
}
</style>
