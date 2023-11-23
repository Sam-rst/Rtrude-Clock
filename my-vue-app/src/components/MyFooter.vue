<template>

    <h1>{{ msg }}</h1>


    <footer class="footer bg-dark text-white">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h5>À propos de nous</h5>
                <p>Votre texte ici...</p>
            </div>
            <div class="col-md-6">
                <h5>Contactez-nous</h5>
                <p>Email: info@example.com</p>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <p class="text-center">&copy; 2023 Votre Nom</p>
            </div>
        </div>
    </div>
</footer>
</template>


<script>
export default {
  name: 'MyFooter',
  props: {
    msg: String
  }
}
</script>

