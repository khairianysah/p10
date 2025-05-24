<template>
  <div class="sidebar">
    <h2 class="logo">IN</h2>
    <router-link to="/" class="nav-link">Login</router-link>
    <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
    <router-link to="/master/barang" class="nav-link">Barang</router-link>
    <router-link to="/master/pengguna" class="nav-link">Pengguna</router-link>
    <router-link to="/transaksi/masuk" class="nav-link">Barang Masuk</router-link>
    <router-link to="/transaksi/keluar" class="nav-link">Barang Keluar</router-link>
    <router-link to="/laporan" class="nav-link">Laporan</router-link>
    <router-link to="/logout" class="nav-link">Logout</router-link>
  </div>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 60px;
  background-color: #2c3e50;
  overflow-x: hidden;
  transition: width 0.3s ease;
  padding-top: 20px;
}

.sidebar:hover {
  width: 220px;
}

.logo {
  color: #ecf0f1;
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
  transition: opacity 0.3s;
}

.nav-link {
  display: block;
  padding: 10px 20px;
  color: #ecf0f1;
  text-decoration: none;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.sidebar:hover .nav-link {
  opacity: 1;
}

.nav-link:hover {
  background-color: #34495e;
  border-radius: 4px;
}
</style>
