
"use strict";

import EventsService from "../services/events.service";
import EventService from "../services/event.service";

export default class EventsController {

    public static $inject: Array<string> = ["$rootScope", "$scope", "EventsService", "EventService"];

    public listTitle: string;

    constructor(
        private $rootScope: IAppRootScopeService,
        private $scope: ng.IScope,
        private events: EventsService,
        private eventService: EventService)
    {
        this.listTitle = "Events";
        this.events.load();
    }

    public add(): void {

        // let self: EventsController = this;

        this.eventService.fastAdd();
        // .then((data: Company): void => {
        //     if (typeof (data) === "object" && typeof (data.id) !== "undefined") {
        //         self.companies.push(data);
        //     }
        // });
    }
}
