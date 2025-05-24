<template>
  <div class="app-container">
    <Sidebar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Sidebar
  }
}
</script>

<style>
.app-container {
  display: flex;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

.main-content {
  margin-left: 220px;
  padding: 20px;
  flex: 1;
  background-color: #ecf0f1;
}

.page-container {
  background: white;
  padding: 20px;
  border-radius: 10px;
}
</style>
