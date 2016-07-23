'use strict';

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function RoutesConfig(
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider): void {
    'use strict';

    $stateProvider
        .state('restricted.events', {
            url: '/events',
            template: '<div ui-view autoscroll="false" />',
            abstract: true
        })
        .state('restricted.events.list', {
            url: '',
            template: require('./templates/events.jade')(),
            controller: 'EventsController',
            controllerAs: '$eventsCtrl'
        });
}
