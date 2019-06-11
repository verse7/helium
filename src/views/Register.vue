<template>
  <div>
    <div class="format-form">
      <h4 class="font-weight-bold ml-3">Create Account</h4>
      <div class="alert alert-danger container mt-2" role="alert" v-if="error">
        {{ message }}
      </div>
      <div class="col-md-6 mt-4 bg-white shadow-sm rounded border-top">
        <form id="registerForm" method="post" @submit.prevent="register">
          <input-hidden :value="csrfToken" name="_token"/>
          <div class="form-row pb-2 pt-3 pr-2 pl-2">
            <div class="col pb-2 input-group">
              <div class="input-group-prepend">
                <div class="input-group-text"><font-awesome-icon icon="user"></font-awesome-icon></div>
              </div>
              <input type="text" class="form-control" id="fname" placeholder="Firstname">
            </div>
            <div class="col pb-2">
              <input type="text" class="form-control" id="lname" placeholder="Lastname">
            </div>
          </div>
          <div class="form-group input-group pb-2 pr-2 pl-2">
            <div class="input-group-prepend">
              <div class="input-group-text"><font-awesome-icon icon="envelope"></font-awesome-icon></div>
            </div>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email Address" required>
          </div>
          <div class="form-group input-group pb-2 pr-2 pl-2">
            <div class="input-group-prepend">
              <div class="input-group-text"><font-awesome-icon icon="unlock-alt"></font-awesome-icon></div>
            </div>
            <input type="password" class="form-control" id="password" placeholder="Password" required>
          </div>
          <div class="form-group input-group pb-2 pr-2 pl-2">
            <div class="input-group-prepend">
              <div class="input-group-text"><font-awesome-icon icon="phone-alt"></font-awesome-icon></div>
            </div>
            <input type="text" class="form-control" id="phone" placeholder="Telephone" v-mask="{mask: ['(999) 999-9999']}">
          </div>
          <small class="text-muted">Providing a valid trn number allows us to verify who you are and helps us to appropriate the sites content</small>
          <div class="form-group pb-2 pt-3 pr-2 pl-2">
            <input type="text" class="form-control rounded" id="trn" placeholder="TRN" v-mask="{mask: ['999-999-999']}">
          </div>
          <div class="form-group input-group pb-2 pr-2 pl-2">
            <div class="input-group-prepend">
              <div class="input-group-text"><font-awesome-icon icon="address-book"></font-awesome-icon></div>
            </div>
            <input type="text" class="form-control" id="address" placeholder="Address">
          </div>
          <div class="form-row pb-4 pr-2 pl-2">
            <div class="form-group input-group col-md-6">
              <div class="input-group-prepend">
                <div class="input-group-text"><font-awesome-icon icon="map-marker-alt"></font-awesome-icon></div>
              </div>
              <input type="text" class="form-control" id="city" placeholder="City">
            </div>
            <div class="form-group col-md-4">
              <select id="parish" class="form-control">
                <option selected>Parish</option>
                <option v-for="p in parishes" v-bind:key="p">{{ p }}</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <input type="text" class="form-control" id="inputZip" placeholder="Zip">
            </div>
          </div>
          <div class="form-group pb-4 pr-2 pl-2">
            <input type="submit" value="Submit" class="btn btn-block btn-color rounded-pill font-weight-bold">
          </div>
        </form>
      </div>
    </div>
    <div class="bg box"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parishes: ["Kingston","St. Andrew","St. Catherine","Trelawny","St. Ann<","PortLand","St. Mary",
      "St. Thomas","Clarendon","St. Elizabeth","St. James","Manchester","Hanover","Westmoreland"],
      error: false,
      message: "",
      csrfToken: null
    }
  },
  created() {
    this.csrfToken = document.querySelector('meta[name="csrf-token"]').content
  },
methods: {
    register: function () {
      let self = this;
      let regForm = document.getElementById("registerForm");
      let regInfo = new FormData(regForm);
      let token = self.csrfToken;

      fetch("/api/user", {
        method: "POST",
        body: regInfo,
        headers: {
          "X-CSRFToken": token
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
          // router.push({name: "login", params: {notifs: respJson.message, success: true}});
        }
      })
      // .catch( error => {
        // console.log(error);
      // })
    }
  }
}
</script>

