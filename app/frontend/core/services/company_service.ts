
"use strict";

import Company from  "../libs/company";

export default class CompanyService {

    public static $inject: string[] = ["$q", "$http", "$rootScope", "ngDialog"];
    public activities: string[];

    constructor(
        private $q: ng.IQService,
        private $http: ng.IHttpService,
        private $rootScope: IAppRootScopeService,
        private ngDialog: ng.dialog.IDialogService)
    {

    }

    public fastAdd(): ng.IPromise<Company> {

        let deferred: ng.IDeferred<Company> = this.$q.defer();

        let dialog: angular.dialog.IDialogOpenResult = this.ngDialog.open({
            template: require("../templates/fast_add_company.jade")(),
            plain: true,
            closeByDocument: false,
            showClose: false,
            controller: "fastAddCompanyController",
            controllerAs: "$facCtrl"
        });

        dialog.closePromise.then((data: angular.dialog.IDialogClosePromise): void => {
          deferred.resolve(data.value);
        });

        return deferred.promise;
    }
}

    // public load(): ng.IPromise<CurrentUser> {

    //     let scope: CurrentUser = this;

    //     return this.$http.get("/api/v1/users/current")
    //       .success((response: Object): IUser => {
    //         angular.extend(scope, response["user"]);
    //         scope.$rootScope.currentUser = scope;
    //         return scope;
    //       });
    // }


// angular
    // .module("core")
    // .service("CompanyService", CompanyService);
