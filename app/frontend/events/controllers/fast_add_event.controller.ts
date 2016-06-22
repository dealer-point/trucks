
"use strict";

interface IEventKind {
    symbol: string;
    value: string;
};

import Event from  "../../libs/event";
import UsersService from "core/services/users.service";

export default class FastAddEventController {

    public static $inject: Array<string> = ["$rootScope", "$scope", "$http", "event", "UsersService"];

    public event: Event;
    public loading: boolean = false;
    public modeTitle: string = "New event";
    public preparing: number = 0; // if start preparing - inc value, when stop preparing - dec value
    public _users: Array<IUser> = [];
    // public users: Array<IUser> = [
    //     <IUser>{ id: 1, title: "Igor Kasparov"}
    // ];

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
        private $http: ng.IHttpService,
        private _event: Event,
        private users: UsersService)
    {
        // this.preparing++;
        this.event = new Event(this.$http);

        // this.preparing++;
        this.users.load();
        // .then(
        //     (): void => { this.preparing--; },
        //     (): void => { this.preparing--; }
        // );

        if (typeof(_event) !== "undefined") {
            this.modeTitle = "Edit event";
            this.event.extend(_event);
            // this.preparing++;
            this.event.load();
            // .then(
            //     (): void => { this.preparing--; },
            //     (): void => { this.preparing--; }
            // );
        }
        // this.preparing--;
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
