<template>
    <div>
        <div class="home">
            <img alt="Vue logo" src="../assets/logo.png" />
            <Files msg="Prop Message" :key="`DisplayFiles`" />
        </div>
        <!-- <div class="login">
            <UserLogin msg="Please Login" />
        </div> -->
    </div>
</template>

<script>
// @ is an alias to /src
import Files from "@/components/files.vue";
// import UserLogin from "@/components/UserLogin.vue";

export default {
    name: "Home",
    components: {
        Files,
        // UserLogin,
    },
};
</script>
