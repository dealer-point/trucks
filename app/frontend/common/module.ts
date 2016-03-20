import CurrentUser from "./services/current_user";

export default angular
    .module("app.common", [])
    .service("CurrentUser", CurrentUser)
    .name;


