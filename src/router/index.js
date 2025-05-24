// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Import halaman utama
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import Laporan from '../views/Laporan.vue'

// Import halaman Master
import MasterLayout from '../views/MasterLayout.vue'
import Barang from '../views/master/Barang.vue'
import Pengguna from '../views/master/Pengguna.vue'

// Import halaman Transaksi
import TransaksiLayout from '../views/TransaksiLayout.vue'
import BarangMasuk from '../views/transaksi/BarangMasuk.vue'
import BarangKeluar from '../views/transaksi/BarangKeluar.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/master',
    component: MasterLayout,
    children: [
      {
        path: 'barang',
        name: 'Barang',
        component: Barang
      },
      {
        path: 'pengguna',
        name: 'Pengguna',
        component: Pengguna
      }
    ]
  },
  {
    path: '/transaksi',
    component: TransaksiLayout,
    children: [
      {
        path: 'masuk',
        name: 'BarangMasuk',
        component: BarangMasuk
      },
      {
        path: 'keluar',
        name: 'BarangKeluar',
        component: BarangKeluar
      }
    ]
  },
  {
    path: '/laporan',
    name: 'Laporan',
    component: Laporan
  },
  {
    path: '/logout',
    redirect: '/' // Logout langsung ke halaman login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
