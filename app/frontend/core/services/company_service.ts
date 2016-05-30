
"use strict";

import ObjectClass from "../libs/object";
import Company from "../libs/company";

export default class CompanyService extends ObjectClass<Company> {

    public static $inject: Array<string> = ["$http", "$rootScope"];

    constructor(
        $http: ng.IHttpService,
        $rootScope: IAppRootScopeService)
    {
        super($http);
        this.url = "/api/v1/companies";
    }
}

// angular
    // .module("app.core")
    // .service('Company', CompanyService);
