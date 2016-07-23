
interface IJQuery extends JQuery {
    scrollbar(object: Object): Function;
}

interface IAttributes extends ng.IAttributes {
    id: string;
}

customScrollbar.$inject = ['$rootScope'];
export default function customScrollbar($rootScope: IAppRootScopeService): ng.IDirective {
    'use strict';

    return {
        restrict: 'A',
        scope: true,
        link: (scope: ng.IScope, el: ng.IAugmentedJQuery, attrs: IAttributes): void => {
            // check if mini sidebar is enabled
            if (attrs.id === 'sidebar_main' && $rootScope.miniSidebarActive) {
                return;
            }

            $(el).addClass('uk-height-1-1').wrapInner('<div class="scrollbar-inner"></div>');
            if (Modernizr.touch) {
                $(el).children('.scrollbar-inner').addClass('touchscroll');
            } else {
                (<IJQuery>$(el).children('.scrollbar-inner')).scrollbar({
                    disableBodyScroll: true,
                    scrollx: false,
                    duration: 100
                });
            }
        }
    };
}
