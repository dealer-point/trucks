let headerTpl: Function = require("./main/templates/header.jade");
let sidebarPrimaryTpl: Function = require("./main/templates/sidebarPrimary.jade");
let restrictedTpl: Function = require("./main/templates/restricted.jade");

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
            template: "<div id=\"page_content\">" +
  "<button class=\"md-btn md-btn-success md-btn-wave-light waves-effect waves-button waves-light\" ng-click=\"showPreloader()\">" +
  "Показать прелоадер</button><br /><br />" +
  "<button class=\"md-btn md-btn-primary md-btn-wave-light waves-effect waves-button waves-light\" ng-click=\"hidePreloader()\">" +
  "Спрятать прелоадер</button>" +
  "</div>",
            controller: "welcomeController"
        });
}
