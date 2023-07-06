/// <reference types="Cypress" />
import { elements } from "../fixtures/elements"

var testdata;

describe('template spec', () => {
  before(function () {
    //access fixture data
    cy.fixture('example.json').then(function (testdata) {
      this.testdata = testdata
    })
  })

  it('passes', function () {
    cy.visit('https://example.cypress.io');
    elements.title().should('be.visible');
    console.log(this.testdata.fullName)
  })
})