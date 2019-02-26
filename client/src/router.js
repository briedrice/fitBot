import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import CreateExercise from "./components/Exercise/CreateExercise.vue"
import Exercises from "./components/Exercise/Exercises.vue"
import Profile from "./components/Auth/Profile.vue"
import Login from "./components/Auth/Login.vue"
import Signup from "./components/Auth/Signup.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  //base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/exercises",
      name: "Exercises",
      component: Exercises
    },
    {
      path: "/createExercise",
      name: "CreateExercise",
      component: CreateExercise
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/signup",
      name: "Signup",
      component: Signup
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    }
  ]
});
