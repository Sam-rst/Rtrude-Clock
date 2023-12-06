<template>
    <div>
        <h1>LOGIN</h1>

        <p v-if="passwordMatch == null"></p>
        <p class="success" v-if="passwordMatch">Connection established</p>
        <p class="error" v-else>Connection impossible</p>
        <form @submit.prevent="login">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username">
            <br>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password">
            <br>
            <button type="submit">Se connecter</button>
        </form>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            username: '',
            password: '',
            passwordMatch: null,
        };
    },
    methods: {
        async login() {
            try {
                console.log('Username : ', this.username)
                console.log('Password : ', this.password)
                const response = await axios.post('http://localhost:3000/login', {
                    username: this.username,
                    password: this.password,
                });
                this.passwordMatch = response.data.passwordMatch;
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>
  
<style>
.error {
    color: red;
}

.success {
    color: green;
}

html.fontawesome-i2svg-active.fontawesome-i2svg-complete body div#app div footer.footer-section div.container.relative div.sofa-img {
    display: none;
}

main {
    margin-top: 175px;
}

</style>
  