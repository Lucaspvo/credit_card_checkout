<template>

    <div class="base-credit-card-div">

        <b-form-group>

            <CreditCardDraw
                :form="form"
                :formInput="formInput"
                :creditCardType="creditCardType"
            />

        </b-form-group>

        <CreditCardForm
            :form="form"
            @onChange="onChange"
            @onFocus="onFocus"
            @onClick="onClick"
        />

    </div>

</template>

<script src="../container/BaseCreditCard.js" />

<style lang="scss">
</style>
