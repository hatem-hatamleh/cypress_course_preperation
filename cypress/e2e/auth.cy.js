/// <reference types="Cypress"/>

import LoginPage from "../pages/LoginPage";
// Add pull request
describe("Login test cases", () => {
  it("should be able to login using email and password", () => {
    new LoginPage()
      .load()
      .login("hatem@example.com", "123456")
      .welcomeMessageShouldBeDisplayed();
  });
});
