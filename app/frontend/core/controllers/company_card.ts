
"use strict";

// import ObjectClass from  "../libs/object";
import Company from "../libs/company";

export default class CompanyCardController {

    public static $inject: Array<string> = ["$stateParams", "$scope", "$http", "companyObject"];

    // public company: ObjectClass<Company>;
    // public loading: boolean = false;

    public company: Company;

    constructor(
        private $stateParams: IAppRootScopeService,
        private $scope: ng.IScope,
        private $http: ng.IHttpService,
        private companyObject: Company)
    {
        // this.company = companyObject;
    }

    // public save(): void {

    //     if (this.loading) {
    //         return;
    //     }

    //     let self: CompanyCardController = this;

    //     this.loading = true;

    //     this.company.save()
    //         .success(
    //             (response: any): void => {
    //                 self.loading = false;
    //                 self.$scope.closeThisDialog(response.company);
    //             })
    //         .error(
    //             (): void => {
    //                 self.loading = false;
    //             });
    // }
}
