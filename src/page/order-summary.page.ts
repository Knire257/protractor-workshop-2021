import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private btnConfirmPurchase: ElementFinder;

  constructor () {
    this.btnConfirmPurchase = $('.cart_navigation span');
  }

  public async confirmPurchase(): Promise<void> {
    await this.btnConfirmPurchase.click();
  }
}
