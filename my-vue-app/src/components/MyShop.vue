<template>
    <!-- Start Hero Section -->
    <div class="hero">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-lg-5">
                    <div class="intro-excerpt">
                        <h1>Modern Interior <span clsas="d-block">Design Studio</span></h1>
                    </div>
                    <p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate
                        velit
                        imperdiet dolor tempor tristique.</p>
                </div>
                <div class="col-lg-7">
                    <div class="hero-img-wrap" style="size: 50%;">
                        <img src="..\assets\shop-removebg-preview.png">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Hero Section -->




    <div class="untree_co-section product-section before-footer-section">
        <div class="container">
            <!-- Formulaire de rentrée -->
            <div class="row">
                <h2>Insérer une nouvelle CARD</h2>
            </div>
            <br><br>
            <div class="row">
                <p v-if="addCardSucess == null"></p>
                <p class="success" v-else-if="addCardSucess">Card added</p>
                <p class="error" v-else>Card not added</p>
            </div>
            <div class="row">
                <form @submit.prevent="addCard" method="POST">
                    <div class="row">
                        <div class="col-4 mb-3">
                            <label for="imageUrl" class="form-label">ImageURL</label>
                            <input type="text" class="form-control" name="imageUrl" id="imageUrl" v-model="imageUrl"
                                placeholder="Ex : product-x.png" required />
                            <small class="form-text text-mute">
                                <p>Choisir entre ces 3 images : product-1.png/product-2.png/product-3.png</p>
                            </small>
                        </div>

                        <div class="col-4 mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" name="name" id="name" v-model="name"
                                placeholder="Ex : Ergonomic Chair" required />
                        </div>

                        <div class="col-4 mb-3">
                            <label for="prix" class="form-label">Prix</label>
                            <input type="number" step="0.01" class="form-control" id="prix" placeholder="Ex : 50.99" name="prix"
                                v-model="prix" required />
                        </div>

                        <div class="d-grid">
                            <button type="submit" id="submit" class="btn btn-primary btn-block">Ajouter !</button>
                        </div>
                    </div>
                </form>
            </div>
            <br><br>
            <div class="row">
                <div class="col-12 col-md-4 col-lg-3 mb-5" v-for="card in cards" :key="card.id">
                    <a class="product-item" href="#">
                        <img :src="card.imageUrl" class="img-fluid product-thumbnail">
                        <h3 class="product-title">{{ card.name }}</h3>
                        <strong class="product-price">${{ card.prix }}</strong>

                        <span class="icon-cross">
                            <img src="../assets/images/cross.svg" class="img-fluid">
                        </span>
                    </a>
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
            cards: [],
            imageUrl: '',
            name: '',
            prix: 0

        };
    },
    mounted() {
        this.refresh()
    },
    name: "MyShop",
    props: {
        msg: String,
    },
    methods: {
        async refresh() {
            fetch('http://localhost:3000/cards')
            .then(response => response.json())
            .then(data => {
                this.cards = data
            })
        },

        async addCard() {
            try {
                const response = await axios.post("http://localhost:3000/addCard", {
                    imageUrl: this.imageUrl,
                    name: this.name,
                    prix: this.prix,
                })
                this.addCardSucess = response.data.addCardSucess;
                this.refresh()
            } catch(error) {
            console.log(error)
            }
        },
    }
};
</script>
