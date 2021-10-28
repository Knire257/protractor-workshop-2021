import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private textSummaryPurchase: ElementFinder;

  constructor () {
    // this.textSummaryPurchase = $('.standard-checkout');
    this.textSummaryPurchase = $('p strong.dark');
  }

  public async getPurchaseSummary(): Promise<void> {
    await this.textSummaryPurchase.isPresent();
  }
}
