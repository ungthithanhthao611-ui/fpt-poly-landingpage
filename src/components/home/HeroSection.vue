<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const slides = [
  { img: '/8c2a75c51d599307ca48.jpg', link: '#register' },
  { img: '/hero-img1.png', link: 'https://caodang.fpt.edu.vn/' }
];

const currentSlide = ref(0);
let slideInterval = null;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
  resetInterval();
};

const resetInterval = () => {
  if (slideInterval) clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
};

onMounted(() => {
  resetInterval();
});

onUnmounted(() => {
  if (slideInterval) clearInterval(slideInterval);
});
</script>

<template>
  <section id="hero" class="hero">
    <div class="slider-container">
      <div 
        v-for="(slide, index) in slides" 
        :key="index"
        :class="['slide', { 'active': currentSlide === index }]"
      >
        <a :href="slide.link" class="slide-link">
          <img :src="slide.img" :alt="'Banner ' + (index + 1)" class="bg-img" />
        </a>
      </div>
      
      <!-- Dots -->
      <div class="slider-dots">
        <span 
          v-for="(_, index) in slides" 
          :key="index"
          :class="['dot', { 'active': currentSlide === index }]"
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  margin-top: 90px; /* Base header height */
  overflow: hidden;
  background: white;
}

.slider-container {
  position: relative;
  width: 100%;
}

.slide {
  width: 100%;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  display: none;
}

.slide.active {
  display: block;
  opacity: 1;
}

.bg-img {
  width: 100%;
  height: auto;
  display: block;
}

.slider-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

.dot.active {
  background: #f26c21;
  width: 30px;
  border-radius: 6px;
}

@media (max-width: 1024px) {
  .hero {
    margin-top: 75px; /* Adjust for mobile/scrolled header */
  }
}

@media (max-width: 600px) {
  .slider-dots {
    bottom: 10px;
  }
  .dot {
    width: 8px;
    height: 8px;
  }
  .dot.active {
    width: 20px;
  }
}
</style>
