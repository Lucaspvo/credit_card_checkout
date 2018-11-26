<template>

    <div class="base-credit-card-div">

        <b-form-group>

            <credit-card-draw
                :form="form"
                :form-input="formInput"
                :credit-card-type="creditCardType">
            </credit-card-draw>

        </b-form-group>

        <credit-card-form
            :form="form"
            @onChange="onChange"
            @onFocus="onFocus"
            @onClick="onClick">
        </credit-card-form>

        <div></div>

    </div>

</template>

<script src="../../container/CreditCard/BaseCreditCard.js" />
