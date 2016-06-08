
"use strict";

import ObjectsList from "../../core/libs/objects_list";
import Offer from "../libs/offer";

export default class Offers extends ObjectsList<Offer> {

    public static $inject: Array<string> = ["$http", "$rootScope"];

    constructor(
        $http: ng.IHttpService,
        $rootScope: IAppRootScopeService
    ) {
        super($http);
        this.url = "/api/v1/offers";
    }
}
