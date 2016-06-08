singleCard.$inject = ["$window", "$timeout"];
export default function singleCard($window: ng.IWindowService, $timeout: ng.ITimeoutService): ng.IDirective {
    "use strict";

    return {
        restrict: "A",
        link: (scope: ng.IScope, el: ng.IAugmentedJQuery, attrs: ng.IAttributes): void => {

            let $mdCardSingle: ng.IAugmentedJQuery = angular.element(el);
            let w: ng.IAugmentedJQuery = angular.element($window);

            function md_card_content_height(): void {
                let contentHeight: number = w.height() - ((48 * 2) + 12);
                $mdCardSingle.find(".md-card-content").innerHeight(contentHeight);
            }

            $timeout(function(): void {
                md_card_content_height();
            }, 100);

            w.on("resize", function(e: Event): void {
                $timeout.cancel(scope["resizingTimer"]);
                scope["resizingTimer"] = $timeout(function(): string {
                    md_card_content_height();
                    return scope.$apply();
                }, 280);
            });
        }
    };
}
