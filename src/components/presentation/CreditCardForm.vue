<template>

    <div class="credit-card-form-div">

        <b-form @submit="onSubmit">

            <b-form-group>

                <label class="label-group">CARD HOLDER</label>

                <BaseInput
                    :formatter="{ charactersOnly, upperCase }"
                    :value="form.cardHolder"
                    name="cardHolder"
                />

            </b-form-group>

            <b-form-group>

                <label class="label-group">CARD NUMBER</label>

                <BaseInput
                    :formatter="{ digitsOnly }"
                    :mask="{ maskCreditCardNumber }"
                    :value="form.cardNumber"
                    maxLength="19"
                    placeholder="**** **** **** ****"
                    name="cardNumber"
                />

            </b-form-group>

            <b-form-group>

                <b-row>

                    <b-col cols="6">

                        <label class="label-group">EXPIRY DATE</label>

                        <b-row>

                            <b-col cols="6">

                                <BaseSelect
                                    class="form-control custom-select mb-3 input-group"
                                    :options="months"
                                    name="monthExpiryDate"
                                />

                            </b-col>

                            <b-col cols="6">

                                <BaseSelect
                                    class="form-control custom-select mb-3 input-group"
                                    :options="years"
                                    name="yearExpiryDate"
                                />

                            </b-col>

                        </b-row>

                    </b-col>

                    <b-col cols="6">

                        <label class="label-group">CCV</label>

                        <BaseInput
                            :formatter="{ digitsOnly }"
                            maxLength="3"
                            :value="form.ccv"
                            placeholder="123"
                            name="ccv"
                        />

                    </b-col>

                </b-row>

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
