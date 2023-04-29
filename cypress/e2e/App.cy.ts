/// <reference types="cypress" />

describe('Main Page', () => {
  it('render header', () => {
    cy.visit('/');
    cy.get('.page').should('contain', 'Main page');
    cy.get('.mainLink').should('contain', 'Main');
    cy.get('.aboutLink').should('contain', 'About Us');
    cy.get('.formsLink').should('contain', 'Forms');
  });

  it('render search', () => {
    cy.visit('/');
    cy.get('.searchbar').should('be.visible');
    cy.get('.searchBTN').should('contain', 'Search');
  });

  it('render cardBox', () => {
    cy.visit('/');
    cy.get('.cardBox').should('be.visible');
    cy.get('.card').should('be.visible');
    cy.get('.img').should('be.visible');
  });
});
