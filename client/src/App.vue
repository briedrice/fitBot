<template>
  <v-app>
    <!-- Side Navbar -->
    <v-navigation-drawer app temporary fixed v-model="sideNav">
      <v-toolbar color="secondary" dark flat>
        <v-btn icon @click="toggleSideNav">
              <v-icon>arrow_back</v-icon>
            </v-btn>
       <router-link to="/" tag="span" style="cursor: pointer">
           <h1 class="title pl-3">Workout App</h1>
        </router-link>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list>
      <v-list-tile ripple v-for="item in sideNavItems" :key="item.title" :to="item.link">
        <v-list-tile-action><v-icon>{{item.icon}}</v-icon></v-list-tile-action>
        <v-list-tile-content>{{item.title}}</v-list-tile-content>
      </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- Horizontal Navbar -->
    <v-toolbar fixed color="primary" dark>
      <!-- App Title -->
      <v-toolbar-side-icon @click="toggleSideNav"></v-toolbar-side-icon>
      <v-toolbar-title class="hidden-xs-only">
        <router-link to="/" tag="span" style="cursor: pointer">
          Workout App
        </router-link>
      </v-toolbar-title>
     
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in horizontalNavItems" :key="item.title" :to="item.link" >
          <v-icon class="hidden-sm-only" left >{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <!-- App Content -->
    <main>
      <v-container class="mt-5">
        <transition name="fade">
          <router-view /></transition>
      </v-container>
    </main>

  </v-app>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      sideNav: false
    }
  },
  computed: {
    horizontalNavItems() {
      return [
        { icon: "directions_run", title: "Exercises", link: "/exercises" },
        { icon: "lock_open", title: "Login", link: "/login" },
        { icon: "create", title: "Sign up", link: "/signup" }
      ];
    },
    sideNavItems() {
      return [
        { icon: "directions_run", title: "Exercises", link: "/exercises" },
        { icon: "lock_open", title: "Login", link: "/login" },
        { icon: "create", title: "Sign up", link: "/signup" }
      ];
    }
  },
  methods:{
    toggleSideNav(){
      this.sideNav = !this.sideNav;
    }
  }
};
</script>


<style lang="scss">
#app {
  background: var(--v-body-base);
}

.theme--light.v-navigation-drawer{
  background: var(--v-body-base);
}

.fade-enter-active,
.fade-leave-active{
  transition-property: all;
  transition-duration: 0.25s;
}

.fade-enter-active{
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active{
  opacity: 0;
  transform: translateY(-25px);
}
</style>
