


<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">
            <h2 class="text-center">Inscription</h2>
          </div>
          <div class="card-body">
            <p v-if="registerSucess == null"></p>
            <p class="success" v-if="registerSucess">User created</p>
            <p class="error" v-else>Creation impossible</p>
            <router-link to="/login"> </router-link>
            <router-view />

            <form
              @submit.prevent="register"
              method="POST"
              id="registrationForm"
              action="/login"
            >
              <div class="mb-3">
                <label for="username" class="form-label">Pseudonyme</label>
                <input
                  type="text"
                  class="form-control"
                  name="username"
                  id="username"
                  v-model="username"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Adresse mail</label>
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  id="email"
                  v-model="email"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="password1" class="form-label">Mot de passe</label>
                <input
                  type="password"
                  class="form-control"
                  id="password1"
                  placeholder="Votre mot de passe"
                  name="password"
                  v-model="password1"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="password2" class="form-label"
                  >Vérification mot de passe
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password2"
                  placeholder="Confirmer mot de passe"
                  v-model="password2"
                  required
                />
                <small id="passwordHelp" class="form-text text-muted"
                  >Entrez le même mot de passe
                </small>
              </div>

              <div class="messageError" id="messageError"></div>
              <div class="d-grid">
                <button type="submit" class="btn btn-primary" id="submit">
                  S'inscrire !
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      username: "",
      email: "",
      password1: "",
      password2: "",
      registerSucess: null,
    };
  },
  methods: {
    async register() {
      try {
        const response = await axios.post("http://localhost:3000/register", {
          username: this.username,
          email: this.email,
          password: this.password1,
        });
        this.registerSucess = response.data.registerSucess;

        if (this.registerSuccess) {
            console.log("Redirection de page vers : login")
          // Redirection vers la page de connexion (/login)
          this.$router.push("/login");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>

.messageError {
  color: red;
}
</style>

