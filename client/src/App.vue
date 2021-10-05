<template>
    <SideBar sbwidth="320px" sbheader="CloudSync" :menu="menu"/>
    <div id="nav">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
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
                    title: ""
                }
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
    display: flex;
}

#nav {
    /*padding: 30px;*/
}

/*#nav a {*/
/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

/*#nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
</style>
