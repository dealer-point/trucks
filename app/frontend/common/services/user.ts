"use strict";

export default class UserService {
    public static $inject: string[] = ["$http"];
    constructor(
        private $http: ng.IHttpService
    ) {

    }

    public current(): string {
        return "cock";
    }
}
