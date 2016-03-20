"use strict";

export default class CurrentUser {
    public static $inject: string[] = ["$http"];
    constructor(
        private $http: ng.IHttpService
    ) {

    }

    public load() {
        this.$http.get('/api/v1/users/current').then(function(res){
            console.log(res.data);
            //_.assign(self,res.data);
        })
    }
}
