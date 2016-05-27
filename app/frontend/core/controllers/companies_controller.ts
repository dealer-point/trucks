
"use strict";

import Companies from "../services/companies_service";

interface IScope extends ng.IScope {
    companies: Companies;
}

"use strict";

export default class CompaniesController {

    public static $inject: Array<string> = ["$scope", "Companies"];

    public listTitle: string;
    public companies: Companies;

    constructor(
        private $scope: IScope,
        private _companies: Companies)
    {
        this.companies = _companies;
        this.listTitle = "Companies";
        this._companies.load();
    }
}
