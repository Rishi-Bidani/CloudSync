<template>
  <div class="container">
    <form>
      <ul>
        <li>
          <h3><a href="#">Login </a></h3>
        </li>
        <li>
          <h3><a href="#">Sign Up</a></h3>
        </li>
      </ul>
      <div class="form-group">
        <input type="text" placeholder="Enter Username" name="uname" required />
      </div>
      <br />
      <div class="form-group">
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
      </div>
      <span class="psw"><a href="#">Forgot your password?</a></span>
      <br />
      <button type="submit">Enter</button>
      <br />
      <span>Or</span>
      <br />
      <button type="submit">Login With Gmail</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "UserLogin",
};
</script>

<style scoped>
* {
  background: whitesmoke;
}
.container {
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
  border-radius: 1.5em;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
}
input[type="text"],
input[type="password"] {
  width: 70%;
  color: rgb(38, 50, 56);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  background: skyblue;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 0.02);
  margin-bottom: 10px;
}
button {
  background-color: #2274c2;
  color: white;
  padding: 14px 20px;
  border-radius: 5em;
  margin: 8px 0;
  border: 0;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 10px;
  padding-top: 10px;
  cursor: pointer;
  width: 50%;
}
h3 {
  color: blue;
}
.container {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  max-width: 550px;
  width: 100%;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
span.psw {
  font-size: 70%;
  left:10px;
}
</style>