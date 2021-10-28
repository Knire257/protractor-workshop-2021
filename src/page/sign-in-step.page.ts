import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private userEmail: ElementFinder;
  private userPswd: ElementFinder;
  private btnSubmitUserData: ElementFinder;

  constructor () {
    this.userEmail = $('#email');
    this.userPswd = $('#passwd');
    this.btnSubmitUserData = $('#SubmitLogin > span');
  }

  public async sendUserData(email:string, password:string): Promise<void> {
    await this.userEmail.sendKeys(email);
    await this.userPswd.sendKeys(password);
    await this.btnSubmitUserData.click();
  }
}
