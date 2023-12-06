User
<template>
    <div class="container mt-5 margpetithaut">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h2 class="text-center">LOGIN</h2>
                    </div>
                    <div class="card-body">
                        <p v-if="passwordMatch == null"></p>
                        <p class="success" v-if="passwordMatch">Connection established</p>
                        <p class="error" v-else>Connection impossible</p>
                        <form @submit.prevent="login" method="POST">
                            <div class="mb-3">
                                <label for="username" class="form-label">Username:</label>
                                <input type="text" class="form-control" id="username" v-model="username">
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password:</label>
                                <input type="password" class="form-control" id="password" v-model="password">
                            </div>
                            <div class="d-grid">
                                <button type="submit" id="submit" class="btn btn-primary">Se connecter</button>
                            </div>
                            <div class="text-center mt-3">
                                <router-link to="/register">Pas encore membre? Créez votre compte</router-link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
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
                // console.log('Username : ', this.username)
                // console.log('Password : ', this.password)
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

.margpetithaut {
    padding: 100px;
}
</style>