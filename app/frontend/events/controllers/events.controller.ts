
'use strict';

import EventsService from '../services/events.service';
import EventService from '../services/event.service';

export default class EventsController {

    public static $inject: Array<string> = [
        '$rootScope',
        '$scope',
        'EventsService',
        'EventService'
    ];

    public listTitle: string;

    constructor(
        private $rootScope: IAppRootScopeService,
        private $scope: ng.IScope,
        private events: EventsService,
        private eventService: EventService) {

        this.listTitle = 'Events';
        this.events.load();
    }

    public add(): void {

        let self: EventsController = this;

        this.eventService.fastAdd().then((data: any): void => {
            if (typeof (data) === 'object' && typeof (data.id) !== 'undefined') {
                self.events.unshift(data);
            }
        });
    }

    public edit(event: IEvent): void {

        let self: EventsController = this;
        this.eventService.fastEdit(event).then((response: any): void => {
            if (typeof response === 'object' && typeof response.id !== 'undefined') {
                self.events.update(response);
            }
        });
    }

    public remove(event: IEvent): void {

        // todo : Добавить модальным окном #ng-dialog

        // todo : сделать через перевод #angular-translate

        if (!confirm(`Are you sure you want to delete the event "${event.title}"?`)) {
            return;
        }

        this.$rootScope.content_preloader_show();

        this.events.remove(event).then((): void => {

            // todo : состояние обработки выписывать уведомелнием

            this.$rootScope.content_preloader_hide();
        });

    }
}
