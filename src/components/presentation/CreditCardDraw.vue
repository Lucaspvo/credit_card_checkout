<template>

    <div class="credit-card-draw-div">

        <CreditCardDrawFront
            :form="form"
            :formInput="formInput"
            :creditCardType="creditCardType"
        />
        <CreditCardDrawBack
            :form="form"
            :formInput="formInput"
        />

    </div>

</template>

<script src="../container/CreditCardDraw.js" />

<style lang="scss">
@import '../../assets/scss/CreditCardDraw.scss'
</style>
