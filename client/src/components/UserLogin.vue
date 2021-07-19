<template>
  <div class="container">
    <ul>
      <li>
        <h3><a href="#">Sign Up</a></h3>
      </li>
      <li>
        <h3><a href="#">Login</a></h3>
      </li>
    </ul>
    <div class="form-group">
      <label>Username </label>
      <input type="text" class="form-control form-control-lg" />
    </div>
    <br/>
    <div class="form-group">
      <label>Password </label>
      <input type="password" class="form-control form-control-lg" />
    </div>
    <br>
    <button type="submit" class="btn btn-dark btn-lg btn-block">Enter</button>
  </div>
</template>

<script>
export default {
  name: "UserLogin",
};
</script>

<style scoped>
* {
  background: peachpuff;
}
h3 {
  color: blue;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>