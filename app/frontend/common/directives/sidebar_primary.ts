
interface ISidebarPrimaryScope extends ng.IScope {
    submenuToggle: Function;
}

interface IJQuery extends JQuery {
    velocity(slideToogle: string, object: Object): Function;
}

sidebarPrimary.$inject = ['$rootScope', '$window', '$timeout', 'variables'];
export default function sidebarPrimary(
    $rootScope: IAppRootScopeService,
    $window: Window,
    $timeout: ng.ITimeoutService,
    variables: any): ng.IDirective {
    'use strict';

    return {
        restrict: 'A',
        scope: true,
        link: (scope: ISidebarPrimaryScope, el: ng.IAugmentedJQuery): void => {
            let scrollContainer: JQuery;
            scope.submenuToggle = ($event: JQueryEventObject) => {
                $event.preventDefault();
                let $this: JQuery = $($event.currentTarget);
                let $sidebarMain: JQuery = $('#sidebar_main');
                let slideToogle: string = $this.next('ul').is(':visible') ? 'slideUp' : 'slideDown';

                (<IJQuery>$this.next('ul'))
                    .velocity(slideToogle, {
                        duration: 400,
                        easing: variables.easingSwiftOut,
                        begin: (): void => {
                            if (slideToogle === 'slideUp') {
                                $this
                                    .closest('.submenu_trigger')
                                    .removeClass('act_section');
                            } else {
                                if ($rootScope.menuAccordionMode) {
                                    $this
                                        .closest('li')
                                        .siblings('.submenu_trigger')
                                        .each((): void => {
                                            (<IJQuery>$this.children('ul')).velocity('slideUp', {
                                                duration: 500,
                                                easing: variables.easingSwiftOut,
                                                begin: (): void => {
                                                    $this
                                                        .closest('.submenu_trigger')
                                                        .removeClass('act_section');
                                                }
                                            });
                                    });
                                }
                                $this.closest('.submenu_trigger').addClass('act_section');
                            }
                        },
                        complete: (): void => {
                            if (slideToogle !== 'slideUp') {
                                if ($sidebarMain.find('.scroll-content').length) {
                                    scrollContainer = $sidebarMain.find('.scroll-content');
                                } else {
                                    scrollContainer = $sidebarMain.find('.scrollbar-inner');
                                }

                                (<IJQuery>$this.closest('.act_section')).velocity('scroll', {
                                    duration: 500,
                                    easing: variables.easingSwiftOut,
                                    container: scrollContainer
                                });
                            }
                        }
                    });

            };
        }
    };
}
