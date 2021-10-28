import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private btnAddToCart: ElementFinder;

  constructor () {
    this.btnAddToCart = $('.ajax_add_to_cart_button');
  }

  public async addTShirtToCart(): Promise<void> {
    await this.btnAddToCart.click();
  }
}
