import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private btnGoToBank: ElementFinder;

  constructor () {
    this.btnGoToBank = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async proceedToBank(): Promise<void> {
    await this.btnGoToBank.click();
  }
}
