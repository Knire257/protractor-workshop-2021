import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private checkBoxAgreeTerms: ElementFinder;
  private btnProceedToPayment: ElementFinder;

  constructor () {
    // this.checkBoxAgreeTerms = $('input [name="cgv"]');
    this.checkBoxAgreeTerms = $('[type="checkbox"]');
    // this.btnProceedToPayment = $('button [name="processCarrier"]');
    this.btnProceedToPayment = $('[name="processCarrier"]');
  }

  public async agreeTerms(): Promise<void> {
    await this.checkBoxAgreeTerms.click();
  }

  public async proceedToPayment(): Promise<void> {
    await this.btnProceedToPayment.click();
  }
}
