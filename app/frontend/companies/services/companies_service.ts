
'use strict';

import ObjectsList from '../../libs/objects_list';
// import Company from 'libs/company';

export default class Companies extends ObjectsList<ICompany> {

    public static $inject: Array<string> = ['$http', '$rootScope'];

    constructor(
        $http: ng.IHttpService,
        $rootScope: IAppRootScopeService) {

        super($http);
        this.url = '/api/v1/companies';
    }
}
