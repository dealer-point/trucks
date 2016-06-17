
"use strict";

import ObjectsList from "../../libs/objects_list";
import Event from "libs/event";

export default class Events extends ObjectsList<Event> {

    public static $inject: Array<string> = ["$http", "$rootScope"];

    constructor(
        $http: ng.IHttpService,
        $rootScope: IAppRootScopeService)
    {
        super($http);
        this.url = "/api/v1/events";
    }
}
