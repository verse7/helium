<template>
  <div class="about">
    <div class="format-form">
      <h5 class="font-weight-bold ml-3 mt-3">Create Account</h5>
      <div class="alert alert-danger container mt-5" role="alert" v-if='error'>
        {{ message }}
      </div>
      <div v-else>
        <div class="alert alert-success container mt-5" role="alert" v-if='success'>
          {{ notifs }}
        </div>
      </div>
      <div class="col-md-6 mt-4 bg-white shadow-sm rounded">
        <form id="registerForm" method="post" @submit.prevent="register">
          <div class="form-row pb-2 pt-3">
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
          <div class="form-group input-group pb-2">
            <div class="input-group-prepend">
              <div class="input-group-text"><font-awesome-icon icon="envelope"></font-awesome-icon></div>
            </div>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email Address">
          </div>
          <div class="form-group input-group pb-2">
            <div class="input-group-prepend">
              <div class="input-group-text"><font-awesome-icon icon="unlock-alt"></font-awesome-icon></div>
            </div>
            <input type="password" class="form-control" id="password" placeholder="Password">
          </div>
          <div class="form-group input-group pb-2">
            <div class="input-group-prepend">
              <div class="input-group-text"><font-awesome-icon icon="phone-alt"></font-awesome-icon></div>
            </div>
            <input type="tel" class="form-control" id="phone" placeholder="Telephone">
          </div>
          <small class="text-muted">Providing a valid trn number allows us to verify who you are and helps us to appropriate the sites content</small>
          <div class="form-group pb-2 pt-3">
            <input type="text" class="form-control rounded" id="trn" placeholder="TRN (123-456-789)">
          </div>
          <div class="form-group input-group pb-2">
            <div class="input-group-prepend">
              <div class="input-group-text"><font-awesome-icon icon="address-book"></font-awesome-icon></div>
            </div>
            <input type="text" class="form-control" id="address" placeholder="Address">
          </div>
          <div class="form-row pb-4">
            <div class="form-group input-group col-md-6">
              <div class="input-group-prepend">
                <div class="input-group-text"><font-awesome-icon icon="map-marker-alt"></font-awesome-icon></div>
              </div>
              <input type="text" class="form-control" id="city" placeholder="City">
            </div>
            <div class="form-group col-md-4">
              <select id="parish" class="form-control">
                <option selected>Parish</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <input type="text" class="form-control" id="inputZip" placeholder="Zip">
            </div>
          </div>
          <div class="form-group pb-4">
            <input type="submit" value="Submit" class="btn btn-block btn-color rounded-pill font-weight-bold">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
