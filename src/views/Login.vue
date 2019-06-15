<template>
  <div>
    <div class="format-form">
      <h4 class="font-weight-bold ml-3">LOGIN</h4>
      <div class="alert alert-danger container mt-5" role="alert" v-if='error'>
        {{ message }}
      </div>
      <div v-else>
        <div class="alert alert-success container mt-5" role="alert" v-if='success'>
          {{ notifs }}
        </div>
      </div>
      <div class="col-md-6 mt-4 bg-white shadow-sm rounded border-top">
        <form id="loginForm" method="post" @submit.prevent="login">
          <input-hidden :value="csrfToken" name="_token"/>
          <div class="form-group input-group pt-4 pb-3 pr-2 pl-2">
            <div class="input-group-prepend">
              <div class="input-group-text"><font-awesome-icon icon="envelope"></font-awesome-icon></div>
            </div>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email Address" required>
          </div>
          <div class="form-group input-group pb-4 pr-2 pl-2">
            <div class="input-group-prepend">
              <div class="input-group-text"><font-awesome-icon icon="unlock-alt"></font-awesome-icon></div>
            </div>
            <input type="password" class="form-control" id="password" placeholder="Password" required>
          </div>
          <div class="form-group pb-4 pr-2 pl-2">
            <input type="submit" value="Login" class="btn btn-block btn-color rounded-pill font-weight-bold">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
export default {
  data() {
    return {
      error: false,
      message: "",
      csrfToken: null
    }
  },
  props: ["notifs", "success"],
  created() {
    this.csrfToken = document.querySelector('meta[name="csrf-token"]').content
  },
  methods: {
    login() {
      let self = this;
      let logForm = document.getElementById("loginForm");
      let logInfo = new FormData(logForm);
      let token = self.csrfToken;

      fetch("/api/users/login", {
        method: "POST",
        body: logInfo,
        headers: {
          "X-CSRFToken": token,
        },
        credentials: "same-origin"
      })
      .then( resp => resp.json())
      .then( respJson => {
        // console.log(respJson);
        if (respJson.hasOwnProperty("error")) {
          self.error = true;
          self.message = respJson.error;
        }
        else{
          let jwt_token = respJson.token;
          let id = respJson.user_id;

          /*Stores the jwt locally to be accessed later*/
          localStorage.setItem('token', jwt_token);
          localStorage.setItem('current_user', id);

          router.push({name: "home", params: {message: respJson.message, success: true}});
        }
      })
      // .catch( error => {
      //   console.log(error);
      // })
    }
  }
};
</script>
