export class signinPage {

  elements = {
    mail_box: () => cy.get('#email'),
    submit_btn: () => cy.get('.styles_containerField__OT_99 [aria-disabled]'),
    passcode_box: () => cy.get('#passcode-x'),
    continue_btn: () => cy.get('.styles_button___5U_I.styles_button__tX5Hx')
  }

  enter_mail(mail) {
    this.elements.mail_box().clear().type(mail)
  }
  enter_passcode(passcode) {
    this.elements.passcode_box().clear().type(passcode)
  }
  submit_btn() {
    this.elements.submit_btn().click()
  }
  continue_btn() {
    this.elements.continue_btn().click()
  }
}

module.exports = new signinPage();
