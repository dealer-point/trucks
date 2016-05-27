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
            template: require("./templates/companies.jade")(),
            controller: "companiesController",
            controllerAs: "$companiesCtrl"
        });
}
