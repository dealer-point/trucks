
interface IJQuery extends JQuery {
    velocity(slideToogle: string, object: Object): Function;
    velocity(slideToogle: string): Function;
}

interface IScope extends ng.IScope {
    onClick: Function;
    onKeyUp: Function;
}

documentEvents.$inject = ["$rootScope", "$window", "$timeout", "variables"];
export default function documentEvents(
    $rootScope: IAppRootScopeService,
    $window: Window,
    $timeout: ng.ITimeoutService,
    variables: any): ng.IDirective
{
    "use strict";

    return {
        restrict: "A",
        link: (scope: IScope, el: ng.IAugmentedJQuery, attrs: ng.IAttributes): void => {
            let hidePrimarySidebar: Function = () => {
                $rootScope.primarySidebarActive = false;
                $rootScope.primarySidebarOpen = false;
                $rootScope.hide_content_sidebar = false;
                $rootScope.primarySidebarHiding = true;
                $timeout(() => {
                    $rootScope.primarySidebarHiding = false;
                }, 280);
            };

            let hideSecondarySidebar: Function = () => {
                $rootScope.secondarySidebarActive = false;
            };

            let hideMainSearch: Function = () => {
                let $headerMain: IJQuery = <IJQuery>$("#header_main");
                (<IJQuery>$headerMain
                    .children(".header_main_search_form"))
                    .velocity("transition.slideUpBigOut", {
                        duration: 280,
                        easing: variables.easing_swiftOut,
                        begin: (): void => {
                            $headerMain.velocity("reverse");
                            $rootScope.mainSearchActive = false;
                        },
                        complete: (): void => {
                            (<IJQuery>$headerMain
                                .children(".header_main_content"))
                                .velocity("transition.slideDownBigIn", {
                                    duration: 280,
                                    easing: variables.easing_swiftOut,
                                    complete: (): void => {
                                        $(".header_main_search_input").blur().val("");
                                    }
                                });
                        }
                    });
            };

            // hide components on $document click
            scope.onClick = ($event: JQueryEventObject) => {
                // primary sidebar
                if ($rootScope.primarySidebarActive &&
                    !$($event.target).closest("#sidebar_main").length &&
                    !$($event.target).closest("#sSwitch_primary").length &&
                    !$rootScope.largeScreen) {
                    hidePrimarySidebar();
                }
                // secondary sidebar
                if ($rootScope.secondarySidebarActive &&
                    !$($event.target).closest("#sidebar_secondary").length &&
                    !$($event.target).closest("#sSwitch_secondary").length) {
                    hideSecondarySidebar();
                }
                // main search form
                if ($rootScope.mainSearchActive &&
                    !$($event.target).closest(".header_main_search_form").length &&
                    !$($event.target).closest("#main_search_btn").length) {
                    hideMainSearch();
                }
                // style switcher
                if ($rootScope.styleSwitcherActive &&
                    !$($event.target).closest("#style_switcher").length) {
                    $rootScope.styleSwitcherActive = false;
                }
            };

            // hide components on key press (esc)
            scope.onKeyUp = ($event: JQueryEventObject) => {
                // primary sidebar
                if ( $rootScope.primarySidebarActive && !$rootScope.largeScreen && $event.keyCode === 27) {
                    hidePrimarySidebar();
                }
                // secondary sidebar
                if ( $rootScope.secondarySidebarActive && $event.keyCode === 27) {
                    hideSecondarySidebar();
                }
                // main search form
                if ( $rootScope.mainSearchActive && $event.keyCode === 27) {
                    hideMainSearch();
                }
                // style switcher
                if ( $rootScope.styleSwitcherActive && $event.keyCode === 27) {
                    $rootScope.styleSwitcherActive = false;
                }

            };
        }
    };
}
