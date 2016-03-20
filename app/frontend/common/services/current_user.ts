"use strict";
import User from "./user";

export default class CurrentUser extends User {
    public static $inject: string[] = ["$http", "$rootScope"];
    public activities: string[];
    constructor(
        private $http: ng.IHttpService,
        private $rootScope: IAppRootScope
    ) {
        super();
    }

    public load(): ng.IPromise<CurrentUser> {
        let scope: CurrentUser = this;
        return this.$http.get("/api/v1/users/current").success(function(userData: IUser): IUser {
            angular.extend(scope, userData);
            scope.$rootScope.currentUser = scope;
            return scope;
        });
    }

    public can(activity: string): boolean {
        return this.activities.indexOf(activity) >= 0;
    }
}
