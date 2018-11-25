import { shallowMount } from '@vue/test-utils';
import BaseCreditCard from '../../src/components/presentation/CreditCard/BaseCreditCard.vue';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
Vue.use(BootstrapVue);

describe('BaseCreditCard.vue', () => {

  it('contains data when created', () => {

    const cardHolder = 'test test test';
    const cardNumber = '1111 1111 1111 1111';
    const monthExpiryDate = '02';
    const yearExpiryDate = '20';
    const ccv = '123';
    const creditCardType = 'visa';

    const wrapper = shallowMount(BaseCreditCard, {
      data: function(){

        return {

          form: {

            cardHolder: 'test test test',

            cardNumber: '1111 1111 1111 1111',

            monthExpiryDate: '02',

            yearExpiryDate: '20',

            ccv: '123',

          },

          creditCardType: 'visa',

        };

      },
    });

    expect(wrapper.vm.$data.form.cardHolder).toMatch(cardHolder);

    expect(wrapper.vm.$data.form.cardNumber).toMatch(cardNumber);

    expect(wrapper.vm.$data.form.monthExpiryDate).toMatch(monthExpiryDate);

    expect(wrapper.vm.$data.form.yearExpiryDate).toMatch(yearExpiryDate);

    expect(wrapper.vm.$data.form.ccv).toMatch(ccv);

    expect(wrapper.vm.$data.creditCardType).toMatch(creditCardType);

  });

});
