<template>

    <div :class="[
        'credit-card-draw-front-div',
        frontCard ? 'card-top' : 'card-bottom'
    ]">

        <div class="inner-front-draw-div">

            <b-row>

                <b-col cols="12">

                    <label class="credit-card-flag">
                        {{ creditCardType || "____" }}
                    </label>

                </b-col>

            </b-row>

            <b-row>

                <b-col cols="12">

                    <label class="credit-card-number">
                        {{ form.cardNumber || '**** **** **** ****' }}
                    </label>

                </b-col>

            </b-row>

            <b-row>

                <b-col cols="9">

                    <label class="credit-card-holder">
                        {{ form.cardHolder || '________________' }}
                    </label>

                </b-col>

                <b-col cols="3">

                    <label class="credit-card-expiry-date">
                        {{ `${formMonthExpiryDate || '__'} / ${formYearExpiryDate || '__'}` }}
                    </label>

                </b-col>

            </b-row>

        </div>

    </div>

</template>

<script src="../container/CreditCardDrawFront.js" />

<style lang="scss">
@import "../../assets/scss/CreditCardDrawFront.scss"
</style>
