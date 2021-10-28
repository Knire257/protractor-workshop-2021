import { browser } from 'protractor';

import {
  MenuContentPage, AddressStepPage, BankPaymentPage, OrderSummaryPage,
  PaymentStepPage, ProductAddedModalPage, ProductListPage, ShippingStepPage,
  SignInStepPage, SummaryStepPage
} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const productListPage: ProductListPage = new ProductListPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();

  describe('then should be bought a t-shirt', async () => {
    describe('then sholud get the page', () => {
      browser.get('http://automationpractice.com/');
    });
    describe('then should select a t-shirt', () => {
      menuContentPage.goToTShirtMenu();
      productListPage.addTShirtToCart();
      productListPage.addTShirtToCart();
      productAddedModalPage.proceedToCheckout();
      orderSummaryPage.confirmPurchase();
    });
    describe('then should sign in an user', () => {
      signInStepPage.sendUserData('aperdomobo@gmail.com', 'WorkshopProtractor');
    });
    describe('then it should let the adress by default and continue', () => {
      addressStepPage.proceedToCheckOut();
      shippingStepPage.agreeTerms();
      shippingStepPage.proceedToPayment();
    });
    describe('then the purchase must be paid', () => {
      paymentStepPage.proceedToBank();
      bankPaymentPage.confirmPurchase();
      expect(summaryStepPage.getPurchaseSummary()).toString() === ('Your order on My Store is complete.');
    });
    /*
    await browser.get('http://automationpractice.com/');

    await menuContentPage.goToTShirtMenu();

    await productListPage.addTShirtToCart();

    await productAddedModalPage.proceedToCheckout();

    await orderSummaryPage.confirmPurchase();

    await signInStepPage.sendUserData('aperdomobo@gmail.com', 'WorkshopProtractor');
    // await (browser.sleep(3000));

    await addressStepPage.proceedToCheckOut();
    // await (browser.sleep(3000));

    await shippingStepPage.agreeTerms();
    // await (browser.sleep(3000));
    await shippingStepPage.proceedToPayment();
    // await (browser.sleep(3000));

    await paymentStepPage.proceedToBank();
    // await (browser.sleep(3000));
    await bankPaymentPage.confirmPurchase();
    // await (browser.sleep(3000));

    await expect(summaryStepPage.getPurchaseSummary()).toString() ===
     ('Your order on My Store is complete.');
     */
  });
});
