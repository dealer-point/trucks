
"use strict";

import ObjectsList from "./objects_list_class";
import Company from "./company";

export default class Companies extends ObjectsList<Company> {

    public static $inject: Array<string> = ["$http", "$rootScope"];

    constructor(
        $http: ng.IHttpService,
        $rootScope: IAppRootScopeService)
    {
        super($http);
        this.url = "/api/v1/companies";
    }

    // public load(): ng.IPromise<CurrentUser> {

    //   let scope: CurrentUser = this;

    //   return this.$http.get("/api/v1/users/current")
    //     .success((response: Object): IUser => {
    //       angular.extend(scope, response["user"]);
    //       scope.$rootScope.currentUser = scope;
    //       return scope;
    //     });
    // }

    // public can(activity: string): boolean {

    //   return this.activities.indexOf(activity) >= 0;
    // }

    // public logout(): ng.IHttpPromise<CurrentUser> {

    //   return this.$http.delete("/sessions");
    // }
}
