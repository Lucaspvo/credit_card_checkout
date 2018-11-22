<template>

    <div class="products-list-div">

        <label class="title">Order Summary</label>

        <ProductsItem
            v-for="(product, index) in products"
            :product="product"
            :key="index"
        />

        <b-container>

            <b-row>

                <b-col cols="4" />

                <b-col cols="8">

                    <span class="total-price-upper-divisor" />

                    <label class="total-price-products">$ {{totalPrice}}</label>

                </b-col>

            </b-row>

        </b-container>

    </div>

</template>

<script src="../container/ProductsList.js" />

<style lang="scss">
@import '../../assets/scss/ProductsList.scss'
</style>
