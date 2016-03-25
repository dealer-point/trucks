
interface IMainSearchHideScope extends ng.IScope {
    hideSearch: Function;
}

interface IJQuery extends JQuery {
    velocity(slideToogle: string, object: Object): Function;
    velocity(slideToogle: string): Function;
}

let template: Function = require("../templates/main_search_hide.jade");

mainSearchHide.$inject = ["$rootScope", "$window", "$timeout", "variables"];
export default function mainSearchHide(
    $rootScope: IAppRootScopeService,
    $window: Window,
    variables: any): ng.IDirective {
    "use strict";

    return {
        restrict: "E",
        template: template(),
        replace: true,
        scope: true,
        link: (scope: IMainSearchHideScope, el: ng.IAugmentedJQuery): void => {
            scope.hideSearch = ($event: ng.IAngularEvent) => {
                $event.preventDefault();

                let $headerMain: IJQuery = <IJQuery>$("#header_main");

                (<IJQuery>$headerMain
                    .children(".header_main_search_form"))
                    .velocity("transition.slideUpBigOut", {
                        duration: 280,
                        easing: variables.easingSwiftOut,
                        begin: (): void => {
                            $headerMain.velocity("reverse");
                            $rootScope.mainSearchActive = false;
                        },
                        complete: (): void => {
                            (<IJQuery>$headerMain
                                .children(".header_main_content"))
                                .velocity("transition.slideDownBigIn", {
                                    duration: 280,
                                    easing: variables.easingSwiftOut,
                                    complete: (): void => {
                                        $(".header_main_search_input").blur().val("");
                                    }
                                });
                        }
                    });

            };
        }
    };
}
