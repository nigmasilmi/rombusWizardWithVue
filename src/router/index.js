import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import Soluciones from "../views/Soluciones.vue";
import Staff from "../views/Staff.vue";
import Wizard from "../views/Wizard.vue";
import AdminPanel from "../views/Admin.vue";
import Proyectos from "../views/ProyectosListing.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/soluciones",
    name: "Soluciones",
    component: Soluciones
  },
  {
    path: "/staff",
    name: "Staff",
    component: Staff
  },
  {
    path: "/wizard",
    name: "Wizard",
    component: Wizard
  },
  {
    path: "/admin",
    name: "AdminPanel",
    component: AdminPanel
  },
  {
    path: "/proyectos",
    name: "Proyectos",
    component: Proyectos
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes
});

export default router;
