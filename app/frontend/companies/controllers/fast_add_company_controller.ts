
"use strict";

import ObjectClass from  "../../libs/object";
import Company from  "../../libs/company";

export default class FastAddCompanyController {

    public static $inject: Array<string> = ["$rootScope", "$scope", "$http"];

    public company: ObjectClass<Company>;
    public loading: boolean = false;

    constructor(
        private $rootScope: IAppRootScopeService,
        private $scope: angular.dialog.IDialogScope,
        private $http: ng.IHttpService)
    {
        this.company = new ObjectClass<Company>(this.$http, "/api/v1/companies");
    }

    public save(): void {

        if (this.loading) {
            return;
        }

        let self: FastAddCompanyController = this;

        this.loading = true;

        this.company.save()
            .success(
                (response: any): void => {
                    self.loading = false;
                    self.$scope.closeThisDialog(response.data);
                })
            .error(
                (): void => {
                    self.loading = false;
                });
    }
}

// angular
//     .module("companies")
//     .controller("FastAddCompanyController", FastAddCompanyController);
