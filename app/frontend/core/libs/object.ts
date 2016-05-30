
"use strict";

export default class ObjectClass<T> {

    public $http: ng.IHttpService;
    public url: string = "";

    constructor(http: ng.IHttpService) {
        this.$http = http;
    }

    public load(): ng.IHttpPromise<IResponseObject<T>> {
        let self: ObjectClass<T> = this;

        return this.$http.get(this.url).success((response: IResponseObject<T>): void => {
            angular.extend(self, response.object);
        });
    }

    public destroy(): ng.IHttpPromise<IResponseObject<T>> {
        return this.$http.delete(this.url);
    }

    public extend(obj: T): void {
        angular.extend(this, obj);
    }
}
