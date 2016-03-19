"use strict";

export default class UserService {
    static $inject = ['$http'];
    constructor(private $http: ng.IHttpService) {

    }

    public current() {
        return {"test": 'cock'}
    }
}