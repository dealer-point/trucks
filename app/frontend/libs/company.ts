
"use strict";

import ObjectClass from "../libs/object";

export default class Company extends ObjectClass implements ICompany {
    public id: number;
    public name: string;
    public city: string;
    public country: string;
    public description: string;

    constructor(http: ng.IHttpService) {
        super(http, "/api/v1/events");
    }
}
