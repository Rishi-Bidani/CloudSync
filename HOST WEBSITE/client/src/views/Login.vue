<template>
    <form @submit.prevent="submit">
        <h1>LOGIN</h1>
        <input v-model="data.username" type="text" placeholder="Username" required>
        <input v-model="data.password" type="password" placeholder="Password" required>
        <button>Submit</button>
    </form>
</template>

<script>

import {reactive} from "vue";
import {useRouter} from "vue-router"
import Post from "@/js/requests";

export default {
    name: "Login",
    setup() {
        const data = reactive({
            username: "",
            password: ""
        });
        const router = useRouter()
        const submit = async () => {
            const auth = await Post.login(data);
            if(auth.data){
                await router.push("/home")
            }else{
                await router.push("/")
            }
        }
        return {
            data,
            submit
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    margin: auto;
    border: 3px solid black;
    padding: 1rem 2rem;
    border-radius: 1rem;
}

h1 {
    font-weight: bold;
}

input {
    padding: 0.5rem;
    width: 30ch;
    margin: 0.5rem 0;
}

button {
    padding: 0.5rem 0;
    font-weight: bold;
    background-color: navy;
    color: white;
}
</style>