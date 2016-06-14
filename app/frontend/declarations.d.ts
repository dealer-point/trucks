/// <reference path='interfaces/user.d.ts' />
/// <reference path='interfaces/company.d.ts' />

// Declarerequire function
declare function require(string: string): Function;

/*
  Declare 'Waves' module
*/
interface IWaves {
    init(): void;
    attach(elements: string, classes: Array<string>): void;
}
declare var Waves: IWaves;

interface IFastClick {
    attach(element: HTMLElement): void;
}
declare var FastClick: IFastClick;

interface IModernizr {
    touch: boolean;
}
declare var Modernizr: IModernizr;

interface IAppRootScopeService extends ng.IRootScopeService {
    currentUser:                 CurrentUser;

    mainSearchActive:            boolean;
    headerDoubleHeightActive:    boolean;
    toBarActive:                 boolean;
    topMenuActive:               boolean;
    pageHeadingActive:           boolean;
    page_full_height:            boolean;
    sidebar_secondary:           boolean;
    secondarySidebarHiddenLarge: boolean;
    fullHeaderActive:            boolean;
    footerActive:                boolean;
    primarySidebarActive:        boolean;
    hide_content_sidebar:        boolean;
    pageLoading:                 boolean;
    pageLoaded:                  boolean;
    Modernizr:                   IModernizr;
    largeScreen:                 boolean;
    primarySidebarOpen:          boolean;
    appInitialized:              boolean;
    styleSwitcherActive:         boolean;
    secondarySidebarActive:      boolean;
    miniSidebarActive:           boolean;
    menuAccordionMode:           boolean;
    primarySidebarHiding:        boolean;
    $state:                      ng.ui.IStateProvider;
    $stateParams:                ng.ui.IStateParamsService;

    content_preloader_show(style?: string, container?: JQuery): void;
    content_preloader_hide(style?: string, container?: JQuery): void;
}

interface CurrentUser extends IUser {
    logout(): ng.IHttpPromise<CurrentUser>;
}




interface IModel {
  id: number;
}

/* CORE DECLARATION TYPES SECTION */

interface IResponseCollection<T> {
  data: Array<T>;
  meta: any;
}

interface IResponseObject<T> {
  object: T;
  meta: any;
}

interface IResponseObjectErrors<T> {
    errors: Object;
    meta: any;
}
