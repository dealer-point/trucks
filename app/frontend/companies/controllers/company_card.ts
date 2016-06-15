
"use strict";

import Company from "libs/company";
import CompanyCardToolsService from "./services/company_card_tools.service";

export default class CompanyCardController {

    public static $inject: Array<string> = ["$stateParams", "$scope", "$http", "companyObject", "CompanyCardToolsService"];

    public company: Company;

    constructor(
        private $stateParams: IAppRootScopeService,
        private $scope: ng.IScope,
        private $http: ng.IHttpService,
        private companyObject: Company,
        private companyCardToolsService: CompanyCardToolsService)
    {
        this.companyCardToolsService.add(<ICardTool>{
            translationId: "Details",
            uiState: "restricted.companies.card.details"
        });

        this.companyCardToolsService.add(<ICardTool>{
            translationId: "Contacts",
            uiState: "restricted.companies.card.contacts"
        });

        this.companyCardToolsService.add(<ICardTool>{
            translationId: "Commercial proposals",
            uiState: "restricted.companies.card.commercial_proposals"
        });

        console.log(this.companyCardToolsService.tools);
    }
}
