import "./style.scss";
import CurrentUser from "common/services/current_user";

let template: Function = require("./template.jade");

export class User implements ng.IComponentOptions {
  public template: string = template();
  public controller: Function = UserController;
}

class UserController {
  public static $inject: string[] = ["CurrentUser"];
  constructor(private curentUser: CurrentUser) {
    console.log(curentUser);
  }
  public text: string = "Hello Kitty!";
}
