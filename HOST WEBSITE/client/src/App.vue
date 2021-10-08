<template>
    <div id="nav">
        <!--        <router-link to="/">Home</router-link>-->
        <!--        |-->
        <!--        <router-link to="/about">About</router-link>-->
        <router-view/>
    </div>
</template>
<script>
export default {
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
    max-width: 100vw;
    width: 100%;
    height: 100vh;
    /*overflow: hidden scroll;*/
    display: flex;
}
</style>
