
"use strict";

import User from "../libs/user";

export default class CurrentUser extends User {

    public static $inject: string[] = ["$http", "$rootScope"];
    public activities: string[];

    constructor(
        private $http: ng.IHttpService,
        private $rootScope: IAppRootScopeService) {

        super();
    }

    public load(): ng.IPromise<CurrentUser> {

        let scope: CurrentUser = this;

        return this.$http.get("/api/v1/users/current")
            .success((response: Object): IUser => {
                angular.extend(scope, response["data"]);
                scope.$rootScope.currentUser = scope;
                return scope;
            });
    }

    public can(activity: string): boolean {

        return this.activities.indexOf(activity) >= 0;
    }

    public logout(): ng.IHttpPromise<CurrentUser> {

        return this.$http.delete("/sessions");
    }
}
