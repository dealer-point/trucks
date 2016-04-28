
RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
export default function RoutesConfig(
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider): void {
    "use strict";

    $stateProvider
        .state("restricted.welcome", {
            url: "/",
            template: "<div id=\"page_content\">" +
                "<button class=\"md-btn md-btn-success md-btn-wave-light waves-effect" +
                "waves-button waves-light\" ng-click=\"showPreloader()\">" +
                "Показать прелоадер</button><br /><br />" +
                "<button class=\"md-btn md-btn-primary md-btn-wave-light waves-effect" +
                "waves-button waves-light\" ng-click=\"hidePreloader()\">" +
                "Спрятать прелоадер</button>" +
                "</div><div>" +
                "<div class=\"uk-form-row\">" +
                "<label for=\"login_username\">Username</label>" +
                "<input class=\"md-input\" type=\"text\"" +
                "id=\"login_username\" ng-model=\"login_username\" md-input />" +
                "</div>" +
                "</div>",
            controller: "welcomeController"
        })
        .state("restricted.welcome2", {
            url: "/welcome2",
            template: "<div id=\"page_content\" style=\"padding: 25px;\">" +
                "<button class=\"md-btn md-btn-success md-btn-wave-light waves-effect" +
                "waves-button waves-light\" ng-click=\"showPreloader()\">" +
                "Показать прелоадер</button><br /><br />" +
                "<button class=\"md-btn md-btn-primary md-btn-wave-light waves-effect" +
                "waves-button waves-light\" ng-click=\"hidePreloader()\">" +
                "Спрятать прелоадер</button>" +
                "</div><div style=\"padding: 25px; width: 300px;\">" +
                "<div class=\"uk-form-row\">" +
                "<label for=\"login_username\">Username</label>" +
                "<input class=\"md-input\" type=\"text\"" +
                "id=\"login_username\" ng-model=\"login_username\" md-input />" +
                "</div>" +
                "</div>",
            controller: "welcomeController"
    });
}
