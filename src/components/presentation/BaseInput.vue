<template>

    <input
        :class="{
            'is-invalid': error,
            'input-group': true,
            'form-control': true,
            'is-valid': inputValidated
        }"
        :maxLength="maxLength"
        :placeholder="placeholder || ''"
        :disabled="disabled || false"
        @paste="pasteEvent || null"
        @input="inputChange($event)"
        @click="onClick($event)"
        @focus="onFocus($event)"
        v-model="dataField"
        v-mask="mask || ''"
        ref="input"
    />

</template>

<script src="../container/BaseInput.js" />
