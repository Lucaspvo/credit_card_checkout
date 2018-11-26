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

                                        <base-credit-card
                                            @onChange="onChange">
                                        </base-credit-card>

                                        <div :class="{
                                            'success-purchase-div': true,
                                            'activate-show-purchase-div': successPurchase,
                                        }">

                                            <base-label
                                                class="success-purchase-label">
                                                Thank you for buying with us!!
                                            </base-label>

                                        </div>

                                        <span
                                            :class="{
                                                'confetti-1': true,
                                                'activate-confettis-1': successPurchase,
                                            }"
                                        />

                                        <span
                                            :class="{
                                                'confetti-2': true,
                                                'activate-confettis-2': successPurchase,
                                            }"
                                        />

                                        <span
                                            :class="{
                                                'confetti-3': true,
                                                'activate-confettis-3': successPurchase,
                                            }"
                                        />

                                        <span
                                            :class="{
                                                'confetti-4': true,
                                                'activate-confettis-4': successPurchase,
                                            }"
                                        />

                                        <span
                                            :class="{
                                                'confetti-5': true,
                                                'activate-confettis-5': successPurchase,
                                            }"
                                        />

                                        <span
                                            :class="{
                                                'confetti-6': true,
                                                'activate-confettis-6': successPurchase,
                                            }"
                                        />

                                        <span
                                            :class="{
                                                'confetti-7': true,
                                                'activate-confettis-7': successPurchase,
                                            }"
                                        />

                                        <span
                                            :class="{
                                                'confetti-8': true,
                                                'activate-confettis-8': successPurchase,
                                            }"
                                        />

                                        <span
                                            :class="{
                                                'confetti-9': true,
                                                'activate-confettis-9': successPurchase,
                                            }"
                                        />

                                        <span
                                            :class="{
                                                'confetti-10': true,
                                                'activate-confettis-10': successPurchase,
                                            }"
                                        />

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
