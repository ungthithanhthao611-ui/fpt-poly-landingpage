<script setup>
import AppHeader from './components/AppHeader.vue';
import HeroSection from './components/home/HeroSection.vue';
import RegisterForm from './components/home/RegisterForm.vue';
import WhyChooseSection from './components/home/WhyChooseSection.vue';
import MajorsSection from './components/home/MajorsSection.vue';
import CareerSection from './components/home/CareerSection.vue';
import NewsSection from './components/home/NewsSection.vue';
import AboutSection from './components/home/AboutSection.vue';
import PartnerSection from './components/home/PartnerSection.vue';
import CampusSection from './components/home/CampusSection.vue';
import AppFooter from './components/AppFooter.vue';
import BottomActionBar from './components/home/BottomActionBar.vue';
import RegisterPopup from './components/home/RegisterPopup.vue';
import ExcelDownloadView from './components/ExcelDownloadView.vue';
import ImportArticleView from './components/ImportArticleView.vue';

const currentPath = window.location.pathname;
const isExcelRoute = currentPath === '/excel';
const isImportRoute = currentPath === '/import';
</script>

<template>
  <ExcelDownloadView v-if="isExcelRoute" />
  <ImportArticleView v-else-if="isImportRoute" />
  
  <div v-else class="app-wrapper">
    <AppHeader />
    
    <!-- Popup will show after 1s -->
    <RegisterPopup />

    <main>
      <HeroSection />
      
      <div id="register-top" class="section-divider">
        <RegisterForm />
      </div>

      <WhyChooseSection />
      
      <MajorsSection />
      
      <CareerSection />
      
      <NewsSection />
      
      <AboutSection />
      
      <PartnerSection />
      
      <CampusSection />
      
    </main>
    
    <AppFooter />
    
    <BottomActionBar />
  </div>
</template>

<style>
.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

.text-center { text-align: center; }
.text-left { text-align: left; }
.text-right { text-align: right; }

.section-divider {
  background-color: #f8f9fa;
  padding-bottom: 50px;
}

/* Animations */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeInUp 0.8s ease forwards;
}

.mt-60 { margin-top: 60px; }
.mt-30 { margin-top: 30px; }
.mt-80 { margin-top: 80px; }

/* Grid Utilities */
.grid { display: grid; gap: 30px; }
.grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; }

@media (max-width: 900px) {
  .grid-3 { grid-template-columns: repeat(2, 1fr); }
  .grid-4 { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
}
</style>
