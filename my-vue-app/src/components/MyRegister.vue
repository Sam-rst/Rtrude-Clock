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

            <form @submit.prevent="register" method="POST" id="registrationForm" action="/login">
              <div class="mb-3">
                <label for="username" class="form-label">Pseudonyme</label>
                <input type="text" class="form-control" name="username" id="username" v-model="username" required />
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Adresse mail</label>
                <input type="email" class="form-control" name="email" id="email" v-model="email" required />
              </div>

              <div class="mb-3">
                <label for="password1" class="form-label">Mot de passe</label>
                <input type="password" class="form-control" id="password1" placeholder="Votre mot de passe" name="password" v-model="password1" required />
              </div>

              <div id="messagemdp">
                <h9>Le mot de passe doit contenir les éléments suivants</h9>
                <p :class="{ 'valid': isLowerCase, 'invalid': !isLowerCase }">Une lettre minuscule</p>
                <p :class="{ 'valid': isUpperCase, 'invalid': !isUpperCase }">Une lettre majuscule</p>
                <p :class="{ 'valid': hasNumber, 'invalid': !hasNumber }">Un chiffre</p>
                <p :class="{ 'valid': isLengthValid, 'invalid': !isLengthValid }">8 caractères minimum </p>
              </div>

              <div class="mb-3">
                <label for="password2" class="form-label">Vérification mot de passe </label>
                <input type="password" class="form-control" id="password2" v-model="password2" @input="validateForm" placeholder="Confirmer mot de passe" required />
                <small id="passwordHelp" class="form-text text-muted">Entrez le même mot de passe</small>
              </div>

              <div class="messageError" id="messageError" v-if="passwordErrorMessage">{{ passwordErrorMessage }}</div>
              <div class="d-grid">
                <button type="submit" id="submit" class="btn btn-primary">S'inscrire !</button>
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
      passwordErrorMessage: ""
    };
  },
  computed: {
    isLowerCase() {
      return /[a-z]/.test(this.password1);
    },
    isUpperCase() {
      return /[A-Z]/.test(this.password1);
    },
    hasNumber() {
      return /\d/.test(this.password1);
    },
    isLengthValid() {
      return this.password1.length >= 8;
    }
  },
  methods: {
    async register() {
      try {
        const response = await axios.post("http://localhost:3000/register", {
          username: this.username,
          email: this.email,
          password: this.password1
        });
        this.registerSucess = response.data.registerSucess;

        if (this.registerSuccess) {
          console.log("Redirection de page vers : login");
          // Redirection vers la page de connexion (/login)
          this.$router.push("/login");
        }
      } catch (error) {
        console.log(error);
      }
    },

    validateForm() {
      this.password2s();
      // Ajoutez le reste de votre logique de validation ici
    },

    password2s() {
      if (this.password1 === "" || this.password2 === "") {
        this.passwordErrorMessage = "";
        return false;
      } else {
        if (this.password1 !== this.password2) {
          this.passwordErrorMessage = "Les mots de passe ne correspondent pas. Réessayez.";
          return false;
        } else {
          this.passwordErrorMessage = "";
          return true;
        }
      }
    }
  }
};
</script>

<style>

.messageError {
  color: red;
}

.invalid {
  color: red;
}

.invalid:before {
  position: relative;
  left: -7px;
  content: "✕ ";
}

.valid {
  color: green;
}

.valid:before {
  position: relative;
  left: -7px;
  content: "✓ ";
}
</style>
