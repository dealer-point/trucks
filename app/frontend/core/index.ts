import RoutesConfig from "./routes";

import CurrentUser from "./services/current_user_service";
import CompaniesService from "./services/companies_service";
import CompanyService from "./services/company_service";

import ActivityDirective from "./directives/activity";

import MainSidebar from "./controllers/main_sidebar";
import MainHeader from "./controllers/main_header_controller";
import welcomeController from "./controllers/welcome_controller";
import companiesController from "./controllers/companies_controller";
import fastAddCompanyController from "./controllers/fast_add_company_controller";
import CompanyCardController from "./controllers/company_card";


export default angular
    .module("core", [])
    .service("CurrentUser", CurrentUser)
    .service("Companies", CompaniesService)
    .service("CompanyService", CompanyService)
    .directive("activity", ActivityDirective)
    .controller("MainSidebar", MainSidebar)
    .controller("MainHeader", MainHeader)
    .controller("welcomeController", welcomeController)
    .controller("companiesController", companiesController)
    .controller("fastAddCompanyController", fastAddCompanyController)
    .controller("CompanyCardController", CompanyCardController)
    .run(["CurrentUser", (currentUser: CurrentUser): void => {
        currentUser.load().then((): void => {
            console.log(currentUser, currentUser.can("role:create"));
        });
    }])
    .config(RoutesConfig)
    .name;
