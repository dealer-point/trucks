
// import { Modal } from "../../common/services/modal";

export default class WelcomeController {

    public static $inject: Array<string> = ["$rootScope", "ngDialog"];

    constructor(
        private $rootScope: IAppRootScopeService,
        private ngDialog: ng.dialog.IDialogService) {
    }

    public showPreloader(): void {
        this.$rootScope.content_preloader_show();
    }

    public hidePreloader(): void {
        this.$rootScope.content_preloader_hide();
    }

    public addCompany(): void {

        this.ngDialog.open({
            template: require("../templates/mymodal.jade")(),
            plain: true,
            closeByDocument: false,
            showClose: false
        });
    }
}
