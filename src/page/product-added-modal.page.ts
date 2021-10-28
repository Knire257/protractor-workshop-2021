import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private btnProceedToCheckout: ElementFinder;

  constructor () {
    this.btnProceedToCheckout = $('[style*="display: block;"] .button-container > a');
  }

  public async proceedToCheckout(): Promise<void> {
    await this.btnProceedToCheckout.click();
  }
}
