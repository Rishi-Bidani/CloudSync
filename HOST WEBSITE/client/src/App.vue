<template>
    <SideBar sbwidth="320px" sbheader="CloudSync" :menu="menu"/>
    <div id="nav">
        <!--        <router-link to="/">Home</router-link>-->
        <!--        |-->
        <!--        <router-link to="/about">About</router-link>-->
        <router-view/>
    </div>
</template>
<script>
import SideBar from "@/components/SideBar"

export default {
    components: {
        SideBar
    },
    data() {
        return {
            menu: [
                {
                    type: "title",
                    text: "File Options"
                },
                {
                    type: "item",
                    text: "File Name: "
                },
                {
                    type: "item",
                    text: "File Size: "
                },
                {}
            ]
        }
    }
}

</script>
<style>
* {
    margin: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #DBD9EC;
    display: flex;
    max-height: 100vh;
    max-width: 100vw;
    overflow-y: hidden;
}

#nav {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
}
</style>
