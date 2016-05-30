
"use strict";

import Companies from "../services/companies_service";
import Company from  "../libs/company";

// interface IScope extends ng.IScope {
//     companies: Companies;
// }

"use strict";

export default class CompaniesController {

  public static $inject: Array<string> = ["$rootScope", "$scope", "Companies"];

    public listTitle: string;
    public companies: Companies;

    constructor(
        private $rootScope: IAppRootScopeService,
        private $scope: ng.IScope,
        private _companies: Companies)
    {
        this.companies = _companies;
        this.listTitle = "Companies";
        this._companies.load();
    }

    public remove(company: Company): void {

        // todo : Добавить модальным окном
        // tofo : сделать через перевод angular-translate
        if (!confirm("Are you sure you want to delete the company \"" + company.name + "\"?")) {
            return;
        }

        this.$rootScope.content_preloader_show();

        this.companies.remove(company).then((): void => {

            // todo : состояние обработки выписывать уведомелнием

            this.$rootScope.content_preloader_hide();
        });

    }
}
