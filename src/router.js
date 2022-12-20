import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Shop from '@/views/Shop.vue'
import Faq from '@/views/Faq.vue'
import Stockists from '@/views/Stockists.vue'
import Wholesale from '@/views/Wholesale.vue'
import Contact from '@/views/Contact.vue'


const routes = [
  {
    path: "/",
    redirect: '/home'
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: "/FAQ",
    name: "Faq",
    component: Faq,
  },
  {
    path: "/stockists",
    name: "Stockists",
    component: Stockists,
  },
  {
    path: "/wholesale",
    name: "Wholesale",
    component: Wholesale,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;