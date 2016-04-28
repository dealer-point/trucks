// import {MyService} from "./MyService";

interface IScope extends ng.IScope {
    $ctrl: WelcomeController;
    showPreloader(): void;
    hidePreloader(): void;
}

export default class WelcomeController {

    public static $inject: string[] = ["$rootScope", "$scope", "$timeout"];

    constructor($rootScope: IAppRootScopeService, $scope: IScope, $timeout: ng.ITimeoutService) {
        console.log("controller init");
        $scope.$ctrl = this;
        $scope.showPreloader = (): void => {
            $rootScope.content_preloader_show();
        };

        $scope.hidePreloader = (): void => {
            $rootScope.content_preloader_hide();
        };
    }
}
