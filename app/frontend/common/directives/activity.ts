"use strict";

/**
 * Show/hide elements based on provided activities/roles
 *
 * @example
 * <div activity only="['role:show']"></div>
 * <div activity only="['role:show', 'role:update']" except="['role:destroy']"></div>
 * <div activity except="role:update"></div>
 */

export default function ActivityDirective(): ng.IDirective {
    "use strict";
    return {
        bindToController: {
            except: "=",
            only: "=",
        },
        controller: ActivityController,
        controllerAs: "activity",
        restrict: "A",
        scope: true,
    };
};

class ActivityController {
    public static $inject: string[] = ["$scope", "$element", "CurrentUser"];
    public only: string[];
    public except: string[];
    constructor(
        private $scope: ng.IScope,
        private $element: ng.IAugmentedJQuery,
        private currentUser: IUser
    ) {
        let ctrl: ActivityController = this;

        $scope.$watchGroup(["currentUser.activities", "activity.only", "activity.except"],
            function(): void {
                try {
                    if (ctrl.check()) { $element.removeClass("ng-hide");
                    } else { $element.addClass("ng-hide"); }
                } catch (e) {
                    $element.addClass("ng-hide");
                    console.error(e);
                }
            }
        );
    }

    private check(): boolean {
        let ctrl: ActivityController = this;
        if (ctrl.currentUser && ctrl.currentUser.activities) {
            if (ctrl.except) {
                let count: number = 0;
                angular.forEach(ctrl.except, function (activity: string): void {
                    if (ctrl.currentUser.activities.indexOf(activity) >= 0) { count++; }
                });
                if (count > 0) { return false; }
            }
            if (ctrl.only) {
                let count: number = ctrl.only.length;
                angular.forEach(this.only, function(activity: string): void {
                    if (ctrl.currentUser.activities.indexOf(activity) >= 0) { count--; }
                });
                return count === 0;
            }
            return true;
        }
        return false;
    }
}
