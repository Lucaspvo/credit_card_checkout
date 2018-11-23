<template>

    <select>

        <option v-for="(option, index) in options" :key="index" :value="index">

            {{option}}

        </option>

    </select>

</template>

<script src="../container/BaseSelect.js" />
