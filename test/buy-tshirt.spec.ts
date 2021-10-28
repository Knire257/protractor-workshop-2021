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

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await (browser.sleep(10000));
    await menuContentPage.goToTShirtMenu();
    await (browser.sleep(3000));
    await productListPage.addTShirtToCart();
    await (browser.sleep(3000));
    await productAddedModalPage.proceedToCheckout();
    await (browser.sleep(3000));
    await orderSummaryPage.confirmPurchase();
    await (browser.sleep(3000));

    await signInStepPage.sendUserData('aperdomobo@gmail.com', 'WorkshopProtractor');
    await (browser.sleep(3000));

    await addressStepPage.addToCart();
    await (browser.sleep(3000));

    await shippingStepPage.agreeTerms();
    await (browser.sleep(3000));
    await shippingStepPage.proceedToPayment();
    await (browser.sleep(3000));

    await paymentStepPage.proceedToBank();
    await (browser.sleep(3000));
    await bankPaymentPage.confirmPurchase();
    await (browser.sleep(3000));

    await expect(summaryStepPage.getPurchaseSummary()).toString() === ('Your order on My Store is complete.');
  });
});
