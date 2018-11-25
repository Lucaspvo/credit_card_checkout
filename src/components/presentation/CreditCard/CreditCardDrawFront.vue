<template>

    <div :class="[
        'credit-card-draw-front-div',
        frontCard ? 'card-top' : 'card-bottom'
    ]">

        <div class="inner-front-draw-div">

            <b-row>

                <b-col cols="12">

                    <base-label class="credit-card-flag">
                        {{ creditCardType || "____" }}
                    </base-label>

                </b-col>

            </b-row>

            <b-row>

                <b-col cols="12">

                    <base-label class="credit-card-number">
                        {{ form.cardNumber || '**** **** **** ****' }}
                    </base-label>

                </b-col>

            </b-row>

            <b-row>

                <b-col cols="9">

                    <base-label class="credit-card-holder">
                        {{ form.cardHolder || '________________' }}
                    </base-label>

                </b-col>

                <b-col cols="3">

                    <base-label class="credit-card-expiry-date">
                        {{ `${formMonthExpiryDate || '__'} / ${formYearExpiryDate || '__'}` }}
                    </base-label>

                </b-col>

            </b-row>

        </div>

    </div>

</template>

<script src="../../container/CreditCard/CreditCardDrawFront.js" />

<style lang="scss">
@import "../../../assets/scss/CreditCard/CreditCardDrawFront.scss"
</style>
