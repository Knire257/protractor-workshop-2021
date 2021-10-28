import { $, ElementFinder } from 'protractor';

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  constructor () {
    this.tShirtMenu = $('.sf-arrows > li:nth-child(3)');
  }

  public async goToTShirtMenu(): Promise<void> {
    await this.tShirtMenu.click();
  }
  public getButton(): ElementFinder {
    return this.tShirtMenu;
  }
}
