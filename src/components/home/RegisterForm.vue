<script setup>
import { computed, reactive, ref } from 'vue';

const campusOptions = [
  { label: 'Chọn Cơ sở', value: '' },
  { label: 'Đồng Nai', value: 'dongnai' },
  { label: 'TP. Hồ Chí Minh', value: 'hcm' },
  { label: 'Hà Nội', value: 'hanoi' },
  { label: 'Đà Nẵng', value: 'danang' },
  { label: 'Cần Thơ', value: 'cantho' },
];

const majorOptions = [
  { label: 'Chọn Ngành học', value: '' },
  { label: 'Lập trình Web', value: 'lap-trinh-web' },
  { label: 'Lập trình Mobile', value: 'lap-trinh-mobile' },
  { label: 'Ứng dụng phần mềm', value: 'ung-dung-phan-mem' },
  { label: 'Digital Marketing', value: 'digital-marketing' },
  { label: 'Marketing và Bán hàng', value: 'marketing-ban-hang' },
  { label: 'Truyền thông và Tổ chức sự kiện', value: 'truyen-thong-su-kien' },
  { label: 'Thiết kế đồ họa', value: 'thiet-ke-do-hoa' },
  { label: 'Quản trị khách sạn', value: 'quan-tri-khach-san' },
  { label: 'Quản trị dịch vụ du lịch và lữ hành', value: 'du-lich-lu-hanh' },
  { label: 'Công nghệ kỹ thuật điện, điện tử', value: 'dien-dien-tu' },
  { label: 'Công nghệ kỹ thuật điều khiển và tự động hoá', value: 'tu-dong-hoa' },
  { label: 'Công nghệ Chip và Bán dẫn', value: 'chip-ban-dan' },
  { label: 'Công nghệ kỹ thuật cơ khí', value: 'co-khi' },
];

const form = reactive({
  name: '',
  phone: '',
  email: '',
  campus: '',
  major: '',
  facebook: '',
});

