<template>
    <!-- Pied de page fixé en bas de la page -->
    <footer class="footer mt-auto py-3" style="background-color:#f8f9fa ;">
        <div class="d-flex justify-content-between align-items-center mx-auto py-4 flex-wrap" style="width: 80%">
            <a href="/#" class="d-flex align-items-center p-0 text-dark">
                <img alt="logo" src="../assets/logo.png" width="30px" />
                <span class="ms-4 h5 font-weight-bold">Devwares</span>
            </a>
            <small>&copy; Devwares, 2020. All rights reserved.</small>
            <div>
                <button class="btn btn-dark btn-flat p-2 ">
                    <img src="../assets/logo.png" width="20px" height="20px"/>
                </button>
                <button class="btn btn-dark btn-flat p-2 m-1">
                    <img src="../assets/logo.png" width="20px" height="20px"/>
                </button>
                <button class="btn btn-dark btn-flat p-2 ">
                    <img src="../assets/logo.png" width="20px" height="20px"/>
                </button>
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

