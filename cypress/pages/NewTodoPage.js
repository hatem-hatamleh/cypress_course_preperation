import TodoPage from "./TodoPage";

export default class NewTodoPage {
  get newTaskInput() {
    return cy.get('[data-testid="new-todo"]');
  }
  get newTaskSubmit() {
    return cy.get('[data-testid="submit-newTask"]');
  }

  load = () => {
    cy.visit("/todo/new");
    return this;
  };

  addNewTodo = (item) => {
    this.newTaskInput.type(item);
    this.newTaskSubmit.click();
    return new TodoPage();
  };
}
