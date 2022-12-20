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
import ConfirmAppointment from "../views/ConfirmAppointment.vue";
import AppointmentSucceeded from "../views/AppointmentSucceeded.vue";
import AppointmentNotice from "../views/AppointmentNotice.vue";
import HospitalIntroduction from "../views/HospitalIntroduction.vue";
import EncyclopediaHealth from "../views/EncyclopediaHealth.vue";
import EncyclopediaContent from "../views/EncyclopediaContent.vue";
import PeopleAdministra from "../views/PeopleAdministra.vue";
import AddPeople from "../views/AddPeople.vue";

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
    path: "/confirmappointment",
    name: "confirmappointment",
    component: ConfirmAppointment,
  },
  {
    path: "/appointmentsucceeded",
    name: "appointmentsucceeded",
    component: AppointmentSucceeded,
  },
  {
    path: "/appointmentnotice",
    name: "appointmentnotice",
    component: AppointmentNotice,
  },
  {
    path: "/hospitalintroduction",
    name: "hospitalintroduction",
    component: HospitalIntroduction,
  },
  {
    path: "/encyclopediahealth",
    name: "encyclopediahealth",
    component: EncyclopediaHealth,
  },
  {
    path: "/encyclopediacontent",
    name: "encyclopediacontent",
    component: EncyclopediaContent,
  },
  {
    path: "/peopleadministra",
    name: "peopleadministra",
    component: PeopleAdministra,
  },
  {
    path: "/addpeople",
    name: "addpeople",
    component: AddPeople,
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
