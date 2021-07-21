<template>
  <div class="container">
    <form>
      <ul>
        <li>
          <h3><a href="#" style="text-decoration: none;">Login </a></h3>
        </li>
        <li>
          <h3><a href="#" style="text-decoration: none;">Sign Up</a></h3>
        </li>
      </ul>
      <div class="form-group">
        <input type="text" placeholder="Username" name="uname" v-model="uname" required>
      </div>
      <br />
      <div class="form-group">
        <input type="password" placeholder="Password" name="psw" v-model="psw" required>
      </div>
      <span class="pswd"><a href="#">Forgot your password?</a></span>
      <br />
      <button type="submit" name="" value="Submit" v-on:click="printValues">Enter</button>
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
  data(){
    return{
      uname:'',
      psw:''
    }
  },
  methods: {
  printValues() {
    console.log(this.uname);
    console.log(this.psw);
  },
},
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
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  max-width: 550px;
  width: 100%;
}
/*for input fields*/
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
/*for button*/
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
/*for login and sign up feature*/
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
/*for forgot password feature*/
span.pswd {
  font-size: 70%;
  position:absolute;
  right: 18%;
}
/*underline effect*/
a {
  display: block;
  position: relative;
  padding: 0.2em 0;
}
a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color:  #2274c2;
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
}
li a::after {
  opacity: 1;
  transform: scale(0);
  transform-origin: center;
}

li a:hover::after,
li a:focus::after{
  transform: scale(1);
}
</style>