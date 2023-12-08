/// <reference types="Cypress" />
import { recurse } from 'cypress-recurse'
import landingPage from "../support/page-objects/pages/landing-page";
import signinPage from "../support/page-objects/pages/signin-page";
import { Utility } from "../support/utility"


//Call getBaseUrl() to get environment specific url value
const url = new Utility().getBaseUrl()
const envi = new Utility().getEnvi()

var testdata;

describe(`STWC - env:<${envi}>, suite:<regression>,<all>`, function () {
  let userEmail
  let userPass
  let passcode

  before(function () {
    //access fixture data
    cy.fixture('example.json').then(function (testdata) {
      this.testdata = testdata
    })
    cy.viewport(1024, 768)

    recurse(
      () => cy.task("createTestEmail"),
      Cypress._.isObject, // keep retrying until the task returns an object
      {
        log: true,
        timeout: 20000, // retry up to 20 seconds
        delay: 5000, // wait 5 seconds between attempts
        error: "Could not create test email"
      }
    ).then((testAccount) => {
      userEmail = testAccount.user
      userPass = testAccount.pass
      cy.log('#############################################')
      cy.log(`Email account created - (for debugging purposes): ${userEmail}`)
      cy.log(`Email account password - (for debugging purposes): ${userPass}`)
      cy.log('#############################################')
    })
  })


  it('SignUp test', function () {
    cy.log('#############################################')
    cy.log(`The environment: <${envi}> ${url}`)
    cy.log('#############################################')
    cy.visit(url);
    landingPage.sign_in()
    signinPage.enter_mail(userEmail)
    signinPage.submit_btn()


    // retry fetching the email
    recurse(
      () => cy.task("getLastEmail", { user: userEmail, pass: userPass }), // Cypress commands to retry
      Cypress._.isObject, // keep retrying until the task returns an object
      {
        log: true,
        timeout: 30000, // retry up to 30 seconds
        delay: 5000, // wait 5 seconds between attempts
        error: "Messages Not Found"
      }
    ).then((message) => {
      cy.task("parseEmail", { message })
        .its("html")
        .then((html) => {
          //cy.document().then(document => {
          //console.log(html)
          document.body.innerHTML = html;
          passcode = document.getElementsByTagName("b")[0].innerText;
          cy.log(passcode)
          signinPage.enter_passcode(passcode)
          signinPage.continue_btn()
        })
    })
  })
})