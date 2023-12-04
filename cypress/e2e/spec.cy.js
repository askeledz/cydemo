/// <reference types="Cypress" />
import loginPage from "../support/page-objects/pages/login-page";

var testdata;

describe('template spec', () => {
  before(function () {
    //access fixture data
    cy.fixture('example.json').then(function (testdata) {
      this.testdata = testdata
    })
  })
  

  it('passes', function () {
    cy.visit('https://d2ufixqq814vug.cloudfront.net/');
    //elements.logo().should('be.visible');
    loginPage.sign_in()
    console.log(this.testdata.fullName)
  })
})