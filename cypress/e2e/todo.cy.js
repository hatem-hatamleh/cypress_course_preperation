import { ApiRequest } from "../api/apiRequest";
import NewTodoPage from "../pages/NewTodoPage";
import TodoPage from "../pages/TodoPage";

describe("Todo test cases", () => {
  it("should be able to add new todo", () => {
    ApiRequest.login();
    new NewTodoPage()
      .load()
      .addNewTodo("Learn Cypress")
      .todoItemShouldHaveTheCorrectText();
  });

  it("should be able to mark a todo as completed", () => {
    ApiRequest.addTodo();
    new TodoPage()
      .load()
      .markTodoItemAsCompleted()
      .todoItemShouldHaveTheCorrectBackgroundColor();
  });
});
