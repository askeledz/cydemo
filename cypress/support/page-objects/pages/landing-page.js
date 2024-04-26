export class landingPage {

  elements = {
    help: () => cy.get('.nav-button__help'),
    signUp: () => cy.get('.nav-button__sign-up .button--underline-x'),
    signIn: () => cy.get('.nav-button__sign-in .button--underline')
  }

  sign_in() {
    this.elements.signIn().click()
  }
}

module.exports = new landingPage();
