
"use strict";

import Event from  "libs/event";

export default class EventService {

    public static $inject: Array<string> = ["$q", "$http", "$rootScope", "ngDialog"];
    public activities: Array<string>;

    constructor(
        private $q: ng.IQService,
        private $http: ng.IHttpService,
        private $rootScope: IAppRootScopeService,
        private ngDialog: ng.dialog.IDialogService)
    {
    }

    public fastAdd(): ng.IPromise<Event> {

        let deferred: ng.IDeferred<Event> = this.$q.defer();

        let dialog: angular.dialog.IDialogOpenResult = this.ngDialog.open({
            template: require("../templates/fast_add_event.jade")(),
            plain: true,
            closeByDocument: false,
            showClose: false,
            controller: "FastAddEventController",
            controllerAs: "$faeCtrl"
        });

        dialog.closePromise.then((data: angular.dialog.IDialogClosePromise): void => {
          deferred.resolve(data.value);
        });

        return deferred.promise;
    }
}
