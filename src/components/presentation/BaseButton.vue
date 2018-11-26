<template>

    <button
        :disabled="disabled || false">

        <slot></slot>

    </button>

</template>

<script src="../container/BaseButton.js" />
