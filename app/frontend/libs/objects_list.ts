
'use strict';

export default class ObjectsList<T extends IModel> {

    public static $inject: Array<string> = ['$http'];

    public collection: Array<T> = [];
    public $http: ng.IHttpService;
    public url: string = '';

    constructor(http: ng.IHttpService) {
        this.$http = http;
    }

    public load(): ng.IHttpPromise<ObjectsList<T>> {
        let self: ObjectsList<T> = this;

        return this
            .$http
            .get(this.url)
            .success((response: IResponseCollection<T>): void => {

            self.collection = response.data;
        });
    }

    public remove(object: T): ng.IHttpPromise<IResponseObject<T>> {

        let self: ObjectsList<T> = this;

        return this
            .$http
            .delete(this.url + '/' + object.id)
            .success((response: IResponseObject<T>): void => {
            _.remove(self.collection, object);
        });
    }

    public find(id: number): T {
        return _.find(this.collection, (x: T) => (x.id === id));
    }

    public push(item: T): void {
        this.collection.push(item);
    }

    public unshift(item: T): void {
        this.collection.unshift(item);
    }

    public clear(): void {
        this.collection = [];
    }

    public update(event: IEvent): void {
        let _event: any = _.find(this.collection, (x: IEvent) => x.id === event.id);
        angular.extend(_event, event);

    }

    public get length(): number {
        return this.collection.length;
    }
}
