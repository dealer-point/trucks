import CurrentUser from "./services/current_user";
import ActivityDirective from "./directives/activity";

export default angular
    .module("app.common", [])
    .service("CurrentUser", CurrentUser)
    .directive("activity", ActivityDirective)
    .run(["CurrentUser", function(currentUser: CurrentUser): void {
        currentUser.load().then(function(): void {
            console.log(currentUser, currentUser.can("role:create"));
        });
    }])
    .name;
