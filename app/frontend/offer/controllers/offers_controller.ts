"use strict";

import Offers from "../services/offers_service";
import Offer from  "../libs/offer";

export default class OffersController {

  public static $inject: Array<string> = ["$rootScope", "$scope", "Offers"];

    public listTitle: string;
    public offers: Offers;

    constructor(
        private $rootScope: IAppRootScopeService,
        private $scope: ng.IScope,
        private _offers: Offers)
    {
        this.listTitle = "Offers";
        this.offers = _offers;
        this._offers.load();
    }

    public view(offer: Offer): void {

    }

    public edit(offer: Offer): void {

    }

    public remove(offer: Offer): void {
        if (confirm("Are you sure to delete this offer?")) {
            this.$rootScope.content_preloader_show();
            this.offers.remove(offer).then((): void => {
                this.$rootScope.content_preloader_hide();
            }, (): void => {
                this.$rootScope.content_preloader_hide();
            });
        }
    }

}
