
import CompaniesService from "./services/companies_service";
import CompanyService from "./services/company_service";
import CardToolsService from "./services/card_tools.service";

import companiesController from "./controllers/companies_controller";
import fastAddCompanyController from "./controllers/fast_add_company_controller";
import CompanyCardController from "./controllers/company_card";


import RoutesConfig from "./routes";

export default angular
    .module("companies", [])
    .service("Companies", CompaniesService)
    .service("CompanyService", CompanyService)
    .service("CardToolsService", CardToolsService)
    .controller("companiesController", companiesController)
    .controller("fastAddCompanyController", fastAddCompanyController)
    .controller("CompanyCardController", CompanyCardController)
    .config(RoutesConfig);
