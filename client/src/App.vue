<template>
    <SideBar sbwidth="320px" sbheader="CloudSync" :menu="menu"/>
    <div id="nav">
        <div class="center margin1">
            <div class="breadcrumb-nav">
            </div>
        </div>
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
    /*padding: 30px;*/
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
}

.center {
    display: flex;
    justify-content: center;
}

.margin1 {
    margin: 1rem;
}

.breadcrumb-nav {
    width: 70vw;
    min-height: 3rem;
    height: fit-content;
    background-color: white;
    overflow: hidden;
    word-wrap: break-word;
    text-align: left;
    border-radius: 0.5rem;
}

.breadcrumb-nav::-webkit-scrollbar-track {
    width: 10px;
    color: blue;
}

/*#nav a {*/
/*  font-weight: bold;*/
/*  color: #2c3e50;*/
/*}*/

/*#nav a.router-link-exact-active {*/
/*  color: #42b983;*/
/*}*/
</style>
