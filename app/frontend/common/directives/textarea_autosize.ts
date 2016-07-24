
'use strict';

textareaAutosize.$inject = ['$timeout'];
export default function textareaAutosize($timeout: ng.ITimeoutService): ng.IDirective {
    'use strict';

    return {
        restrict: 'A',
        link: (scope: ng.IScope, elem: ng.IAugmentedJQuery, attrs: ng.IAttributes): void => {
            autosize($(elem));
            $timeout((): void => {
                scope.$apply((): void => {
                    autosize.update($(elem));
                });
            });
        }
    };
}
