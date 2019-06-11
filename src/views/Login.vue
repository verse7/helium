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
    <!-- <div class="bg box"></div> -->
    <!-- <svg width="1354" height="654" viewBox="0 0 1354 654" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 312L158.5 346L317 382L457.375 410.5L597.75 440L878.5 498L1159.25 553.5L1299.62 580L1440 608.5V654H0V312Z" fill="#003249"/>
<path d="M940 216L1440 26V612L434.5 408.5L940 216Z" fill="#FF9966"/>
<path d="M0 0L937 221L437 408L0 313V0Z" fill="#E9724C"/>
</svg> -->
  </div>
</template>

