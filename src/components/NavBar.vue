<template>
  <div class="side-space">
      <nav class="navbar navbar-expand-md">
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

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');

#nav a {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #003249;
}

#nav span {
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  color: #003249;
}

#nav a.router-link-exact-active {
  color: #e9724c;
}

.side-space {
    margin: 0 20px 0 20px;
}

/* .custom-toggler.navbar-toggler {
    border-color: #003249;
} */
.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 50, 73, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

</style>
