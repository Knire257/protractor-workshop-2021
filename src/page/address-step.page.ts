import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private btnProceedToCheckOut: ElementFinder;

  constructor () {
    this.btnProceedToCheckOut = $("button[name='processAddress']");
  }

  public async proceedToCheckOut(): Promise<void> {
    await this.btnProceedToCheckOut.click();
  }

  public getBtnProceedToChackOut() : ElementFinder {
    return this.btnProceedToCheckOut;
  }
}
