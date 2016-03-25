let headerTpl: Function = require("./common/templates/header.jade");
let sidebarPrimaryTpl: Function = require("./common/templates/sidebarPrimary.jade");
let restrictedTpl: Function = require("./common/templates/restricted.jade");

RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
export default function RoutesConfig(
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider): void
{
    "use strict";

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
                    template: headerTpl()
                },
                "main_sidebar": {
                    template: sidebarPrimaryTpl(),
                    controller: "mainSidebar"
                },
                "": {
                    template: restrictedTpl()
                }
            }
        })

        // Тестовая фигня. Этого тут не должно быть
        .state("restricted.welcome", {
            url: "/",
            template: "<div id=\"page_content\">test welcome template</div>"
        });
}