const errors = reactive({
  name: '',
  phone: '',
  email: '',
  campus: '',
  major: '',
  facebook: '',
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

const phoneRegex = /^(0|\+84)(3|5|7|8|9)\d{8}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clearErrors = () => {
  Object.keys(errors).forEach((key) => {
    errors[key] = '';
  });
};

const validateForm = () => {
  clearErrors();
  let isValid = true;

  if (!form.name.trim()) {
    errors.name = 'Vui lòng nhập họ và tên';
    isValid = false;
  }

  if (!form.phone.trim()) {
    errors.phone = 'Vui lòng nhập số điện thoại';
    isValid = false;
  } else if (!phoneRegex.test(form.phone.trim())) {
    errors.phone = 'Số điện thoại chưa đúng định dạng';
    isValid = false;
  }

  if (!form.campus) {
    errors.campus = 'Vui lòng chọn cơ sở';
    isValid = false;
  }

  if (!form.major) {
    errors.major = 'Vui lòng chọn ngành học';
    isValid = false;
  }

  return isValid;
};

const resetForm = () => {
  Object.keys(form).forEach((key) => {
    form[key] = '';
  });
  clearErrors();
};

const handleSubmit = () => {
  if (!validateForm()) return;

  isSubmitting.value = true;

  setTimeout(() => {
    isSubmitting.value = false;
    showSuccess.value = true;

    setTimeout(() => {
      showSuccess.value = false;
      resetForm();
    }, 2500);
  }, 1400);
};

const submitText = computed(() =>
  isSubmitting.value ? 'ĐANG GỬI THÔNG TIN...' : 'GỬI THÔNG TIN'
);
</script>

<template>
  <section id="register" class="register-section">
    <div class="glow-wrap">
      <div class="glow glow-orange"></div>
      <div class="glow glow-blue"></div>
    </div>

    <div class="container register-container">
      <div class="register-card">
        <div class="register-header">
           <div class="badge-mini">
              <span class="icon">✨</span> Chinh phục học bổng
           </div>
          <h2 class="register-title">
            BẠN ĐỦ BẢN LĨNH CHINH PHỤC HỌC BỔNG?
          </h2>
          <p class="register-subtitle">
            Đăng ký ngay để nhận tư vấn chi tiết về chương trình học bổng
          </p>
        </div>

        <form class="register-form" @submit.prevent="handleSubmit" novalidate>
          <div class="form-grid">
            <div class="form-group">
              <label class="form-label">Họ và Tên <span>*</span></label>
              <input v-model="form.name" type="text" class="form-control" placeholder="Nhập họ và tên" />
              <small v-if="errors.name" class="error-text">{{ errors.name }}</small>
            </div>

            <div class="form-group">
              <label class="form-label">Số điện thoại <span>*</span></label>
              <input v-model="form.phone" type="tel" class="form-control" placeholder="Nhập số điện thoại" />
              <small v-if="errors.phone" class="error-text">{{ errors.phone }}</small>
            </div>

            <div class="form-group">
              <label class="form-label">Email (nếu có)</label>
              <input v-model="form.email" type="email" class="form-control" placeholder="Nhập email" />
            </div>

            <div class="form-group">
              <label class="form-label">Cơ sở <span>*</span></label>
              <div class="select-wrap">
                <select v-model="form.campus" class="form-control form-select">
                  <option v-for="option in campusOptions" :key="option.value" :value="option.value" :disabled="option.value === ''">
                    {{ option.label }}
                  </option>
                </select>
              </div>
              <small v-if="errors.campus" class="error-text">{{ errors.campus }}</small>
            </div>

            <div class="form-group">
              <label class="form-label">Chọn ngành đăng ký học <span>*</span></label>
              <div class="select-wrap">
                <select v-model="form.major" class="form-control form-select">
                  <option v-for="option in majorOptions" :key="option.value" :value="option.value" :disabled="option.value === ''">
                    {{ option.label }}
                  </option>
                </select>
              </div>
              <small v-if="errors.major" class="error-text">{{ errors.major }}</small>
            </div>

            <div class="form-group">
              <label class="form-label">Link Facebook (nếu có)</label>
              <input v-model="form.facebook" type="url" class="form-control" placeholder="Nhập link" />
            </div>
          </div>

          <p class="form-consent">
            *Đồng ý để dữ liệu cá nhân của Anh/Chị được thu thập trên trang này, được xử lý
            và lưu trữ bởi Trường Cao đẳng FPT Polytechnic (đơn vị thành viên của Công ty
            TNHH Giáo dục FPT) cho mục đích bảo vệ dữ liệu cá nhân.
          </p>

          <div class="btn-wrap">
            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              {{ submitText }}
            </button>
          </div>
        </form>

        <transition name="fade">
          <div v-if="showSuccess" class="success-overlay">
            <div class="success-box">
              <div class="success-icon">✓</div>
              <h3 class="success-title">Đăng ký thành công</h3>
              <p>Nhà trường sẽ liên hệ sớm nhất với bạn.</p>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.register-section {
  position: relative;
  padding: 100px 0;
  background: white;
  overflow: hidden;
}

.glow-wrap {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  pointer-events: none;
}

.glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
}

.glow-orange { top: -100px; right: -100px; background: #f26c21; }
.glow-blue { bottom: -150px; left: -150px; background: #0099ff; }

.register-card {
  position: relative;
  background: white;
  border-radius: 40px;
  padding: 60px 30px;
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  z-index: 10;
  max-width: 1100px;
  margin: 0 auto;
}

.register-header { text-align: center; margin-bottom: 45px; }

.badge-mini {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #fff4ec;
  color: #f26c21;
  padding: 8px 20px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.register-title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  color: #f26c21;
  line-height: 1.2;
}

.register-subtitle { color: #666; font-size: 1.1rem; font-weight: 500; }

.form-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px 20px; }

.form-label { font-weight: 700; font-size: 0.95rem; color: #333; margin-bottom: 8px; }
.form-label span { color: #f26c21; }

.form-control {
  height: 52px;
  padding: 0 16px;
  border: 1.5px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  outline: none;
  transition: 0.3s;
}

.form-control:focus { border-color: #f26c21; box-shadow: 0 0 0 4px rgba(242, 108, 33, 0.1); }

.select-wrap { position: relative; }
.select-wrap::after {
  content: '⌄'; position: absolute; right: 15px; top: 50%; transform: translateY(-50%);
  pointer-events: none; font-size: 1.2rem; color: #999;
}

.form-select { appearance: none; cursor: pointer; }

.form-consent { margin-top: 30px; font-size: 0.85rem; color: #888; line-height: 1.6; font-style: italic; }

.btn-wrap { margin-top: 40px; }

.submit-btn {
  width: 100%; padding: 20px; border-radius: 15px;
  background: linear-gradient(90deg, #f26c21 0%, #ff8c42 100%);
  color: white; font-size: 1.25rem; border: none; cursor: pointer;
  box-shadow: 0 10px 30px rgba(242, 108, 33, 0.3); transition: 0.3s;
}

.submit-btn:hover { transform: translateY(-3px); box-shadow: 0 15px 40px rgba(242, 108, 33, 0.4); }

.error-text { color: #dc3545; font-size: 0.8rem; margin-top: 5px; font-weight: 600; }

.success-overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(255, 255, 255, 0.98);
  display: flex; align-items: center; justify-content: center;
  z-index: 100; border-radius: 40px;
}

.success-icon {
  width: 80px; height: 80px; background: #23b26d; color: white; border-radius: 50%;
  display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 20px;
}

.success-title { font-size: 2rem; color: #1a1a1a; margin-bottom: 10px; }

@media (max-width: 950px) { .form-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 600px) { .register-card { padding: 40px 20px; } .form-grid { grid-template-columns: 1fr; } }
</style>