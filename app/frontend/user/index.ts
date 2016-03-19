import "./style.scss";
import UserService from "common/services/user"

let template: Function = require("./template.jade");

export class User implements ng.IComponentOptions {
  public template: string = template();
  public controller: Function = UserController;
}

class UserController {
  static $inject = ['UserService'];
  constructor(private UserService: UserService) {
    console.log(UserService.current());
  }
  public text: string = "Hello Kitty!";
}
