import { shallowMount } from '@vue/test-utils';
import CreditCardDrawFront from '../../src/components/presentation/CreditCard/CreditCardDrawFront.vue';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
Vue.use(BootstrapVue);

describe('CreditCardDrawFront.vue', () => {

  it('renders props.form when passed from parent', () => {

    const cardHolder = 'test test test';
    const cardNumber = '1111 1111 1111 1111';
    const monthExpiryDate = '02';
    const yearExpiryDate = '20';
    const ccv = '123';
    const creditCardType = 'visa';

    const wrapper = shallowMount(CreditCardDrawFront, {
      propsData: {

        form: {

          cardHolder: 'test test test',

          cardNumber: '1111 1111 1111 1111',

          monthExpiryDate: '02',

          yearExpiryDate: '20',

          ccv: '123',

        },

        creditCardType: 'visa',

      },
    });

    expect(wrapper.props().form.cardHolder).toMatch(cardHolder);

    expect(wrapper.props().form.cardNumber).toMatch(cardNumber);

    expect(wrapper.props().form.monthExpiryDate).toMatch(monthExpiryDate);

    expect(wrapper.props().form.yearExpiryDate).toMatch(yearExpiryDate);

    expect(wrapper.props().form.ccv).toMatch(ccv);

    expect(wrapper.props().creditCardType).toMatch(creditCardType);

  });

});
