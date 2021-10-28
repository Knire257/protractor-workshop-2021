import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private btnConfirmPurchase: ElementFinder;

  constructor () {
    this.btnConfirmPurchase = $('[name="processAddress"]');
  }

  public async confirmPurchase(): Promise<void> {
    await this.btnConfirmPurchase.click();
  }
}
