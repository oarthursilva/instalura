export default class LoginScreenPageObject {
  constructor(cy) {
    this.cy = cy;

    cy.visit('/app/login/');
  }

  fillFormFields({ username, password }) {
    this.cy.get('#formRegister input[name="username"]').type(username);
    this.cy.get('#formRegister input[name="password"]').type(password);
    return this;
  }

  submitForm() {
    this.cy.get('#formRegister button[type="submit"]').click();
    return this;
  }
}
