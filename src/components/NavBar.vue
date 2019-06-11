<template>
  <div class="side-space">
      <nav class="navbar navbar-expand-md fixed-top bg-white">
          <span class="navbar-brand">
              <font-awesome-icon icon="clipboard-list" class="d-inline-block"></font-awesome-icon>
              Community Notice Board
          </span>
          <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="ml-auto navbar-nav">
                  <li class="nav-item mr-2">
                      <router-link class="nav-link" to="/">Home</router-link>
                  </li>
                  <li class="nav-item mr-2">
                      <router-link class="nav-link" to="/profile">Profile</router-link>
                  </li>
                  <li class="nav-item mr-2">
                      <router-link class="nav-link" to="/subscriptions">Subscriptions</router-link>
                  </li>
                  <li class="nav-item mr-2">
                      <router-link class="nav-link" to="/register">Register</router-link>
                  </li>
                  <li class="nav-item mr-2">
                      <router-link class="nav-link" to="/login">Login</router-link>
                  </li>
              </ul>
          </div>
      </nav>
  </div>
</template>

<script>
export default {
    name: "NavBar"
};
</script>
