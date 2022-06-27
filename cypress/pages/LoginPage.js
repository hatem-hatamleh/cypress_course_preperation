import TodoPage from "./TodoPage";

export default class LoginPage {
  // Elements
  get emailInput() {
    return cy.get('[data-testid="email"]');
  }

  get passwordInput() {
    return cy.get('[data-testid="password"]');
  }

  get submitButton() {
    return cy.get('[data-testid="submit"]');
  }

  load = () => {
    cy.visit("/");
    return this;
  };

  login = (email, password) => {
    this.emailInput.type(email);
    this.passwordInput.type(password);
    this.submitButton.click();
    return new TodoPage();
  };
}
