<script setup>
import { computed, reactive, ref, onMounted } from 'vue';

const isVisible = ref(false);
const showSuccess = ref(false);
const isSubmitting = ref(false);

const campusOptions = [
  { label: 'Chọn Cơ sở', value: '' },
  { label: 'Đồng Nai', value: 'dongnai' },
  { label: 'TP. Hồ Chí Minh', value: 'hcm' },
  { label: 'Hà Nội', value: 'hanoi' },
];

const majorOptions = [
  { label: 'Chọn Ngành học', value: '' },
  { label: 'Lập trình Web', value: 'lap-trinh-web' },
  { label: 'Digital Marketing', value: 'digital-marketing' },
  { label: 'Thiết kế đồ họa', value: 'thiet-ke-do-hoa' },
  { label: 'Quản trị khách sạn', value: 'quan-tri-khach-san' },
  { label: 'Logistics', value: 'logistics' },
];

const form = reactive({
  name: '',
  phone: '',
  email: '',
  campus: 'dongnai', // Default to Dong Nai as requested
  major: '',
});

const errors = reactive({
  name: '',
  phone: '',
  major: '',
});

const closePopup = () => {
  isVisible.value = false;
};

const validateForm = () => {
  let isValid = true;
  errors.name = !form.name ? 'Vui lòng nhập họ tên' : '';
  errors.phone = !form.phone ? 'Vui lòng nhập số điện thoại' : '';
  errors.major = !form.major ? 'Vui lòng chọn ngành' : '';
  
  if (errors.name || errors.phone || errors.major) isValid = false;
  return isValid;
};

const handleSubmit = () => {
  if (!validateForm()) return;
  isSubmitting.value = true;
  
  // Lưu vào localStorage
  const newEntry = {
    ...form,
    source: 'Popup',
    createdAt: new Date().toLocaleString('vi-VN')
  };
  const records = JSON.parse(localStorage.getItem('registrations') || '[]');
  records.push(newEntry);
  localStorage.setItem('registrations', JSON.stringify(records));
  
  setTimeout(() => {
    isSubmitting.value = false;
    showSuccess.value = true;
    setTimeout(() => {
        showSuccess.value = false;
        closePopup();
    }, 2000);
  }, 1500);
};

onMounted(() => {
    setTimeout(() => {
        isVisible.value = true;
    }, 1000);
});
</script>

<template>
  <transition name="fade">
    <div v-if="isVisible" class="popup-overlay" @click.self="closePopup">
      <div class="popup-container">
        <button class="close-btn" @click="closePopup">×</button>
        
        <div class="popup-content">
          <!-- Left side: Image -->
          <div class="popup-image">
             <img src="/fpt_recruitment_poster_1774947811802.png" alt="Recruitment" />
             <div class="image-overlay">
                <h3>TUYỂN SINH 2026</h3>
                <p>CƠ SỞ ĐỒNG NAI</p>
             </div>
          </div>

          <!-- Right side: Form -->
          <div class="popup-form-side">
            <h2 class="form-title">ĐĂNG KÝ NHẬN THÔNG TIN</h2>
            <p class="form-subtitle">Dành riêng cho thí sinh tại <strong>Đồng Nai</strong></p>

            <form @submit.prevent="handleSubmit" class="mini-form">
              <div class="input-group">
                <label>Họ tên *</label>
                <input v-model="form.name" type="text" placeholder="Nhập họ và tên" />
                <span v-if="errors.name" class="err">{{ errors.name }}</span>
              </div>

              <div class="input-group">
                <label>Số điện thoại *</label>
                <input v-model="form.phone" type="tel" placeholder="Nhập số điện thoại" />
                <span v-if="errors.phone" class="err">{{ errors.phone }}</span>
              </div>

              <div class="input-group">
                <label>Ngành đăng ký học *</label>
                <select v-model="form.major">
                  <option v-for="opt in majorOptions" :key="opt.value" :value="opt.value">
                    {{ opt.label }}
                  </option>
                </select>
                <span v-if="errors.major" class="err">{{ errors.major }}</span>
              </div>

              <div class="input-group">
                <label>Cơ sở học *</label>
                <select v-model="form.campus">
                  <option v-for="opt in campusOptions" :key="opt.value" :value="opt.value">
                    {{ opt.label }}
                  </option>
                </select>
              </div>

              <div class="form-check">
                <input type="checkbox" id="consent" checked />
                <label for="consent">Tôi đồng ý nhận tư vấn tuyển sinh</label>
              </div>

              <button type="submit" class="submit-btn-popup" :disabled="isSubmitting">
                {{ isSubmitting ? 'ĐANG GỬI...' : 'ĐĂNG KÝ NGAY' }}
              </button>
            </form>

            <div v-if="showSuccess" class="success-msg">
               <div class="icon">✓</div>
               <p>Đăng ký thành công!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.popup-container {
  position: relative;
  width: 100%;
  max-width: 900px;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0,0,0,0.3);
  animation: slideUp 0.5s ease-out;
}

@keyframes slideUp {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.close-btn {
  position: absolute;
  top: 15px; right: 15px;
  width: 35px; height: 35px;
  background: white;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: 0.3s;
}

.close-btn:hover { background: #f26c21; color: white; }

.popup-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.popup-image {
  position: relative;
  height: 100%;
  min-height: 500px;
}

.popup-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  bottom: 0; left: 0; width: 100%;
  padding: 30px;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
}

.image-overlay h3 { font-size: 1.8rem; font-weight: 950; margin: 0; }
.image-overlay p { font-size: 1.1rem; opacity: 0.9; margin: 5px 0 0 0; }

.popup-form-side {
  padding: 40px;
  position: relative;
}

.form-title {
  color: #f26c21;
  font-size: 1.8rem;
  font-weight: 950;
  margin-bottom: 5px;
}

.form-subtitle {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 30px;
}

.input-group { margin-bottom: 15px; display: flex; flex-direction: column; }
.input-group label { font-weight: 700; font-size: 0.85rem; margin-bottom: 5px; color: #444; }
.input-group input, .input-group select {
  padding: 12px;
  border: 1.5px solid #eee;
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  transition: 0.3s;
}

.input-group input:focus, .input-group select:focus { border-color: #f26c21; }

.err { color: #dc3545; font-size: 0.75rem; margin-top: 3px; font-weight: 600; }

.form-check {
  display: flex; gap: 8px; align-items: start; margin-top: 20px;
  font-size: 0.8rem; color: #777;
}

.submit-btn-popup {
  width: 100%;
  margin-top: 25px;
  padding: 15px;
  background: linear-gradient(90deg, #f26c21, #ff8c42);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 950;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(242, 108, 33, 0.2);
  transition: 0.3s;
}

.submit-btn-popup:hover { transform: translateY(-2px); box-shadow: 0 15px 30px rgba(242, 108, 33, 0.3); }
.submit-btn-popup:disabled { opacity: 0.7; cursor: not-allowed; }

.success-msg {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: white;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  z-index: 5;
}

.success-msg .icon {
  width: 60px; height: 60px; background: #23b26d; color: white;
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-size: 2rem; margin-bottom: 15px;
}

/* Animations */
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 800px) {
  .popup-container { max-width: 400px; }
  .popup-content { grid-template-columns: 1fr; }
  .popup-image { display: none; }
  .popup-form-side { padding: 30px 20px; }
}
</style>
