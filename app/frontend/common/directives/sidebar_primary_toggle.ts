
interface ISidebarPrimaryScope extends ng.IScope {
    togglePrimarySidebar: Function;
}

let template: Function = require('../templates/sidebar_primary_toggle.jade');

export default function sidebarPrimaryToggle(
    $rootScope: IAppRootScopeService,
    $window: Window,
    $timeout: ng.ITimeoutService): ng.IDirective {
    'use strict';

    return {
        restrict: 'E',
        replace: true,
        scope: true,
        template: template(),
        link: (scope: ISidebarPrimaryScope, el: ng.IAugmentedJQuery): void => {
            scope.togglePrimarySidebar = ($event: ng.IAngularEvent) => {

                $event.preventDefault();

                if ($rootScope.primarySidebarActive) {
                    $rootScope.primarySidebarHiding = true;
                    if ($rootScope.largeScreen) {
                        $timeout(() => {
                            $rootScope.primarySidebarHiding = false;
                            $(window).resize();
                        }, 290);
                    }
                } else {
                    if ($rootScope.largeScreen) {
                        $timeout(() => {
                            $(window).resize();
                        }, 290);
                    }
                }

                $rootScope.primarySidebarActive = !$rootScope.primarySidebarActive;

                if (!$rootScope.largeScreen) {
                    if ($rootScope.primarySidebarActive) {
                        $rootScope.hide_content_sidebar =  true;
                    } else {
                        $rootScope.hide_content_sidebar =  false;
                    }

                }

                if ($rootScope.primarySidebarOpen) {
                    $rootScope.primarySidebarOpen = false;
                    $rootScope.primarySidebarActive = false;
                }
            };
        }


    };
};

sidebarPrimaryToggle.$inject = ['$rootScope', '$window', '$timeout'];
