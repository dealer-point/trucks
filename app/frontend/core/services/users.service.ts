
'use strict';

import ObjectsList from '../../libs/objects_list';
// import User from 'libs/user';

export default class Users extends ObjectsList<IUser> {

    public static $inject: Array<string> = ['$http', '$rootScope'];

    constructor(
        $http: ng.IHttpService,
        $rootScope: IAppRootScopeService) {
        super($http);
        this.url = '/api/v1/users';
    }
}
