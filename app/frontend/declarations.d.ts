// Declarerequire function
declare function require(string: string): Function;

/*
  Declare 'Waves' module
*/
interface IWaves {
    init(): void;
    attach(elements: string, classes: string[]): void;
}
declare var Waves: IWaves;



interface IFastClick {
    attach(element: HTMLElement): void;
}
declare var FastClick: IFastClick;


interface IModernizr {
}
declare var Modernizr: IModernizr;



interface IAppRootScopeService extends ng.IRootScopeService {
    mainSearchActive: boolean;
    headerDoubleHeightActive: boolean;
    toBarActive: boolean;
    topMenuActive: boolean;
    pageHeadingActive: boolean;
    page_full_height: boolean;
    sidebar_secondary: boolean;
    secondarySidebarHiddenLarge: boolean;
    fullHeaderActive: boolean;
    footerActive: boolean;
    primarySidebarActive: boolean;
    hide_content_sidebar: boolean;
    pageLoading: boolean;
    pageLoaded: boolean;
    Modernizr: IModernizr;
    largeScreen: boolean;
    primarySidebarOpen: boolean;
    appInitialized: boolean;

    menuAccordionMode: boolean;

    primarySidebarHiding: boolean;

    $state: ng.ui.IStateProvider;
    $stateParams: ng.ui.IStateParamsService;
}
