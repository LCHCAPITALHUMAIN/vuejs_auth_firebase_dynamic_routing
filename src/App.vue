<template>
  <div id="app">
    <TopBar v-if="showNav"></TopBar>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DemoOne from "./components/DemoOne.vue";
import DemoTwo from "./components/DemoTwo.vue";
import DemoThree from "./components/DemoThree.vue";
import DemoFour from "./components/DemoFour.vue";
import DemoFive from "./components/DemoFive.vue";
import { createWebHistory } from "vue-router";
import TopBar from "./components/TopBar";

export default {
  name: "app",
  computed: {
    ...mapState(["user"]),
    showNav() {
      console.log(this.user);
      return Object.keys(this.user).length > 1;
    },
  } /* */,
  components: {
    DemoOne,
    DemoTwo,
    DemoThree,
    DemoFour,
    DemoFive,
    TopBar,
  },
  created() {
    console.log(createWebHistory);
  },
  data() {
    return {
      showWhich: "DemoOne",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul.nav > li {
  display: inline;
  padding-left: 10px;
}
ul.nav > li::before {
  content: "\2630";
  padding-right: 5px;
}
</style>
