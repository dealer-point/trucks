"use strict";

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
export default function RoutesConfig(
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider): void {
    "use strict";

    $stateProvider
        .state("restricted.offers", {
            url: "/offers",
            template: require("./templates/offers.jade")(),
            controller: "offersController",
            controllerAs: "$offersCtrl"
        });
}
