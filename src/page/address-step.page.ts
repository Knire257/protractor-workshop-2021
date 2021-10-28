import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private btnProceedToCheckOut: ElementFinder;

  constructor () {
    this.btnProceedToCheckOut = $('#center_column > form > p > button > span');
  }

  public async addToCart(): Promise<void> {
    await this.btnProceedToCheckOut.click();
  }
}
