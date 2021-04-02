/// <reference types="cypress" />

import LoginScreenPageObject from '../../../../src/components/screen/LoginScreen/app/LoginScreen/LoginScreen.pageObject';

describe('/pages/app/login', () => {
  describe('when fill and submit a form login request', () => {
    beforeEach(() => {
      cy.log('Setup test before execution.');
      cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app')
        .as('userLogin');
    });

    it('should navigate to profile page', () => {
      const loginScreen = new LoginScreenPageObject(cy);
      loginScreen
        .fillFormFields({ username: 'omariosouto', password: 'senhasegura' })
        .submitForm();

      // @Assert
      cy.url().should('include', '/app/profile');

      cy.wait('@userLogin')
        .then((intercept) => {
          const { token } = intercept.response.body.data;
          // @Assert
          cy.getCookie('APP_TOKEN')
            .should('exist')
            .should('have.property', 'value', token);
        });
    });
  });
});
