/// <reference types="cypress" />

describe('/pages/app/login', () => {
  it('should navigate to profile page when requested form is submitted', () => {
    cy.visit('/app/login/');

    // fill form
    cy.get('#formRegister input[name="user"]').type('oarthursilva');
    cy.get('#formRegister input[name="password"]').type('1234567890');

    // click on submit
    cy.get('#formRegister button[type="submit"]').click();

    // fill form and navigate to profile page at /app/profile
    cy.url().should('include', '/app/profile')
  })
})
