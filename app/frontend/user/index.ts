import './style.scss';

var template: string = require('./template.html');

export class User implements ng.IComponentOptions {
  public template: string = template;
  public controller:  Function = UserController;
}

class UserController {
  public text: string = 'Hello world!';
}
