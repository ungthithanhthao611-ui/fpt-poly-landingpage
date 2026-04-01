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
              <span v-if="item.children" class="arrow">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
            </a>
            
            <ul v-if="item.children" class="dropdown-menu level-2">
              <li v-for="child in item.children" :key="child.name" class="dropdown-item" :class="{ 'has-sub': child.children }">
                <a :href="child.href" class="dropdown-link">
                  {{ child.name }}
                  <span v-if="child.children" class="sub-arrow">
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L5 5L1 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </span>
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
             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hotline-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
             <span class="hotline-text">Hotline: {{ landingData.college.hotline }}</span>
          </div>
        </a>
        
        <button :class="['mobile-toggle', { 'open': isMobileMenuOpen }]" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <div v-if="isMobileMenuOpen" class="overlay" @click="toggleMobileMenu"></div>
    <div :class="['mobile-sidebar', { 'active': isMobileMenuOpen }]">
      <div class="sidebar-body">
        <ul class="mobile-nav">
          <li v-for="item in landingData.navigation" :key="item.name" class="mobile-menu-item">
            <div class="mobile-link-row">
              <a :href="item.href" class="mobile-menu-link" @click="!item.children ? toggleMobileMenu() : toggleExpand(item.name)">{{ item.name }}</a>
              <button v-if="item.children" class="expand-btn" @click="toggleExpand(item.name)" :class="{ 'expanded': expandedItems.includes(item.name) }">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
            </div>
            
            <ul v-if="item.children && expandedItems.includes(item.name)" class="mobile-sub-nav">
              <li v-for="child in item.children" :key="child.name">
                <div class="mobile-link-row">
                  <a :href="child.href" @click="!child.children ? toggleMobileMenu() : toggleExpand(child.name)">{{ child.name }}</a>
                  <button v-if="child.children" class="expand-btn sub-expand" @click="toggleExpand(child.name)" :class="{ 'expanded': expandedItems.includes(child.name) }">
                    <svg width="10" height="6" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
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
          
          <li class="mobile-menu-item item-hotline">
            <a :href="'tel:' + landingData.college.hotline" class="mobile-hotline-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hotline-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              Hotline: {{ landingData.college.hotline }}
            </a>
          </li>
        </ul>
      </div>
    </div>
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

.main-menu { display: flex; gap: 14px; list-style: none; flex-wrap: nowrap; }

.menu-item { position: relative; height: 90px; display: flex; align-items: center; }
.scrolled .menu-item { height: 75px; }

.menu-link {
  font-size: 0.85rem; font-weight: 600; color: #333; white-space: nowrap;
  display: flex; align-items: center; gap: 4px; transition: 0.2s;
  font-family: var(--font-main);
}

.menu-link:hover { color: #f26c21; }

.dropdown-menu {
  position: absolute; background: white; min-width: 240px; box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  opacity: 0; visibility: hidden; transition: all 0.25s ease; padding: 8px 0; z-index: 10;
}

.level-2 { top: 100%; left: 0; border-radius: 0 0 10px 10px; transform: translateY(10px); border-top: 3px solid #f26c21; }
.menu-item:hover .level-2 { opacity: 1; visibility: visible; transform: translateY(0); }

.level-3 { top: -10px; left: 100%; border-radius: 10px; transform: translateX(10px); border-left: 1px solid #eee; }
.dropdown-item { position: relative; list-style: none; }
.dropdown-item:hover > .level-3 { opacity: 1; visibility: visible; transform: translateX(0); }

.dropdown-link {
  display: flex; justify-content: space-between; align-items: center; padding: 8px 20px;
  font-size: 0.85rem; font-weight: 500; color: #444; transition: 0.2s; cursor: pointer;
  font-family: var(--font-main);
}

.dropdown-item:hover > .dropdown-link { color: #f26c21; background-color: #fcfcfc; }

.header-actions { display: flex; align-items: center; gap: 15px; }

.hotline-link {
  text-decoration: none;
}

.hotline-info {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #f26c21;
  transition: 0.3s;
  flex-shrink: 0;
}

.hotline-info:hover {
  opacity: 0.8;
}

.hotline-text {
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--font-main);
  white-space: nowrap;
}

.mobile-toggle { 
  display: none; flex-direction: column; gap: 6px; 
  background: none; border: none; cursor: pointer; padding: 5px; 
  position: relative; z-index: 4000;
}
.mobile-toggle span { 
  width: 28px; height: 3px; background: #666; border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-toggle.open span:nth-child(1) { transform: translateY(9px) rotate(45deg); background: #ffffff; }
.mobile-toggle.open span:nth-child(2) { opacity: 0; }
.mobile-toggle.open span:nth-child(3) { transform: translateY(-9px) rotate(-45deg); background: #ffffff; }

.overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 2500; }

.mobile-sidebar {
  position: fixed; top: 0; left: -100%; width: 80%; max-width: 340px; height: 100vh;
  background: white; z-index: 3000; transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex; flex-direction: column; box-shadow: 10px 0 30px rgba(0,0,0,0.1); overflow: visible;
}

.mobile-sidebar.active { left: 0; }

.sidebar-body { flex: 1; overflow-y: auto; padding: 30px 25px; }
.mobile-nav { list-style: none; padding: 0; }
.mobile-menu-item { border-bottom: 0px solid transparent; }
.mobile-link-row { display: flex; justify-content: space-between; align-items: center; width: 100%; }

.mobile-menu-link { 
  display: block; padding: 15px 0; font-weight: 500; color: #333; 
  font-size: 0.95rem; font-family: var(--font-main); flex: 1;
}

.expand-btn {
  background: transparent; width: 40px; height: 40px; border-radius: 6px;
  border: none; display: flex; align-items: center; justify-content: center; 
  color: #666; transition: 0.3s; cursor: pointer;
}
.expand-btn.expanded { transform: rotate(180deg); color: #f26c21; }

.mobile-sub-nav { padding-left: 0; list-style: none; }
.mobile-sub-nav li { border-top: 0; }
.mobile-sub-nav a { display: block; padding: 12px 15px; font-size: 0.9rem; color: #555; font-weight: 400; font-family: var(--font-main); }

.item-hotline { margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee; }
.mobile-hotline-link {
  display: flex; align-items: center; gap: 8px; color: #f26c21;
  font-weight: 600; font-size: 1.05rem; padding: 10px 0;
  text-decoration: none; font-family: var(--font-main);
}

@media (max-width: 1200px) { .main-menu { gap: 8px; } .menu-link { font-size: 0.8rem; } }
@media (max-width: 1024px) { 
  .nav-desktop { display: none; } 
  .mobile-toggle { display: flex; } 
  .hotline-link { display: none; }
}
</style>
