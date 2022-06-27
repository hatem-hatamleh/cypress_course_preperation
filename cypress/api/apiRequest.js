export class ApiRequest {
  static login = () => {
    return cy
      .request({
        url: "/api/v1/users/login",
        method: "POST",
        body: {
          email: "hatem@example.com",
          password: "123456",
        },
      })
      .as("loginResponse");
  };

  static addTodo = () => {
    this.login().then((response) => {
      return cy
        .request({
          url: "/api/v1/tasks",
          method: "POST",
          auth: {
            bearer: response.body.access_token,
          },
          body: {
            item: "Learn Cypress",
            isCompleted: false,
          },
        })
        .as("newTodoResponse");
    });
  };
}
