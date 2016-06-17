
"use strict";

import ObjectClass from  "../../libs/object";
import Event from  "../../libs/event";

export default class FastAddEventController {

    public static $inject: Array<string> = ["$rootScope", "$scope", "$http"];

    public company: ObjectClass<Event>;
    public loading: boolean = false;


    public selectize_a_data: any = {
        options: [
            {
                id: 1,
                title: "Item A1",
                value: "a1",
                parent_id: 1
            },
            {
                id: 2,
                title: "Item B1",
                value: "b1",
                parent_id: 1
            },
            {
                id: 3,
                title: "Item C1",
                value: "c1",
                parent_id: 1
            },
            {
                id: 4,
                title: "Item A2",
                value: "a2",
                parent_id: 2
            },
            {
                id: 5,
                title: "Item B2",
                value: "b2",
                parent_id: 2
            },
            {
                id: 6,
                title: "Item C2",
                value: "c2",
                parent_id: 2
            }
        ]
    };

    constructor(
        private $rootScope: IAppRootScopeService,
        private $scope: angular.dialog.IDialogScope,
        private $http: ng.IHttpService)
    {
        this.company = new ObjectClass<Event>(this.$http, "/api/v1/companies");
    }

    public save(): void {

        if (this.loading) {
            return;
        }

        let self: FastAddEventController = this;

        this.loading = true;

        this.company.save()
            .success(
                (response: any): void => {
                    self.loading = false;
                    self.$scope.closeThisDialog(response.data);
                })
            .error(
                (): void => {
                    self.loading = false;
                });
    }
}
