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
            <div class="row">

                <!-- Start Column 1 -->
                <div class="col-12 col-md-4 col-lg-3 mb-5">
                    <a class="product-item" href="#">
                        <img src="../assets/images/product-3.png" class="img-fluid product-thumbnail">
                        <h3 class="product-title">Nordic Chair</h3>
                        <strong class="product-price">$50.00</strong>

                        <span class="icon-cross">
                            <img src="../assets/images/cross.svg" class="img-fluid">
                        </span>
                    </a>
                </div>
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
export default {
    data() {
        return {
            cards: []
        };
    },
    mounted() {
        fetch('http://localhost:3000/cards')
            .then(response => response.json())
            .then(data => {
                this.cards = data
            })
    },
    name: "MyShop",
    props: {
        msg: String,
    },
};
</script>
