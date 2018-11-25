<template>

    <div class="products-item-div">

        <b-container>

            <b-row>

                <b-col cols="4">

                    <img class="product-thumbnail" :src="'/img/' + product.img" />

                </b-col>

                <b-col cols="8">

                    <b-row>

                        <b-col cols="12">

                            <base-label class="product-title">
                                {{product.title}}
                            </base-label>

                            <base-label :title="product.description" class="product-description">
                                {{description}}
                            </base-label>

                        </b-col>

                    </b-row>

                    <b-row>

                        <b-col cols="12">

                            <base-label class="product-price">
                                $ {{product.price}}
                            </base-label>

                        </b-col>

                    </b-row>

                </b-col>

            </b-row>

        </b-container>

    </div>

</template>

<script src="../../container/Products/ProductsListItem.js" />

<style lang="scss">
@import '../../../assets/scss/Products/ProductsListItem.scss'
</style>
