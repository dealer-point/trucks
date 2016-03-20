import "./style.scss";

let template: Function = require("./template.jade");

export class User implements ng.IComponentOptions {
    public template: string = template();
    public controller: Function = UserController;
}

class UserController {
    public text: string = "Hello Kitty!";
}
