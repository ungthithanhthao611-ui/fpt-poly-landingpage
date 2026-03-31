<script setup>
const actions = [
  { icon: "📄", text: "Quy chế tuyển sinh" },
  { icon: "📝", text: "Nộp Hồ Sơ Online" },
  { icon: "🏫", text: "Đăng ký xét tuyển" },
  { icon: "💬", text: "Inbox tư vấn" }
];
</script>

<template>
  <div class="bottom-action-bar">
    <div class="container bar-container">
      <div v-for="action in actions" :key="action.text" class="bar-button">
        <span class="icon">{{ action.icon }}</span>
        <span class="text">{{ action.text }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bottom-action-bar {
  background-color: #00adef;
  color: white;
  padding: 15px 0;
  position: sticky;
  bottom: 0;
  z-index: 999;
  box-shadow: 0 -10px 30px rgba(0, 173, 239, 0.2);
}

.bar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.bar-button {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.1);
  white-space: nowrap;
}

.bar-button:hover { background-color: rgba(255, 255, 255, 0.1); }

.icon { font-size: 1.25rem; }

.text { font-weight: 800; font-size: 0.95rem; }

@media (max-width: 900px) { .text { font-size: 0.85rem; } .bar-container { gap: 10px; } }

@media (max-width: 600px) {
  .bottom-action-bar { overflow-x: auto; }
  .bar-container { width: max-content; padding: 0 20px; }
}
</style>
