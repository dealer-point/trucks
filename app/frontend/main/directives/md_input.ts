
interface IScope extends ng.IScope {
    updateInput(): void;
}

interface IJQuery extends JQuery {
    andSelf(): IJQuery;
    prev(selector?: string): IJQuery;
    siblings(selector?: string): IJQuery;
}

mdInput.$inject = ["$rootScope", "$timeout"];
export default function mdInput(
    $rootScope: IAppRootScopeService,
    $timeout: ng.ITimeoutService): ng.IDirective {
    "use strict";

    return {
        restrict: "A",
        scope: {
            ngModel: "="
        },
        controller: ($scope: IScope, $element: ng.IAugmentedJQuery): void => {
            let $elem: IJQuery = <IJQuery>$($element);

            $scope.updateInput = (): void => {
                // clear wrapper classes
                $elem
                    .closest(".md-input-wrapper")
                    .removeClass("md-input-wrapper-danger md-input-wrapper-success md-input-wrapper-disabled");

                if ($elem.hasClass("md-input-danger")) {
                    $elem.closest(".md-input-wrapper").addClass("md-input-wrapper-danger");
                }
                if ($elem.hasClass("md-input-success")) {
                    $elem.closest(".md-input-wrapper").addClass("md-input-wrapper-success");
                }
                if ($elem.prop("disabled")) {
                    $elem.closest(".md-input-wrapper").addClass("md-input-wrapper-disabled");
                }
                if ($elem.hasClass("label-fixed")) {
                    $elem.closest(".md-input-wrapper").addClass("md-input-filled");
                }
                if ($elem.val() !== "") {
                    $elem.closest(".md-input-wrapper").addClass("md-input-filled");
                }
            };
        },
        link: (scope: IScope, elem: ng.IAugmentedJQuery, attrs: ng.IAttributes): void => {
            let $elem: IJQuery = <IJQuery>$(elem);

            $timeout((): void => {
                if (!$elem.hasClass("md-input-processed")) {
                    if ($elem.prev("label").length) {
                        $elem.prev("label").andSelf().wrapAll("<div class=\"md-input-wrapper\"/>");
                    } else if ($elem.siblings("[data-uk-form-password]").length) {
                        $elem.siblings("[data-uk-form-password]").andSelf().wrapAll("<div class=\"md-input-wrapper\"/>");
                    } else {
                        $elem.wrap("<div class=\"md-input-wrapper\"/>");
                    }
                    $elem
                        .addClass("md-input-processed")
                        .closest(".md-input-wrapper")
                        .append("<span class=\"md-input-bar\"/>");
                }

                scope.updateInput();

            });

            scope.$watch(() => {
                return $elem.attr("class");
            },
            (newValue: any, oldValue: any): void => {
                if (newValue !== oldValue) {
                    scope.updateInput();
                }
            });

            scope.$watch(() => {
                return $elem.val();
            },
            (newValue: any, oldValue: any): void => {
                if (!$elem.is(":focus") && (newValue !== oldValue) ) {
                    scope.updateInput();
                }
            });

            $elem
                .on("focus", (): void => {
                    $elem.closest(".md-input-wrapper").addClass("md-input-focus");
                })
                .on("blur", (): void => {
                    $timeout((): void => {
                        $elem.closest(".md-input-wrapper").removeClass("md-input-focus");
                        if ($elem.val() === "") {
                            $elem.closest(".md-input-wrapper").removeClass("md-input-filled");
                        } else {
                            $elem.closest(".md-input-wrapper").addClass("md-input-filled");
                        }
                    }, 100);
                });
        }
    };
}
