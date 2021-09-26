<template>
  <div class="navbar">
    <div class="logo child">
      <img class="logo" src="../assets/cloudsync.png" alt="">
      <button class="CloudSync">CloudSync</button>
    </div>
    <div class="nav child">
      <button class="navbutton">About</button>
      <button class="navbutton">Features</button>
    </div>
    <div class="login child">
      <button class="loginbutton">Log In</button>
      <button class="signupbutton"><b>Sign Up</b></button>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'TopBar',
  props: {
      msg: String
  }
}
</script>

<style>
.CloudSync {
  border: none;
  color: black;
  background-color: white;
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
  padding: 0.7em;
  font-size: 0.8em;
}
.CloudSync:active {
  color: rgb(0, 204, 255);
}

.navbar {
  padding: 2px;
  height: 8rem;
}

.child {
  width: 25%;
  float: left;
  padding: 20px;
}

.logo {
  float: left;
  height: 3rem;
  padding-left: 1em;
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
}

.nav {
  width: auto;
  height: 5rem;
  margin: auto;
  padding-inline: 5rem;
}

.navbutton {
  border: none;
  color: black;
  background-color: white;
  font-family: 'Spartan', sans-serif;
  font-weight: 400;
  padding: 0.7em;
}
.navbutton:active {
  color: rgb(0, 204, 255);
}

.loginbutton {
  border: none;
  color: black;
  padding: 1em;
  background-color: white;
  font-family: 'Spartan', sans-serif;
  font-weight: 400;
}
.loginbutton:active {
  color: rgb(0, 204, 255);
}

.signupbutton {
  border: none;
  color: #3F3D56;
  background-color: #9EE4EE;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  border-radius: 10px;
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
}
.signupbutton:active {
  color: rgb(0, 204, 255);
}
</style>