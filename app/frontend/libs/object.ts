
"use strict";

export default class ObjectClass {

    public id: number;
    public $http: ng.IHttpService;
    public url: string = "";
    public errors: Object;

    constructor(http: ng.IHttpService, url: string) {
        this.$http = http;
        this.url = url;
    }

    public load(): ng.IHttpPromise<IResponseObject<ObjectClass>> {
        let self: ObjectClass = this;

        return this.$http.get(`${this.url}/${this.id}`).success((response: IResponseObject<ObjectClass>): void => {
            angular.extend(self, response.data);
        });
    }

    public save(): ng.IHttpPromise<ObjectClass> {

        let self: ObjectClass = this;

        let httpPromise: ng.IHttpPromise<ObjectClass>;

        if (typeof(this.id) === "undefined") {
            httpPromise = this.$http.post(this.url, this);
        } else {
            httpPromise = this.$http.put(`${this.url}/${this.id}`, this);
        }

        return httpPromise
            .error((response: IResponseObjectErrors<ObjectClass>): void => {
                self.errors = response.errors;
            });
    }

    public destroy(): ng.IHttpPromise<IResponseObject<ObjectClass>> {
        return this.$http.delete(this.url);
    }

    public extend(obj: ObjectClass): void {
        angular.extend(this, obj);
    }
}
