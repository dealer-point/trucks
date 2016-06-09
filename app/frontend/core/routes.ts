"use strict";

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
export default function RoutesConfig(
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider): void {
    "use strict";

    $stateProvider
        .state("restricted.welcome", {
            url: "/",
            template: require("./templates/welcome.jade")(),
            controller: "welcomeController",
            controllerAs: "$welcomeCtrl"
        })
        .state("restricted.welcome2", {
            url: "/welcome2",
            template: require("./templates/welcome2.jade")(),
            controller: "welcomeController",
            controllerAs: "$welcomeCtrl"
        })
        .state("restricted.companies", {
            url: "/companies",
            template: "<div ui-view autoscroll=\"false\" />",
            abstract: true
        })
        .state("restricted.companies.list", {
            url: "",
            template: require("./templates/companies.jade")(),
            controller: "companiesController",
            controllerAs: "$companiesCtrl"
        })
        .state("restricted.companies.card", {
            abstract: true,
            url: "/{companyId:int}",
            template: require("./templates/company_card.jade")(),
            controller: "CompanyCardController",
            controllerAs: "$companyCardCtrl",
            resolve: {
                companyObject: ($http: ng.IHttpService, $stateParams: any): ng.IHttpPromise<Object> => {
                    return $http.get("/api/v1/companies/" + $stateParams.companyId + ".json")
                        .then((response: any): any => {
                            return response.data.data;
                        });
                }
            }
        })
        .state("restricted.companies.card.details", {
            url: "/details",
            template: require("./templates/company_card_details.jade")()
        })
        .state("restricted.companies.card.contacts", {
            url: "/contacts",
            template: "<h1>CONTACTS</h1>"
        })
        .state("restricted.companies.card.commercial_proposals", {
            url: "/commercial_proposals",
            template: "<h1>COMMERCIAL PROPOSALS</h1>"
        });
        // .state("restricted.companies.card.details", {
        //     url: "/{id:int}/details",
        //     template: require("./templates/company_card.jade")(),
        //     controller: "CompanyCardController",
        //     controllerAs: "$companiesCtrl"
        // });
}
