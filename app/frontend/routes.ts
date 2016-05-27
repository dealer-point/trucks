let headerTpl: Function         = require("./common/templates/header.jade");
let sidebarPrimaryTpl: Function = require("./common/templates/sidebarPrimary.jade");
let restrictedTpl: Function     = require("./common/templates/restricted.jade");

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
export default function RoutesConfig(
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider): void
{
    "use strict";

    $urlRouterProvider
        .when("/welcome", "/")
        .otherwise("/");

    $stateProvider
        .state("error", {
            url: "/error",
            template: "<center>ErrorPage</center>"
        })
        .state("error.404", {
            url: "/404",
            template: "/404.html"
        })
        .state("error.500", {
            url: "/500",
            template: "/500.html"
        })
        .state("restricted", {
            abstract: true,
            url: "",
            views: {
                "main_header": {
                    template: headerTpl(),
                    controller: "MainHeader",
                    controllerAs: "$headerCtrl"
                },
                "main_sidebar": {
                    template: sidebarPrimaryTpl(),
                    controller: "MainSidebar"
                },
                "": {
                    template: restrictedTpl()
                }
            }
        });
}
