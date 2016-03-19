import "./style.scss";
import UserService from "common/services/user";

let template: Function = require("./template.jade");

export class User implements ng.IComponentOptions {
  public template: string = template();
  public controller: Function = UserController;
}

class UserController {
  public static $inject: string[] = ["UserService"];
  constructor(private userService: UserService) {
    console.log(curentUser.current());
  }
  public text: string = "Hello Kitty!";
}
