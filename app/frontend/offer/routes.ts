"use strict";

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
export default function RoutesConfig(
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider): void {
    "use strict";

    $stateProvider
        .state("restricted.offer_generator", {
            url: "/offer_generator",
            template: require("./templates/offer_generator.jade")(),
            controller: "offerGeneratorController",
            controllerAs: "$offerGeneratorCtrl"
        })
        .state("restricted.offers", {
            url: "/offers",
            template: require("./templates/offers.jade")(),
            controller: "offersController",
            controllerAs: "$offersCtrl"
        });
}
