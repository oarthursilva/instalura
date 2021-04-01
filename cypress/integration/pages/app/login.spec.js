/// <reference types="cypress" />

describe('/pages/app/login', () => {
  it('should navigate to profile page when requested form is submitted', () => {
    cy.intercept('https://instalura-api.vercel.app/api/login')
      .as('userLogin');

    cy.visit('/app/login/');

    // fill form
    cy.get('#formRegister input[name="username"]').type('oarthursilva');
    cy.get('#formRegister input[name="password"]').type('senhasegura');

    // click on submit
    cy.get('#formRegister button[type="submit"]').click();

    // fill form and navigate to profile page at /app/profile
    cy.url().should('include', '/app/profile');

    cy.wait('@userLogin')
      .then((intercept) => {
        const { token } = intercept.response.body.data;
        cy.getCookie('APP_TOKEN')
          .should('exist')
          .should('have.property', 'value', token);
      });
  });
});
