
"use strict";

import ObjectsList from "../../libs/objects_list";
import Company from "../../libs/company";

export default class Companies extends ObjectsList<Company> {

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
//     .module("companies")
//     .service("Companies", Companies);
