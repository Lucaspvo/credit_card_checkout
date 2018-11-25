<template>

    <div class="credit-card-form-div">

        <b-form @submit="onSubmit">

            <b-form-group>

                <BaseLabel
                    :class="{
                        'invalid-input-label': errors.cardHolder,
                        'valid-input-label': validated,
                        'label-group': true
                    }">
                    CARD HOLDER
                </BaseLabel>

                <BaseInput
                    :formatter="{ charactersOnly, upperCase }"
                    :error="errors.cardHolder"
                    :inputValidated="validated"
                    @onChange="onChange"
                    @onFocus="onFocus"
                    @onClick="onClick"
                    name="cardHolder"
                    type="text"
                />

                <BaseLabel
                    class="error-input-label"
                    v-show="errors.cardHolder">
                    {{ errors.cardHolder }}
                </BaseLabel>

            </b-form-group>

            <b-form-group>

                <BaseLabel
                    :class="{
                        'invalid-input-label': errors.cardNumber,
                        'valid-input-label': validated,
                        'label-group': true
                    }">
                    CARD NUMBER
                </BaseLabel>

                <BaseInput
                    :formatter="{ digitsOnly }"
                    :mask="'#### #### #### ####'"
                    :error="errors.cardNumber"
                    :inputValidated="validated"
                    @onChange="onChange"
                    @onFocus="onFocus"
                    @onClick="onClick"
                    maxLength="19"
                    placeholder="**** **** **** ****"
                    name="cardNumber"
                    type="text"
                />

                <BaseLabel
                    class="error-input-label"
                    v-show="errors.cardNumber">
                    {{ errors.cardNumber }}
                </BaseLabel>

            </b-form-group>

            <b-form-group>

                <b-row>

                    <b-col cols="6">

                        <BaseLabel
                            :class="{
                                'invalid-input-label': errors.monthExpiryDate || errors.yearExpiryDate,
                                'valid-input-label': validated,
                                'label-group': true
                            }">
                            EXPIRY DATE
                        </BaseLabel>

                        <b-row>

                            <b-col cols="6">

                                <BaseSelect
                                    :class="{
                                        'is-invalid': errors.monthExpiryDate,
                                        'is-valid': validated,
                                        'form-control': true,
                                        'custom-select': true,
                                        'input-group': true
                                    }"
                                    :options="months"
                                    @onChange="onChange"
                                    @onFocus="onFocus"
                                    @onClick="onClick"
                                    name="monthExpiryDate"
                                />

                                <BaseLabel
                                    class="error-input-label"
                                    v-show="errors.monthExpiryDate">
                                    {{ errors.monthExpiryDate }}
                                </BaseLabel>

                            </b-col>

                            <b-col cols="6">

                                <BaseSelect
                                    :class="{
                                        'is-invalid': errors.yearExpiryDate,
                                        'is-valid': validated,
                                        'form-control': true,
                                        'custom-select': true,
                                        'input-group': true
                                    }"
                                    :options="years"
                                    @onChange="onChange"
                                    @onFocus="onFocus"
                                    @onClick="onClick"
                                    name="yearExpiryDate"
                                />

                                <BaseLabel
                                    class="error-input-label"
                                    v-show="errors.yearExpiryDate">
                                    {{ errors.yearExpiryDate }}
                                </BaseLabel>

                            </b-col>

                        </b-row>

                    </b-col>

                    <b-col cols="6">

                        <BaseLabel
                            :class="{
                                'invalid-input-label': errors.ccv,
                                'valid-input-label': validated,
                                'label-group': true
                            }">
                            CCV
                        </BaseLabel>

                        <BaseInput
                            :formatter="{ digitsOnly }"
                            :error="errors.ccv"
                            :inputValidated="validated"
                            @onChange="onChange"
                            @onFocus="onFocus"
                            @onClick="onClick"
                            maxLength="3"
                            placeholder="123"
                            name="ccv"
                        />

                        <BaseLabel
                            class="error-input-label"
                            v-show="errors.ccv">
                            {{ errors.ccv }}
                        </BaseLabel>

                    </b-col>

                </b-row>

            </b-form-group>

            <b-form-group>

                <b-row>

                    <b-col cols="12">

                        <BaseButton
                            class="credit-card-submit-btn"
                            type="submit">
                            PURCHASE
                        </BaseButton>

                    </b-col>

                </b-row>

            </b-form-group>

        </b-form>

    </div>

</template>

<script src="../container/CreditCardForm.js" />

<style lang="scss">
@import '../../assets/scss/CreditCardForm.scss'
</style>
