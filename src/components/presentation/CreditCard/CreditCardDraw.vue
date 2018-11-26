<template>

    <div class="credit-card-draw-div">

        <credit-card-draw-front
            :form="form"
            :form-input="formInput"
            :credit-card-type="creditCardType">
        </credit-card-draw-front>

        <credit-card-draw-back
            :form="form"
            :form-input="formInput">
        </credit-card-draw-back>

    </div>

</template>

<script src="../../container/CreditCard/CreditCardDraw.js" />

<style lang="scss">
@import '../../../assets/scss/CreditCard/CreditCardDraw.scss'
</style>
