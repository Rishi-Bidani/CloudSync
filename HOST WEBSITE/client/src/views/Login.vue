<template>
    <form @submit.prevent="submit">
        <h1>LOGIN</h1>
        <br>
        <label for="sessionid">Session ID</label>
        <input v-model="data.sessionID"
               type="text"
               placeholder="Session ID"
               id="sessionid"
               required>
        <input v-model="data.password" type="password" placeholder="Password" required>
        <button>Submit</button>
    </form>
</template>

<script>

import {reactive} from "vue";
import {useRouter} from "vue-router"
import Post from "@/js/requests";
import {globalvars} from "@/js/globalvariables";
import KeyGen from "@/js/keygen";

export default {
    name: "Login",
    setup() {
        const data = reactive({
            sessionID: new KeyGen(20).returnKey(),
            password: ""
        });
        let check = ""
        const router = useRouter()
        const submit = async () => {
            const auth = await Post.login(data);
            if (auth.data) {
                globalvars.sessionId = data.sessionID
                await router.push("/home")
            }else{
                alert("Incorrect password")
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

label {
    text-align: left;
}
</style>