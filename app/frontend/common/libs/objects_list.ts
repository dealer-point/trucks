
"use strict";

interface IResponseCollection<T> {
    collection: Array<T>;
    meta: any;
}

export default class ObjectsList<T> {

    public static $inject: Array<string> = ["$http"];

    public collection: Array<T> = [];
    public $http: ng.IHttpService;
    public url: string = "";

    constructor(http: ng.IHttpService) {
        this.$http = http;
    }

    public load(): ng.IHttpPromise<ObjectsList<T>> {
        let self: ObjectsList<T> = this;

        return this.$http.get(this.url).success((response: IResponseCollection<T>): void => {
            self.collection = response.collection;
        });
    }

    public clear(): void {
        this.collection = [];
    }

    public get length(): number {
        return this.collection.length;
    }
}
