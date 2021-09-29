<template>
    <div>
        <div class="home">
            <img alt="Vue logo" src="../assets/logo.png" />
            <Files msg="Welcome to Your Vue.js App" />
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
import RequestFiles from "@/js/reqfiles";

export default {
    name: "Home",
    components: {
        Files,
        // UserLogin,
    },
    async created() {
        console.log(await RequestFiles.getFilesandFolders("test"));
    },
};
</script>
