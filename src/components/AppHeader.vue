<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { landingData } from '../data/landingData';

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const expandedItems = ref([]);
const toggleExpand = (name) => {
  const index = expandedItems.value.indexOf(name);
  if (index > -1) expandedItems.value.splice(index, 1);
  else expandedItems.value.push(name);
};
</script>

<template>
  <header :class="['header', { 'scrolled': isScrolled }]">
    <div class="container header-container">
      <!-- Logo -->
      <div class="logo">
        <a href="/">
          <img src="/logo.svg" alt="FPT Polytechnic" />
        </a>
      </div>

      <!-- Navigation Desktop -->
      <nav class="nav-desktop">
        <ul class="main-menu">
          <li v-for="item in landingData.navigation" :key="item.name" class="menu-item" :class="{ 'has-children': item.children }">
            <a :href="item.href" class="menu-link">
              {{ item.name }}
              <span v-if="item.children" class="arrow">⌄</span>
            </a>
            
            <ul v-if="item.children" class="dropdown-menu level-2">
              <li v-for="child in item.children" :key="child.name" class="dropdown-item" :class="{ 'has-sub': child.children }">
                <a :href="child.href" class="dropdown-link">
                  {{ child.name }}
                  <span v-if="child.children" class="sub-arrow">›</span>
                </a>
                
                <ul v-if="child.children" class="dropdown-menu level-3">
                  <li v-for="subChild in child.children" :key="subChild.name" class="dropdown-item">
                    <a :href="subChild.href" class="dropdown-link">
                      {{ subChild.name }}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <div class="header-actions">
        <a :href="'tel:' + landingData.college.hotline" class="hotline-link">
          <div class="hotline-info">
             <span class="hotline-label">Hotline:</span>
             <span class="hotline-number">{{ landingData.college.hotline }}</span>
          </div>
        </a>
        
        <button class="mobile-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <div :class="['mobile-sidebar', { 'active': isMobileMenuOpen }]">
      <div class="sidebar-header">
        <img src="/logo.svg" alt="Logo" class="sidebar-logo" />
        <button class="close-sidebar" @click="toggleMobileMenu">✕</button>
      </div>
      <div class="sidebar-body">
        <ul class="mobile-nav">
          <li v-for="item in landingData.navigation" :key="item.name" class="mobile-menu-item">
            <div class="mobile-link-row">
              <a :href="item.href" class="mobile-menu-link" @click="toggleMobileMenu">{{ item.name }}</a>
              <button v-if="item.children" class="expand-btn" @click="toggleExpand(item.name)">
                {{ expandedItems.includes(item.name) ? '−' : '+' }}
              </button>
            </div>
            
            <ul v-if="item.children && expandedItems.includes(item.name)" class="mobile-sub-nav">
              <li v-for="child in item.children" :key="child.name">
                <div class="mobile-link-row">
                  <a :href="child.href" @click="toggleMobileMenu">{{ child.name }}</a>
                  <button v-if="child.children" class="expand-btn sub-expand" @click="toggleExpand(child.name)">
                    {{ expandedItems.includes(child.name) ? '−' : '+' }}
                  </button>
                </div>
                
                <ul v-if="child.children && expandedItems.includes(child.name)" class="mobile-sub-nav-3">
                  <li v-for="subChild in child.children" :key="subChild.name">
                    <a :href="subChild.href" @click="toggleMobileMenu">{{ subChild.name }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="sidebar-footer">
        <a :href="'tel:' + landingData.college.hotline" class="btn-main-orange w-100">GỌI HOTLINE</a>
      </div>
    </div>
    <div v-if="isMobileMenuOpen" class="overlay" @click="toggleMobileMenu"></div>
  </header>
</template>

<style scoped>
.header {
  position: fixed; top: 0; left: 0; width: 100%; height: 90px;
  background-color: white; z-index: 2000; border-bottom: 1px solid #f1f3f5;
  transition: all 0.3s ease;
}

.header.scrolled { height: 75px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08); }

.header-container { height: 100%; display: flex; align-items: center; justify-content: space-between; gap: 20px; }

.logo img { height: 45px; width: auto; display: block; }

.nav-desktop { flex: 1; display: flex; justify-content: center; }

