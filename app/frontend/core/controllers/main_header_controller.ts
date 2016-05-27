"use strict";

interface IScope extends ng.IScope {

}

export default class MainHeaderController {

    public static $inject: Array<string> = ["$rootScope", "$scope"];

    constructor(
        private $rootScope: IAppRootScopeService,
        private $scope: IScope,
        private $location: ng.ILocationService) {
        // todo something
    }

    // public logout(): void {
    //     this.$rootScope
    //         .currentUser
    //         .logout()
    //         .success((): void => {
    //             // this.$location.
    //         });
    // }

}
