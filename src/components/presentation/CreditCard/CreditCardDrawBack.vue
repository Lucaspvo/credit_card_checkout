<template>

    <div :class="[
        'credit-card-draw-back-div',
        frontCard ? 'card-top' : 'card-bottom'
    ]">

        <div class="inner-back-draw-div">

            <b-row>

                <b-col cols="12">

                    <span class="creadit-card-magnetic-line" />

                </b-col>

            </b-row>

            <b-row>

                <b-col cols="12">

                    <base-label class="credit-card-ccv">
                        {{ form.ccv || '___' }}
                    </base-label>

                </b-col>

            </b-row>

        </div>

    </div>

</template>

<script src="../../container/CreditCard/CreditCardDrawBack.js" />

<style lang="scss">
@import "../../../assets/scss/CreditCard/CreditCardDrawBack.scss"
</style>
