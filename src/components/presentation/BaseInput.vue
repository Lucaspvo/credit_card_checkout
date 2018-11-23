<template>

    <input
        class="input-group form-control"
        type="text"
        :value="value"
        @input="inputChange($event)"
        ref="input"
        :maxLength="maxLength"
        :placeholder="placeholder"
    />

</template>

<script src="../container/BaseInput.js" />
