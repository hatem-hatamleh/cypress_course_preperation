import NewTodoPage from "./NewTodoPage";

export default class TodoPage {
  get welcomeMessage() {
    return cy.get('[data-testid="welcome"]');
  }

  get addButton() {
    return cy.get('[data-testid="add"]');
  }

  get todoFirstItem() {
    return cy.get('[data-testid="todo-item"]').first();
  }

  get todoFirstItemCheckbox() {
    return cy.get('[data-testid="complete-task"]').first();
  }

  load = () => {
    cy.visit("/todo");
    return this;
  };

  welcomeMessageShouldBeDisplayed = () => {
    this.welcomeMessage.should("be.visible");
  };

  clickOnAddButton = () => {
    this.addButton.click();
    return new NewTodoPage();
  };

  todoItemShouldHaveTheCorrectText = () => {
    this.todoFirstItem.should("contain.text", "Learn Cypress");
  };

  markTodoItemAsCompleted = () => {
    this.todoFirstItemCheckbox.click();
    return this;
  };

  todoItemShouldHaveTheCorrectBackgroundColor() {
    this.todoFirstItem.should(
      "have.css",
      "background-color",
      "rgb(33, 76, 97)"
    );
  }
}
