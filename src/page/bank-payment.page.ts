import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private btnConfirmPurchase: ElementFinder;

  constructor () {
    this.btnConfirmPurchase = $('#cart_navigation > button > span');
  }

  public async confirmPurchase(): Promise<void> {
    await this.btnConfirmPurchase.click();
  }
}
