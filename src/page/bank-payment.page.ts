import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private btnConfirmPurchase: ElementFinder;

  constructor () {
    this.btnConfirmPurchase = $('.button-medium[type="submit"]');
  }

  public async confirmPurchase(): Promise<void> {
    await this.btnConfirmPurchase.click();
  }
}
