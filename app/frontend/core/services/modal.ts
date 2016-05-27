import IPromise = angular.IPromise;
import IDeferred = angular.IDeferred;
import IScope = angular.IScope;
export interface IModalOptions {
  controller?: string;
  controllerAs?: string;
  template?: string;
  templateUrl?: string;
  scope?: ng.IScope;
}

export interface IModalInstance {
  $scope?: IScope;
  $element?: ng.IAugmentedJQuery;
  result: IPromise<any>;
  close?(value: any): void;
  dismiss?(): void;
}

export class Modal {
  public static $inject: string[] = ["$document", "$q", "$templateRequest", "$compile", "$rootScope", "$controller"];
  private body: ng.IAugmentedJQuery;
  constructor(
    $document: ng.IDocumentService,
    private $q: ng.IQService,
    private $templateRequest: ng.ITemplateRequestService,
    private $compile: ng.ICompileService,
    private $rootScope: ng.IScope,
    private $controller: ng.IControllerService) {

    this.body = $document.find("body");
  }

  public open(options: IModalOptions): IModalInstance {
    let self: Modal = this;
    let deferred: IDeferred<any> = self.$q.defer();
    let modalInstance: IModalInstance = {
      result: deferred.promise
    };

    // get the actual html of the template.
    this.getTemplate(options.template, options.templateUrl)
      .then(function(template: string): void {
        modalInstance.$scope = (options.scope || self.$rootScope).$new();
        let linkFn: ng.ITemplateLinkingFunction = self.$compile(template);
        modalInstance.$element = linkFn(modalInstance.$scope);
        modalInstance.close = function(value: any): void {
          deferred.resolve(value);
          modalInstance.$element.remove();
          modalInstance.$scope.$destroy();
        };
        modalInstance.dismiss = function(): void {
          deferred.reject();
          modalInstance.$element.remove();
          modalInstance.$scope.$destroy();
        };

        // if (options.inputs) angular.extend(inputs, options.inputs);

        if (options.controller) {
          let controllerObjBefore: ng.IControllerService = modalInstance.$scope[options.controllerAs];
          let modalController: ng.IControllerService = this.$controller(
            options.controller, modalInstance, false, options.controllerAs
          );

          if (options.controllerAs && controllerObjBefore) {
            angular.extend(modalController, controllerObjBefore);
          }
        }
        modalInstance.$element.on({ "hide.uk.modal": modalInstance.dismiss });
        self.body.append(modalInstance.$element);
        UIkit.modal(modalInstance.$element).show();
      }, function(errMsg: string): void {
        console.error(errMsg);
        deferred.reject();
      });

    return modalInstance;
  }

  private getTemplate(template: string, templateUrl: string): ng.IPromise<string> {
    let deferred: IDeferred<string> = this.$q.defer();
    if (template) {
      deferred.resolve(template);
    } else if (templateUrl) {
      this.$templateRequest(templateUrl, true)
        .then((template: string): void => {
          deferred.resolve(template);
        }, (error: string): void => {
          deferred.reject(error);
        });
    } else {
      deferred.reject("No template or templateUrl has been specified.");
    }
    return deferred.promise;
  };
}
