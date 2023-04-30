/// <reference types="cypress" />

describe('Main', () => {
  it('render header', () => {
    cy.visit('/');
    cy.get('.page').should('contain', 'Main page');
    cy.get('.mainLink').should('contain', 'Main');
    cy.get('.aboutLink').should('contain', 'About Us');
    cy.get('.formsLink').should('contain', 'Forms');
    cy.get('.themesBTN').should('contain', 'Change themes');
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
  it('click link', () => {
    cy.visit('/');
    cy.get('.aboutLink').click();
    cy.url().should('include', '/aboutUs');
    cy.get('.formsLink').click();
    cy.url().should('include', '/forms');
    cy.get('.mainLink').click();
    cy.url().should('include', '/');
  });
  afterEach(() => {
    cy.window().trigger('unload');
  });
});

describe('AboutUs', () => {
  it('render header', () => {
    cy.visit('/aboutUs');
    cy.get('.page').should('contain', 'AboutUs page');
  });
  it('render page', () => {
    cy.visit('/aboutUs');
    cy.get('.aboutUs').should('contain', 'About Us');
  });
  afterEach(() => {
    cy.window().trigger('unload');
  });
});

describe('Error404', () => {
  it('render header', () => {
    cy.visit('/Error404');
    cy.get('.page').should('contain', 'Error404 page');
  });
  it('render page', () => {
    cy.visit('/Error404');
    cy.get('.error404').should('contain', 'Error 404');
  });
  afterEach(() => {
    cy.window().trigger('unload');
  });
});

describe('Forms', () => {
  it('render header', () => {
    cy.visit('/forms');
    cy.get('.page').should('contain', 'Forms page');
  });

  it('render page', () => {
    cy.visit('/forms');
    cy.get('.forms').should('be.visible');
  });

  afterEach(() => {
    cy.window().trigger('unload');
  });
});
