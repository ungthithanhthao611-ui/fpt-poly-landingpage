<script setup>
import { ref, onMounted } from 'vue';
import * as XLSX from 'xlsx';

const records = ref([]);

onMounted(() => {
  try {
    const data = localStorage.getItem('registrations');
    if (data) {
      records.value = JSON.parse(data);
    }
  } catch (e) {
    console.error('Error loading data', e);
  }
});

const downloadExcel = () => {
  if (records.value.length === 0) {
    alert('Chưa có dữ liệu đăng ký nào!');
    return;
  }
  
  // Format data for Excel
  const dataToExport = records.value.map((item, index) => ({
    'STT': index + 1,
    'Họ và tên': item.name,
    'Số điện thoại': item.phone,
    'Email': item.email || '',
    'Cơ sở': item.campus,
    'Ngành': item.major,
    'Facebook': item.facebook || '',
    'Nguồn': item.source,
    'Ngày đăng ký': item.createdAt
  }));

  // Create worksheet
  const worksheet = XLSX.utils.json_to_sheet(dataToExport);
  
  // Create workbook and append sheet
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Danh sách đăng ký");
  
  // Trigger download
  XLSX.writeFile(workbook, `Danh_sach_dang_ky_${new Date().toISOString().slice(0,10)}.xlsx`);
};
</script>

<template>
  <div class="excel-page">
    <div class="excel-card">
      <div class="icon-wrap">
        📊
      </div>
      <h2>Quản lý dữ liệu đăng ký</h2>
      <p>Tổng số lượt đăng ký hiện tại: <strong>{{ records.length }}</strong></p>
      
      <button @click="downloadExcel" class="download-btn" :disabled="records.length === 0">
        Tải xuống Excel (.xlsx)
      </button>

      <a href="/" class="back-link">← Quay lại trang chủ</a>
    </div>
  </div>
</template>

<style scoped>
.excel-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f6f9;
  font-family: 'Inter', sans-serif;
}

.excel-card {
  background: white;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  text-align: center;
  max-width: 500px;
  width: 90%;
}

.icon-wrap {
  font-size: 4rem;
  margin-bottom: 20px;
}

h2 {
  color: #f26c21;
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-weight: 800;
}

p {
  color: #555;
  font-size: 1.1rem;
  margin-bottom: 30px;
}

.download-btn {
  background: #23b26d;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
}

.download-btn:hover {
  background: #1e995e;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(35, 178, 109, 0.3);
}

.download-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.back-link {
  display: block;
  margin-top: 25px;
  color: #666;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: 0.3s;
}

.back-link:hover {
  color: #f26c21;
}
</style>
