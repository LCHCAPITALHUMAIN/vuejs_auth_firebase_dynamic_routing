<template>
  <header>
    <section>
      <div class="col1">
        <router-link to="/">
          <h3>RGPD Dashboard</h3>
        </router-link>
        <ul class="nav">
          <li>
            <router-link to="/demo-1">Inpixio</router-link>
          </li>
          <li>
            <router-link to="/demo-2">DemoTwo</router-link>
          </li>
          <li>
            <router-link to="/demo-3">DemoThree</router-link>
          </li>
          <li>
            <router-link to="/demo-4">DemoFour</router-link>
          </li>
          <li>
            <router-link to="/demo-5">DemoFive</router-link>
          </li>
          <li><a @click="logout()">logout</a></li>
        </ul>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>