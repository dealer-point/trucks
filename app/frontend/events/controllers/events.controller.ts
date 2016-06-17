
"use strict";

import EventsService from "../services/events.service";

export default class EventsController {

    public static $inject: Array<string> = ["$rootScope", "$scope", "EventsService"];

    public listTitle: string;

    constructor(
        private $rootScope: IAppRootScopeService,
        private $scope: ng.IScope,
        private events: EventsService)
    {
        this.listTitle = "Events";
        this.events.load();
    }
}
