import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private btnProceedToCheckOut: ElementFinder;

  constructor () {
    this.btnProceedToCheckOut = $("button[name='processAddress']");
  }

  public async addToCart(): Promise<void> {
    await this.btnProceedToCheckOut.click();
  }
}
