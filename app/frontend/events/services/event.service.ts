
"use strict";

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

    public fastAdd(_event?: IEvent): ng.IPromise<IEvent> {

        _event = _event || undefined;

        let deferred: ng.IDeferred<IEvent> = this.$q.defer();

        let dialog: angular.dialog.IDialogOpenResult = this.ngDialog.open({
            template: require("../templates/fast_add_event.jade")(),
            plain: true,
            closeByDocument: false,
            showClose: false,
            controller: "FastAddEventController",
            controllerAs: "$faeCtrl",
            resolve: {
                event: (): IEvent => { return _event; }
            }
        });

        dialog.closePromise.then((data: angular.dialog.IDialogClosePromise): void => {
          deferred.resolve(data.value);
        });

        return deferred.promise;
    }

    public fastEdit(event: IEvent): ng.IPromise<IEvent> {
        let eventNew: IEvent = angular.copy(event);
        return this.fastAdd(eventNew);
    }
}