.main-menu { display: flex; gap: 12px; list-style: none; flex-wrap: nowrap; }

.menu-item { position: relative; height: 90px; display: flex; align-items: center; }
.scrolled .menu-item { height: 75px; }

.menu-link {
  font-size: 0.85rem; font-weight: 700; color: #222; white-space: nowrap;
  display: flex; align-items: center; gap: 3px; transition: 0.2s;
  font-family: var(--font-main);
}

.menu-link:hover { color: #f26c21; }

.dropdown-menu {
  position: absolute; background: white; min-width: 260px; box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  opacity: 0; visibility: hidden; transition: all 0.25s ease; padding: 10px 0; z-index: 10;
}

.level-2 { top: 100%; left: 0; border-radius: 0 0 10px 10px; transform: translateY(10px); border-top: 3px solid #f26c21; }
.menu-item:hover .level-2 { opacity: 1; visibility: visible; transform: translateY(0); }

.level-3 { top: -10px; left: 100%; border-radius: 10px; transform: translateX(10px); border-left: 1px solid #eee; }
.dropdown-item { position: relative; list-style: none; }
.dropdown-item:hover > .level-3 { opacity: 1; visibility: visible; transform: translateX(0); }

.dropdown-link {
  display: flex; justify-content: space-between; align-items: center; padding: 12px 20px;
  font-size: 0.88rem; font-weight: 700; color: #333; transition: 0.2s; cursor: pointer;
  font-family: var(--font-main);
}

.dropdown-item:hover > .dropdown-link { background-color: #f26c21; color: white; }

.header-actions { display: flex; align-items: center; gap: 15px; }

.hotline-info {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #f8f9fa;
  padding: 8px 15px;
  border-radius: 30px;
  border: 1px solid #eee;
  transition: 0.3s;
}

.hotline-info:hover {
  background-color: #fff4ec;
  border-color: #f26c21;
  box-shadow: 0 5px 15px rgba(242, 108, 33, 0.1);
}

.hotline-label {
  font-size: 0.85rem;
  color: #666;
  font-weight: 700;
}

.hotline-number { 
  font-size: 1.1rem; 
  font-weight: 950; 
  color: #f26c21; 
  font-family: var(--font-main); 
  white-space: nowrap;
}

.mobile-toggle { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; }
.mobile-toggle span { width: 25px; height: 2px; background: #222; }

.mobile-sidebar {
  position: fixed; top: 0; right: -100%; width: 100%; max-width: 320px; height: 100vh;
  background: white; z-index: 3000; transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex; flex-direction: column; box-shadow: -10px 0 30px rgba(0,0,0,0.1);
}

.mobile-sidebar.active { right: 0; }
.sidebar-header { padding: 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f0f0f0; }
.sidebar-logo { height: 38px; }
.sidebar-body { flex: 1; overflow-y: auto; padding: 10px 20px; }
.mobile-nav { list-style: none; padding: 0; }
.mobile-menu-item { border-bottom: 1px solid #f8f9fa; }
.mobile-link-row { display: flex; justify-content: space-between; align-items: center; width: 100%; }
.mobile-menu-link { display: block; padding: 14px 0; font-weight: 700; color: #222; font-size: 1rem; font-family: var(--font-main); }

.expand-btn {
  background: #f8f9fa; width: 34px; height: 34px; border-radius: 6px; font-weight: 800;
  border: none; display: flex; align-items: center; justify-content: center; color: #f26c21; transition: 0.2s;
}

.mobile-sub-nav { padding-left: 20px; list-style: none; }
.mobile-sub-nav li { border-top: 1px solid #f9f9f9; }
.mobile-sub-nav a { display: block; padding: 12px 0; font-size: 0.9rem; color: #444; font-weight: 600; font-family: var(--font-main); }

.btn-main-orange {
  background: linear-gradient(180deg, #f26c21 0%, #e05b1b 100%); color: white;
  padding: 14px; text-align: center; border-radius: 10px; font-weight: 800; display: block;
}

.overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 2500; }

@media (max-width: 1200px) { .main-menu { gap: 8px; } .menu-link { font-size: 0.8rem; } }
@media (max-width: 1024px) { .nav-desktop { display: none; } .mobile-toggle { display: flex; } }
</style>
