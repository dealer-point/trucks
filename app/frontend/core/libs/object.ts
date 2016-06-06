
"use strict";

export default class ObjectClass<T> {

    public $http: ng.IHttpService;
    public url: string = "";
    public errors: Object;

    constructor(http: ng.IHttpService, url: string) {
        this.$http = http;
        this.url = url;
    }

    public load(): ng.IHttpPromise<IResponseObject<T>> {
        let self: ObjectClass<T> = this;

        return this.$http.get(this.url).success((response: IResponseObject<T>): void => {
            angular.extend(self, response.object);
        });
    }

    public save(): ng.IHttpPromise<ObjectClass<T>> {

        let self: ObjectClass<T> = this;

        return this.$http.post(this.url, this).error((response: IResponseObjectErrors<T>): void => {
            self.errors = response.errors;
        });
    }

    public destroy(): ng.IHttpPromise<IResponseObject<T>> {
        return this.$http.delete(this.url);
    }

    public extend(obj: T): void {
        angular.extend(this, obj);
    }
}
