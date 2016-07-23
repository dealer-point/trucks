
RootConfig.$inject = [
    '$rootScope',
    '$state',
    '$stateParams',
    '$http',
    '$window',
    '$timeout',
    'variables',
    'preloaders'
];

export default function RootConfig(
    $rootScope: IAppRootScopeService,
    $state: ng.ui.IStateProvider,
    $stateParams: ng.ui.IStateParamsService,
    $http: ng.IHttpService,
    $window: Window,
    $timeout: ng.ITimeoutService,
    variables: any,
    preloaders: any): void {
    'use strict';

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.$on('$stateChangeSuccess', () => {

        let animateParams: Object = {
            scrollTop: 0
        };

        function PerparePage(): void {
            $rootScope.pageLoading = false;
            $($window).resize();
        }

        function PreparePlugins(): void {
            $rootScope.pageLoaded = $rootScope.appInitialized = true;
            Waves.attach('.md-btn-wave,.md-fab-wave', ['waves-button']);
            Waves.attach('.md-btn-wave-light,.md-fab-wave-light', [
                'waves-button',
                'waves-light'
            ]);
        }

        $('html, body').animate(animateParams, 200);
        $timeout(PerparePage, 300);
        $timeout(PreparePlugins, 600);

    });

    $rootScope.$on('$stateChangeStart', (
        event: angular.IAngularEvent,
        toState: any,
        toParams: any,
        fromState: any,
        fromParams: any) => {

        // main search
        $rootScope.mainSearchActive = false;
        // single card
        $rootScope.headerDoubleHeightActive = false;
        // top bar
        $rootScope.toBarActive = false;
        // page heading
        $rootScope.pageHeadingActive = false;
        // top menu
        $rootScope.topMenuActive = false;
        // full header
        $rootScope.fullHeaderActive = false;
        // full height
        $rootScope.page_full_height = false;
        // secondary sidebar
        $rootScope.sidebar_secondary = false;
        $rootScope.secondarySidebarHiddenLarge = false;
        // footer
        $rootScope.footerActive = false;

        if ($($window).width() < 1220) {
            // hide primary sidebar
            $rootScope.primarySidebarActive = false;
            $rootScope.hide_content_sidebar = false;
        }
        if (!toParams.hasOwnProperty('hidePreloader')) {
            $rootScope.pageLoading = true;
            $rootScope.pageLoaded = false;
        }
    });

    FastClick.attach(document.body);
    $rootScope.Modernizr = Modernizr;

    let w: any = angular.element($window);

    $rootScope.largeScreen = w.width() >= 1220;

    w.on('resize', () => {
        return $rootScope.largeScreen = w.width() >= 1220;
    });

    // show/hide main menu on page load
    $rootScope.primarySidebarOpen = false; // = ($rootScope.largeScreen) ? true : false;

    $rootScope.pageLoading = true;

    Waves.init();
}
