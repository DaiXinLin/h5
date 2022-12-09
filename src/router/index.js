import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout";
import LoginForm from "../views/LoginForm.vue";
import HomePage from "../views/HomePage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import PersonalCenter from "../views/PersonalCenter.vue";
import ScheduleList from "../views/ScheduleList.vue";
import ChangePeople from "../views/ChangePeople.vue";
import SchedulePlan from "../views/SchedulePlan.vue";
import DoctorInformation from "../views/DoctorInformation.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: LoginForm,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
  {
    path: "/schedule",
    name: "schedule",
    component: ScheduleList,
  },
  {
    path: "/change",
    name: "change",
    component: ChangePeople,
  },
  {
    path: "/scheduleplan",
    name: "scheduleplan",
    component: SchedulePlan,
  },
  {
    path: "/doctorinformation",
    name: "doctorinformation",
    component: DoctorInformation,
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: HomePage,
      },
      {
        path: "/personal",
        name: "personal",
        component: PersonalCenter,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
