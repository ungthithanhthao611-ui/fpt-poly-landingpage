<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue';

const sectionRef = ref(null);
const hasAnimated = ref(false);
let observer = null;

const stats = [
  {
    id: 1,
    target: 97.7,
    decimals: 1,
    suffix: '%',
    title: 'Sinh viên có việc làm sau tốt nghiệp',
    description: 'Khẳng định chất lượng đào tạo gắn với thực tiễn',
    iconSrc: '/why-icon1.svg',
    iconAlt: 'Tỷ lệ sinh viên có việc làm',
  },
  {
    id: 2,
    target: 2000,
    decimals: 0,
    suffix: '+',
    title: 'Doanh nghiệp đối tác',
    description: 'Đồng hành trong đào tạo, thực tập và tuyển dụng',
    iconSrc: '/why-icon2.svg',
    iconAlt: 'Doanh nghiệp đối tác',
  },
  {
    id: 3,
    target: 40000,
    decimals: 0,
    suffix: '+',
    title: 'Sinh viên và cựu sinh viên',
    description: 'Đang học tập, làm việc trong nhiều lĩnh vực',
    iconSrc: '/why-icon3.svg',
    iconAlt: 'Sinh viên và cựu sinh viên',
  },
  {
    id: 4,
    target: 12,
    decimals: 0,
    suffix: '',
    title: 'Cơ sở đào tạo toàn quốc',
    description:
      'FPT Polytechnic Đồng Nai thuộc hệ thống đào tạo thực học – thực nghiệp trên toàn quốc',
    iconSrc: '/why-icon4.svg',
    iconAlt: 'Cơ sở đào tạo toàn quốc',
  },
];

const counters = reactive(
  stats.reduce((acc, item) => {
    acc[item.id] = 0;
    return acc;
  }, {})
);

const formatNumber = (value, decimals = 0) => {
  if (decimals > 0) {
    return value.toLocaleString('vi-VN', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  }

  return Math.round(value).toLocaleString('vi-VN');
};

const displayStats = computed(() =>
  stats.map((item) => ({
    ...item,
    displayValue: `${formatNumber(counters[item.id], item.decimals)}${item.suffix}`,
  }))
);

const animateCounter = (id, target, duration = 1800) => {
  const startTime = performance.now();

  const step = (currentTime) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);

    const eased =
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    counters[id] = target * eased;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      counters[id] = target;
    }
  };

  requestAnimationFrame(step);
};

const startAnimation = () => {
  if (hasAnimated.value) return;

  hasAnimated.value = true;

  stats.forEach((item, index) => {
    setTimeout(() => {
      animateCounter(item.id, item.target, 1600 + index * 120);
    }, index * 120);
  });
};

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer?.disconnect();
        }
      });
    },
    {
      threshold: 0.28,
    }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<template>
  <section id="why-choose" ref="sectionRef" class="why-choose">
    <div class="container container-why">
      <div class="section-header text-center">
        <div class="mini-badge">
          <span>Tại sao</span> chọn <span>chúng tôi</span>
        </div>

        <h2 class="section-title">
          LÝ DO LỰA CHỌN<br />
          <span class="gradient-text">FPT POLYTECHNIC ĐỒNG NAI</span>
        </h2>

        <p class="section-subtitle">
          Môi trường học thực tế, năng động và định hướng nghề nghiệp rõ ràng cho sinh viên khu vực Đồng Nai.
        </p>
      </div>

      <div class="stats-grid">
        <div v-for="stat in displayStats" :key="stat.id" class="stat-item">
          <div class="stat-icon-wrapper">
            <img
              :src="stat.iconSrc"
              :alt="stat.iconAlt"
              class="stat-icon"
              loading="lazy"
            />
          </div>

          <h3 class="stat-value">{{ stat.displayValue }}</h3>
          <h4 class="stat-title">{{ stat.title }}</h4>
          <p class="stat-desc">{{ stat.description }}</p>
        </div>
      </div>

      <div class="bottom-cta">
        <p>Tham gia cùng hàng nghìn sinh viên đã và đang tin tưởng lựa chọn FPT Polytechnic Đồng Nai</p>
        <a href="#register" class="cta-btn">TÌM HIỂU THÊM VỀ FPT POLYTECHNIC ĐỒNG NAI</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-choose {
  background: #f8f8f8;
  padding: 100px 0 90px;
}

.container-why {
  max-width: 1180px;
  margin: 0 auto;
}

.mini-badge {
  display: inline-block;
  background-color: #fff;
  padding: 8px 20px;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.9rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  margin-bottom: 24px;
}

.mini-badge span:first-child { color: #f26c21; }
.mini-badge span:last-child { color: #00adef; }

.section-title {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  line-height: 1.15;
  margin: 0;
}

.section-title .gradient-text {
  background: linear-gradient(90deg, #f26c21 0%, #c78655 45%, #00adef 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  display: block;
}

.section-subtitle {
  max-width: 760px;
  margin: 18px auto 0;
  font-size: 1rem;
  color: #667085;
  line-height: 1.7;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 34px;
  margin-top: 72px;
}

.stat-item { text-align: center; }

.stat-icon-wrapper {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
}

.stat-icon {
  width: 120px;
  height: 120px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.stat-item:hover .stat-icon {
  transform: translateY(-4px) scale(1.03);
}

.stat-value {
  font-size: 2.35rem;
  color: #f26c21;
  margin: 0 0 10px;
}

.stat-title {
  font-size: 1.05rem;
  color: #1a1a1b;
  line-height: 1.35;
  margin: 0 0 12px;
}

.stat-desc {
  font-size: 0.92rem;
  color: #667085;
  line-height: 1.6;
  max-width: 260px;
  margin: 0 auto;
}

.bottom-cta { text-align: center; margin-top: 56px; }

.bottom-cta p {
  color: #5e6470;
  font-size: 0.98rem;
  margin-bottom: 18px;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 22px;
  border-radius: 999px;
  background: linear-gradient(180deg, #f59a4a 0%, #f07e28 100%);
  color: white;
  font-weight: 700;
  font-size: 0.95rem;
  box-shadow: 0 10px 24px rgba(242, 108, 33, 0.2);
  transition: all 0.2s ease;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(242, 108, 33, 0.28);
}

@media (max-width: 1024px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 48px 28px; }
}

@media (max-width: 640px) {
  .why-choose { padding: 70px 0; }
  .stats-grid { grid-template-columns: 1fr; gap: 42px; margin-top: 52px; }
  .stat-icon-wrapper { height: 110px; margin-bottom: 16px; }
  .stat-icon { width: 90px; height: 90px; }
  .stat-value { font-size: 2rem; }
}
</style>