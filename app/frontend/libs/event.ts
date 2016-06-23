
"use strict";

import ObjectClass from "../libs/object";

export default class Event extends ObjectClass implements IEvent {
    public id: number;
    public title: string;
    public kind: string;
    public status: string;
    public description: string;
    public created_by: IUser;
    public assigned_by: IUser;
    public created_at: string;
    public assigned_at: string;

    constructor(http: ng.IHttpService) {
        super(http, "/api/v1/events");
    }
}
