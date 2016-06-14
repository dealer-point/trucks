
"use strict";

import Company from "libs/company";
import CardToolsService from "./services/card_tools.service";

export default class CompanyCardController {

    public static $inject: Array<string> = ["$stateParams", "$scope", "$http", "companyObject", "CardToolsService"];

    public company: Company;

    constructor(
        private $stateParams: IAppRootScopeService,
        private $scope: ng.IScope,
        private $http: ng.IHttpService,
        private companyObject: Company,
        private cardToolsService: CardToolsService)
    {
        this.cardToolsService.add(<ICardTool>{
            translationId: "Details",
            uiState: "restricted.companies.card.details"
        });

        this.cardToolsService.add(<ICardTool>{
            translationId: "Contacts",
            uiState: "restricted.companies.card.contacts"
        });

        this.cardToolsService.add(<ICardTool>{
            translationId: "Commercial proposals",
            uiState: "restricted.companies.card.commercial_proposals"
        });
    }
}
