<template>

    <div class="credit-card-form-div">

        <b-form @submit="onSubmit">

            <b-form-group>

                <base-label
                    :class="{
                        'invalid-input-label': errors.cardHolder,
                        'valid-input-label': validated,
                        'label-group': true
                    }">
                    CARD HOLDER
                </base-label>

                <base-input
                    :formatter="{ charactersOnly, upperCase }"
                    :error="errors.cardHolder || ''"
                    :input-validated="validated"
                    :data-value="form.cardHolder"
                    :disabled="validated"
                    @onChange="onChange"
                    @onFocus="onFocus"
                    @onClick="onClick"
                    name="cardHolder"
                    type="text"
                />

                <base-label
                    class="error-input-label"
                    v-show="errors.cardHolder">
                    {{ errors.cardHolder }}
                </base-label>

            </b-form-group>

            <b-form-group>

                <base-label
                    :class="{
                        'invalid-input-label': errors.cardNumber,
                        'valid-input-label': validated,
                        'label-group': true
                    }">
                    CARD NUMBER
                </base-label>

                <base-input
                    :formatter="{ digitsOnly }"
                    :mask="'#### #### #### ####'"
                    :error="errors.cardNumber || ''"
                    :input-validated="validated"
                    :data-value="form.cardNumber"
                    :disabled="validated"
                    @onChange="onChange"
                    @onFocus="onFocus"
                    @onClick="onClick"
                    max-length="19"
                    placeholder="**** **** **** ****"
                    name="cardNumber"
                    type="text"
                />

                <base-label
                    class="error-input-label"
                    v-show="errors.cardNumber">
                    {{ errors.cardNumber }}
                </base-label>

            </b-form-group>

            <b-form-group>

                <b-row>

                    <b-col cols="6">

                        <base-label
                            :class="{
                                'invalid-input-label': errors.monthExpiryDate || errors.yearExpiryDate,
                                'valid-input-label': validated,
                                'label-group': true
                            }">
                            EXPIRY DATE
                        </base-label>

                        <b-row>

                            <b-col cols="6">

                                <base-select
                                    :class="{
                                        'is-invalid': errors.monthExpiryDate,
                                        'is-valid': validated,
                                        'form-control': true,
                                        'custom-select': true,
                                        'input-group': true
                                    }"
                                    :options="months"
                                    :data-value="form.monthExpiryDate"
                                    :disabled="validated"
                                    @onChange="onChange"
                                    @onFocus="onFocus"
                                    @onClick="onClick"
                                    name="monthExpiryDate"
                                />

                                <base-label
                                    class="error-input-label"
                                    v-show="errors.monthExpiryDate">
                                    {{ errors.monthExpiryDate }}
                                </base-label>

                            </b-col>

                            <b-col cols="6">

                                <base-select
                                    :class="{
                                        'is-invalid': errors.yearExpiryDate,
                                        'is-valid': validated,
                                        'form-control': true,
                                        'custom-select': true,
                                        'input-group': true
                                    }"
                                    :options="years"
                                    :data-value="form.yearExpiryDate"
                                    :disabled="validated"
                                    @onChange="onChange"
                                    @onFocus="onFocus"
                                    @onClick="onClick"
                                    name="yearExpiryDate"
                                />

                                <base-label
                                    class="error-input-label"
                                    v-show="errors.yearExpiryDate">
                                    {{ errors.yearExpiryDate }}
                                </base-label>

                            </b-col>

                        </b-row>

                    </b-col>

                    <b-col cols="6">

                        <base-label
                            :class="{
                                'invalid-input-label': errors.ccv,
                                'valid-input-label': validated,
                                'label-group': true
                            }">
                            CCV
                        </base-label>

                        <base-input
                            :formatter="{ digitsOnly }"
                            :error="errors.ccv || ''"
                            :input-validated="validated"
                            :data-value="form.ccv"
                            :disabled="validated"
                            @onChange="onChange"
                            @onFocus="onFocus"
                            @onClick="onClick"
                            maxLength="3"
                            placeholder="***"
                            name="ccv"
                        />

                        <base-label
                            class="error-input-label"
                            v-show="errors.ccv">
                            {{ errors.ccv }}
                        </base-label>

                    </b-col>

                </b-row>

            </b-form-group>

            <b-form-group>

                <b-row>

                    <b-col cols="12">

                        <base-button
                            :disabled="validated"
                            class="credit-card-submit-btn"
                            type="submit">
                            PURCHASE
                        </base-button>

                    </b-col>

                </b-row>

            </b-form-group>

        </b-form>

    </div>

</template>

<script src="../../container/CreditCard/CreditCardForm.js" />

<style lang="scss">
@import '../../../assets/scss/CreditCard/CreditCardForm.scss'
</style>
