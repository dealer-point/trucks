
"use strict";

import Company from  "../../libs/company";

export default class FastAddCompanyController {

    public static $inject: Array<string> = ["$rootScope", "$scope", "$http"];

    public company: Company;
    public loading: boolean = false;

    constructor(
        private $rootScope: IAppRootScopeService,
        private $scope: angular.dialog.IDialogScope,
        private $http: ng.IHttpService)
    {
        this.company = new Company(this.$http);
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
