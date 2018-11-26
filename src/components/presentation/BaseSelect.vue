<template>

    <select
        :disabled="disabled || false"
        v-model="dataField"
        @change="onChange($event)"
        @click="onClick($event)"
        @focus="onFocus($event)">

        <option v-for="(option, index) in options" :key="index" :value="option">

            {{option}}

        </option>

    </select>

</template>

<script src="../container/BaseSelect.js" />
