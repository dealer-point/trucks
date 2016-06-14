
"use strict";

import Company from "libs/company";

export default class CompanyCardController {

    public static $inject: Array<string> = ["$stateParams", "$scope", "$http", "companyObject"];

    public company: Company;

    constructor(
        private $stateParams: IAppRootScopeService,
        private $scope: ng.IScope,
        private $http: ng.IHttpService,
        private companyObject: Company)
    {
    }
}
