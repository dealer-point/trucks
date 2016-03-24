"use strict";

/*
 import styles
 todo : move to gulp
*/
import "./assets/template/stylesheets/uikit.almost-flat.css";
import "./assets/template/icons/flags/flags.css";
import "./assets/template/stylesheets/main.css";

// import { User } from "./user/index";

let truckApp: ng.IModule = angular.module("trucksApp", ["ui.router", "ngSanitize", "ngAnimate", "ngRetina", "ncy-angular-breadcrumb"]);

truckApp.run(["$rootScope", "$state", "$stateParams", "$http", "$window", "$timeout", RootConfig]);

truckApp.config(["$stateProvider", "$urlRouterProvider", RoutesConfig]);

import sidebarPrimaryToggle from "./common/directives/sidebar_primary_toggle";
truckApp.directive("sidebarPrimaryToggle", sidebarPrimaryToggle);

import variables from "./common/services/variables";
truckApp.service("variables", variables);

import sidebarPrimary from "./common/directives/sidebar_primary";
truckApp.directive("sidebarPrimary", sidebarPrimary);

function RootConfig(
    $rootScope: IAppRootScopeService,
    $state: ng.ui.IStateProvider,
    $stateParams: ng.ui.IStateParamsService,
    $http: ng.IHttpService,
    $window: Window,
    $timeout: ng.ITimeoutService): void
{
    "use strict";

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.$on("$stateChangeSuccess", () => {
        console.log("cock state change");

        let animateParams: Object = {
            scrollTop: 0
        };

        function PerparePage(): void
        {
            $rootScope.pageLoading = false;
            $($window).resize();
        }

        function PreparePlugins(): void
        {
            $rootScope.pageLoaded = $rootScope.appInitialized = true;
            Waves.attach(".md-btn-wave,.md-fab-wave", ["waves-button"]);
            Waves.attach(".md-btn-wave-light,.md-fab-wave-light", ["waves-button", "waves-light"]);
        }

        $("html, body").animate(animateParams, 200);
        $timeout(PerparePage, 300);
        $timeout(PreparePlugins, 600);

    });

    $rootScope.$on("$stateChangeStart", (event: angular.IAngularEvent, toState: any, toParams: any, fromState: any, fromParams: any) => {
        // main search
        $rootScope.mainSearchActive = false;
        // single card
        $rootScope.headerDoubleHeightActive = false;
        // top bar
        $rootScope.toBarActive = false;
        // page heading
        $rootScope.pageHeadingActive = false;
        // top menu
        $rootScope.topMenuActive = false;
        // full header
        $rootScope.fullHeaderActive = false;
        // full height
        $rootScope.page_full_height = false;
        // secondary sidebar
        $rootScope.sidebar_secondary = false;
        $rootScope.secondarySidebarHiddenLarge = false;
        // footer
        $rootScope.footerActive = false;

        if ($($window).width() < 1220) {
            // hide primary sidebar
            $rootScope.primarySidebarActive = false;
            $rootScope.hide_content_sidebar = false;
        }
        if (!toParams.hasOwnProperty("hidePreloader")) {
            $rootScope.pageLoading = true;
            $rootScope.pageLoaded = false;
        }
    });

    FastClick.attach(document.body);
    $rootScope.Modernizr = Modernizr;

    let w: any = angular.element($window);

    $rootScope.largeScreen = w.width() >= 1220;

    w.on("resize", () => {
        return $rootScope.largeScreen = w.width() >= 1220;
    });

    // show/hide main menu on page load
    $rootScope.primarySidebarOpen = ($rootScope.largeScreen) ? true : false;

    $rootScope.pageLoading = true;

    Waves.init();
}

let headerTpl: Function = require("./common/templates/header.jade");
let sidebarPrimaryTpl: Function = require("./common/templates/sidebarPrimary.jade");

function RoutesConfig($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider): void
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
                    template: sidebarPrimaryTpl()
                }
            }
        })
        .state("restricted.welcome", {
            url: "/",
            template: "test welcome template"
        });
}
