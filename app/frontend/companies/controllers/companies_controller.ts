
"use strict";

import CompanyService from "../services/company_service";
import Companies from "../services/companies_service";
import Company from  "libs/company";

export default class CompaniesController {

  public static $inject: Array<string> = ["$rootScope", "$scope", "Companies", "CompanyService"];

    public listTitle: string;
    public companies: Companies;

    constructor(
        private $rootScope: IAppRootScopeService,
        private $scope: ng.IScope,
        private _companies: Companies,
        private companyService: CompanyService)
    {
        this.companies = _companies;
        this.listTitle = "Companies";
        this._companies.load();
    }

    public remove(company: Company): void {

        // todo : Добавить модальным окном #ng-dialog

        // todo : сделать через перевод #angular-translate

        if (!confirm("Are you sure you want to delete the company \"" + company.name + "\"?")) {
            return;
        }

        this.$rootScope.content_preloader_show();

        this.companies.remove(company).then((): void => {

            // todo : состояние обработки выписывать уведомелнием

            this.$rootScope.content_preloader_hide();
        });

    }

    public add(): void {

        let self: CompaniesController = this;

        this.companyService.fastAdd().then((data: Company): void => {
            if (typeof(data) == "object" && typeof (data.id) !== "undefined") {
                self.companies.push(data);
            }
        });
    }
}
