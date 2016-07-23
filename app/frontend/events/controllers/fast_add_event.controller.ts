
'use strict';

interface IEventKind {
    symbol: string;
    value: string;
};

import Event from  '../../libs/event';
import UsersService from 'core/services/users.service';

export default class FastAddEventController {

    public static $inject: Array<string> = [
        '$rootScope',
        '$scope',
        '$http',
        'event',
        'UsersService'
    ];

    public event: Event;
    public loading: boolean = false;
    public modeTitle: string = 'New event';

    // if start preparing - inc value, when stop preparing - dec value
    public preparing: number = 0;
    public _users: Array<IUser> = [];

    public kinds: Array<IEventKind> = [
        <IEventKind>{ symbol: 'incoming_call', value: 'Incoming call' },
        <IEventKind>{ symbol: 'outgoing_call', value: 'Outgoing call' },
        <IEventKind>{ symbol: 'meet', value: 'Meet' },
        <IEventKind>{ symbol: 'request', value: 'Request' }
    ];

    constructor(
        private $rootScope: IAppRootScopeService,
        private $scope: angular.dialog.IDialogScope,
        private $http: ng.IHttpService,
        private _event: Event,
        private users: UsersService) {

        this.event = new Event(this.$http);

        this.users.load();

        if (typeof(_event) !== 'undefined') {
            this.modeTitle = 'Edit event';
            this.event.extend(_event);
            this.event.load();
        }
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
