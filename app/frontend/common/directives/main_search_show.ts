
interface IMainSearchScope extends ng.IScope {
    showSearch: Function;
}

interface IJQuery extends JQuery {
    velocity(slideToogle: string, object: Object): Function;
}

let template: Function = require('../templates/main_search_show.jade');

mainSearchShow.$inject = ['$rootScope', '$window', '$timeout', 'variables'];
export default function mainSearchShow(
    $rootScope: IAppRootScopeService,
    $window: Window,
    $timeout: ng.ITimeoutService,
    variables: any): ng.IDirective {
    'use strict';

    return {
        restrict: 'E',
        replace: true,
        scope: true,
        template: template(),
        link: (scope: IMainSearchScope, el: ng.IAugmentedJQuery): void => {
            scope.showSearch = ($event: JQueryEventObject) => {
                $event.preventDefault();

                (<IJQuery>$('#header_main')
                    .children('.header_main_content'))
                    .velocity('transition.slideUpBigOut', {
                        duration: 280,
                        easing: variables.easingSwiftOut,
                        begin: (): void => {
                            $rootScope.mainSearchActive = true;
                        },
                        complete: (): void => {
                            (<IJQuery>$('#header_main')
                                .children('.header_main_search_form'))
                                .velocity('transition.slideDownBigIn', {
                                    duration: 280,
                                    easing: variables.easingSwiftOut,
                                    complete: (): void => {
                                        $('.header_main_search_input').focus();
                                    }
                                });
                        }
                    });
            };
        }
    };
}
