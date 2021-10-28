import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private checkBoxAgreeTerms: ElementFinder;
  private btnProceedToPayment: ElementFinder;

  constructor () {
    this.checkBoxAgreeTerms = $('#cgv');
    this.btnProceedToPayment = $('#form > p > button > span');
  }

  public async agreeTerms(): Promise<void> {
    await this.checkBoxAgreeTerms.click();
  }

  public async proceedToPayment(): Promise<void> {
    await this.btnProceedToPayment.click();
  }
}
