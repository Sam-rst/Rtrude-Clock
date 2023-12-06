


<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h2 class="text-center">Inscription</h2>
                    </div>
                    <div class="card-body">
                        <form id="registrationForm" onsubmit="return validateForm()" method="post">
                            <div class="mb-3">
                                <label for="username" class="form-label">Pseudonyme</label>
                                <input type="text" class="form-control" name="username" id="username" required>
                            </div>

                            <div class="mb-3">
                                <label for="email" class="form-label">Adresse mail</label>
                                <input type="email" class="form-control" name="email" id="email" required>
                            </div>

                            <div class="mb-3">
                                <label for="password" class="form-label">Mot de passe</label>
                                <input type="password" class="form-control" id="password" placeholder="Votre mot de passe"
                                    name="password" required>
                            </div>

                            <div class="mb-3">
                                <label for="confirmPassword" class="form-label">Vérification mot de passe </label>
                                <input type="password" class="form-control" id="confirmPassword"
                                    placeholder="Confirmer mot de passe" required>
                                <small id="passwordHelp" class="form-text text-muted">Entrez le même mot de passe
                                </small>
                            </div>

                            <div class="messageError" id="messageError"></div>
                            <div class="d-grid">
                                <button type="submit" class="btn btn-primary" id="submit">S'inscrire !</button>
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
  name: 'Register',
 
}
values = {
    username: '',
    email: '',
    password1: '',
    password2: ''
}

document.getElementById('username').addEventListener('change', function (e) {
    values.username = this.value
})

document.getElementById('email').addEventListener('change', function (e) {
    values.email = this.value
})

document.getElementById('password').addEventListener('change', function (e) {
    values.password1 = this.value

    confirmPasswords()
})

document.getElementById('confirmPassword').addEventListener('change', function (e) {
    values.password2 = this.value

    confirmPasswords()
})

function confirmPasswords() {
    var passwordError = document.getElementById("messageError");

    if ((values.password1 == "") || (values.password2 == "")) {
        return false
    } else {
        if (values.password1 !== values.password2) {
            passwordError.innerHTML = "Les mots de passe ne correspondent pas. Réessayez.";
            return false
        } else {
            passwordError.innerHTML = ""; // Effacer le message d'erreur s'il y en avait un précédemment
            return true
        }
    }
}


document.getElementById('submit').addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(values)
    window.alert("ATTENTIIIIOOOON")

})

</script>
