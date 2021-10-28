import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private btnAddToCart: ElementFinder;

  constructor () {
    this.btnAddToCart = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async addTShirtToCart(): Promise<void> {
    await this.btnAddToCart.click();
  }
}
