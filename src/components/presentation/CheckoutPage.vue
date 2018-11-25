<template>

    <div class="credit-card-checkout-page checkout-background-div">

        <div class="checkout-outter-div">

            <b-container class="checkout-container bv-example-row bv-example-row-flex-cols">

                <b-row class="checkout-container-row" align-h="center">

                    <b-col class="checkout-container-row-col" align-self="center" cols="12" sm="12"	md="12"	lg="12"	xl="12">

                        <b-card class="checkout-card text-center">

                            <b-container>

                                <b-row>

                                    <b-col cols="12" sm="12" md="6">

                                        <products-list
                                            :products="products">
                                        </products-list>

                                    </b-col>

                                    <b-col class="credit-card-div" cols="12" sm="12" md="6">

                                        <base-credit-card></base-credit-card>

                                    </b-col>

                                </b-row>

                            </b-container>

                        </b-card>

                    </b-col>

                </b-row>

            </b-container>

        </div>

    </div>

</template>

<script src="../container/CheckoutPage.js" />

<style lang="scss">
@import "../../assets/scss/CheckoutPage.scss"
</style>
