<template>
    <div>
        <div class="home">
            <img alt="Vue logo" src="../assets/logo.png" />
            <HelloWorld msg="Welcome to Your Vue.js App" />
        </div>
        <!-- <div class="login">
            <UserLogin msg="Please Login" />
        </div> -->
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import UserLogin from "@/components/UserLogin.vue";

export default {
    name: "Home",
    components: {
        HelloWorld,
        // UserLogin,
    },
};
</script>
