
"use strict";

import Company from  "libs/company";

export default class CompanyService {

    public static $inject: Array<string> = ["$q", "$http", "$rootScope", "ngDialog"];
    public activities: Array<string>;

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
