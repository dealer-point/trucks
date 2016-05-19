import RoutesConfig        from "./routes";

import CurrentUser         from "./services/current_user_service";
import CompaniesService    from "./services/companies_service";

import ActivityDirective   from "./directives/activity";

import MainSidebar         from "./controllers/main_sidebar";
import MainHeader          from "./controllers/main_header_controller";
import welcomeController   from "./controllers/welcome_controller";
import companiesController from "./controllers/companies_controller";



export default angular
    .module("app.common", [])
    .service("CurrentUser",    CurrentUser)
    .service("Companies",      CompaniesService)
    .directive("activity",     ActivityDirective)
    .controller("MainSidebar", MainSidebar)
    .controller("MainHeader",  MainHeader)
    .controller("welcomeController", welcomeController)
    .controller("companiesController", companiesController)
    .run(["CurrentUser", function(currentUser: CurrentUser): void {
        currentUser.load().then(function(): void {
            console.log(currentUser, currentUser.can("role:create"));
        });
    }])
    .config(RoutesConfig)
    .name;
