<template>
    <div>
        <Files
            msg="Prop Message"
            :key="`DisplayFiles`"
            nav="."
            v-on:folderClicked="receiveFolderClick"
        />
    </div>
</template>

<script>
// @ is an alias to /src
import Files from "@/components/Files.vue";
// import UserLogin from "@/components/UserLogin.vue";

export default {
    name: "Home",
    components: {
        Files,
        // UserLogin,
    },
    methods: {
        receiveFolderClick(obj) {
            console.log(obj);
        },
    },
};
</script>
