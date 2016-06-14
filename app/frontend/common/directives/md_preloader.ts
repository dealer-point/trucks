
"use strict";

interface IScope extends ng.IScope {
    width: number;
    height: number;
    strokeWidth: number;
    style: string;
}

export default function mdPreloader(): ng.IDirective {
    "use strict";

    return {
        restrict: "E",
        scope: {
            width: "=?",
            height: "=?",
            strokeWidth: "=?",
            style: "@?"
        },
        template: require("../templates/md_preloader.jade"),
        link: (scope: IScope, elem: ng.IAugmentedJQuery, attr: ng.IAttributes): void => {

            scope.width = scope.width ? scope.width : 48;
            scope.height = scope.height ? scope.height : 48;
            scope.strokeWidth = scope.strokeWidth ? scope.strokeWidth : 4;

            attr.$observe("warning", (): void => {
                scope.style = " md-preloader-warning";
            });

            attr.$observe("success", (): void => {
                scope.style = " md-preloader-success";
            });

            attr.$observe("danger", (): void => {
                scope.style = " md-preloader-danger";
            });

        }
    };
}
