<template>

    <div class="credit-card-form-div">

        <b-form>

            <b-form-group id="card-holder-group"
                class="label-group"
                label="CARD HOLDER"
                label-for="card-holder-input">

                <b-form-input id="card-holder-input"
                    class="input-group"
                    type="text"
                    v-model="cardHolder"
                    required>
                </b-form-input>

            </b-form-group>

            <b-form-group id="card-number-group"
                class="label-group"
                label="CARD NUMBER"
                label-for="card-number-input">

                <b-form-input id="card-number-input"
                    class="input-group"
                    type="text"
                    v-model="cardNumber"
                    required
                    placeholder="**** **** **** ****">
                </b-form-input>

            </b-form-group>

            <b-form-group>

                <b-row>

                    <b-col cols="6">

                        <label class="label-group">EXPIRE DATE</label>

                        <b-row>

                            <b-col cols="6">

                                <b-form-select
                                    class="input-group mb-3"
                                    v-model="selected"
                                    :options="options"
                                />

                            </b-col>

                            <b-col cols="6">

                                <b-form-select
                                    class="input-group mb-3"
                                    v-model="selected"
                                    :options="options"
                                />

                            </b-col>

                        </b-row>

                    </b-col>

                    <b-col cols="6">

                        <label class="label-group">CCV</label>

                        <b-form-input v-model="ccv"
                            type="text"
                            placeholder="123"
                            class="input-group">
                        </b-form-input>

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
