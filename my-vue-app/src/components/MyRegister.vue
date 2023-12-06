<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h2 class="text-center">Inscription</h2>
                    </div>
                    <div class="card-body">
                        <form id="registrationForm" @submit.prevent="validateForm">
                            <div class="mb-3">
                                <label for="username" class="form-label">Pseudonyme</label>
                                <input type="text" class="form-control" v-model="values.username" required>
                            </div>

                            <div class="mb-3">
                                <label for="email" class="form-label">Adresse mail</label>
                                <input type="email" class="form-control" v-model="values.email" required>
                            </div>

                            <div class="mb-3">
                                <label for="password" class="form-label">Mot de passe</label>
                                <input type="password" class="form-control" v-model="values.password1"
                                    placeholder="Votre mot de passe" required>
                            </div>

                            <div id="messagemdp">
                                <h9>Le mot de passe doit contenir les éléments suivants</h9>
                                <p :class="{ 'valid': isLowerCase, 'invalid': !isLowerCase }">Une lettre minuscule</p>
                                <p :class="{ 'valid': isUpperCase, 'invalid': !isUpperCase }">Une lettre majuscule</p>
                                <p :class="{ 'valid': hasNumber, 'invalid': !hasNumber }">Un chiffre</p>
                                <p :class="{ 'valid': isLengthValid, 'invalid': !isLengthValid }">8 caractères minimum </p>
                            </div>

                            <div class="mb-3">
                                <label for="confirmPassword" class="form-label">Vérification mot de passe </label>
                                <input type="password" class="form-control" v-model="values.password2"
                                    placeholder="Confirmer mot de passe" required>
                                <small id="passwordHelp" class="form-text text-muted">Entrez le même mot de passe</small>
                            </div>

                            <div class="messageError" v-if="passwordErrorMessage">{{ passwordErrorMessage }}</div>
                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary">S'inscrire !</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            values: {
                username: '',
                email: '',
                password1: '',
                password2: ''
            },
            passwordErrorMessage: ''
        };
    },
    computed: {
        isLowerCase() {
            return /[a-z]/.test(this.values.password1);
        },
        isUpperCase() {
            return /[A-Z]/.test(this.values.password1);
        },
        hasNumber() {
            return /\d/.test(this.values.password1);
        },
        isLengthValid() {
            return this.values.password1.length >= 8;
        }
    },
    methods: {
        confirmPasswords() {
            if (this.values.password1 === "" || this.values.password2 === "") {
                this.passwordErrorMessage = '';
                return false;
            } else {
                if (this.values.password1 !== this.values.password2) {
                    this.passwordErrorMessage = "Les mots de passe ne correspondent pas. Réessayez.";
                    return false;
                } else {
                    this.passwordErrorMessage = '';
                    return true;
                }
            }
        },
        validateForm() {
            this.confirmPasswords();
            // Ajoutez le reste de votre logique de validation ici
        }
    }
};
</script>

<style>
main {
    margin-top: 175px;
}

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
}</style>
