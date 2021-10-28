import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private btnGoToBank: ElementFinder;

  constructor () {
    this.btnGoToBank = $('.bankwire');
  }

  public async proceedToBank(): Promise<void> {
    await this.btnGoToBank.click();
  }
}
