
"use strict";

interface IEventKind {
    symbol: string;
    value: string;
};

import ObjectClass from  "../../libs/object";
import Event from  "../../libs/event";

export default class FastAddEventController {

    public static $inject: Array<string> = ["$rootScope", "$scope", "$http"];

    public event: ObjectClass<Event>;
    public loading: boolean = false;

    public users: any = [
        { id: 1, title: "Igor Kasparov", value: "i-kasparov" }
    ];

    public kinds: Array<IEventKind> = [
        <IEventKind>{ symbol: "incoming_call", value: "Incoming call" },
        <IEventKind>{ symbol: "outgoing_call", value: "Outgoing call" },
        <IEventKind>{ symbol: "meet", value: "Meet" },
        <IEventKind>{ symbol: "request", value: "Request" }
    ];
    // meet request
    constructor(
        private $rootScope: IAppRootScopeService,
        private $scope: angular.dialog.IDialogScope,
        private $http: ng.IHttpService)
    {
        this.event = new ObjectClass<Event>(this.$http, "/api/v1/events");
    }

    public save(): void {

        if (this.loading) {
            return;
        }

        let self: FastAddEventController = this;

        this.loading = true;

        this.event.save()
            .success(
                (response: any): void => {
                    self.loading = false;
                    self.$scope.closeThisDialog(response.data);
                })
            .error(
                (): void => {
                    self.loading = false;
                });
    }
}
