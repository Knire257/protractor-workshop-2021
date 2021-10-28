import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private textSummaryPurchase: ElementFinder;

  constructor () {
    this.textSummaryPurchase = $('#center_column > div > p > strong');
  }

  public async getPurchaseSummary(): Promise<void> {
    await this.textSummaryPurchase.isPresent();
  }
}
