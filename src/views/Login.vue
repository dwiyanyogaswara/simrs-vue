<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
          <div
            style="
              border: outset;
              border-width: 20px;
              border-radius: 30px;
              padding: 25px;
              position: absolute;
              top: 25%;
              background-color: #00dcff;
              font-family: system-ui;
            "
          >
            <form>
              <div class="form-group">
                <label>Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Enter email"
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <label>Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                  v-model="password"
                />
              </div>
              <button
                type="button"
                class="btn btn-primary"
                @click="onLogin"
                style="margin-top: 10px; float: right"
              >
                Login
              </button>
            </form>
          </div>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
  </div>
</template>

<script>
import DataService from "../services/DataServices"

export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
      onLogin(){
          var post = {
              email: this.email,
              password: this.password
          }
          DataService.login(post).then(res=>
            {
                alert(JSON.stringify(res.data))
            }
          ).catch(e=> { alert(e) })
      }
  }
};
</script>

<style>
</style>