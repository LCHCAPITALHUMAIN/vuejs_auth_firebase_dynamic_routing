<template>
  <div class="container">
    <h3>Users:</h3>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">url</th>
          <th scope="col">domain</th>
          <th scope="col">Email</th>
          <th scope="col">City</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" v:bind:key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.url }}</td>
          <td>{{ user.domain }}</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Users",
  data() {
    return {
      users: null,
    };
  },
  // https://cdn.inpixio.com/www-docs/prod/inpixio.com/audit_rgpd/lp.json
  created: function () {
    axios
      .get(
        "https://avanquestcdn.s3.amazonaws.com/www-docs/prod/inpixio.com/audit_rgpd/lp.json"
      )
      .then((res) => {
        console.log(res);
        this.users = res.data;
      });
  },
};
</script>

<style>
<h3 {
  margin-bottom: 5%;
}
</style>