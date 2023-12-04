/// <reference types="Cypress" />
import  landingPage  from "../support/page-objects/pages/landing-page";
import  signinPage from "../support/page-objects/pages/signin-page";

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
    landingPage.sign_in()
    signinPage.enter_mail('pero@pero.com')
    signinPage.submit_btn()
    signinPage.enter_passcode('SAFARG')
    signinPage.continue_btn()
    console.log(this.testdata.fullName)
  })
})