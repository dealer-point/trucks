"use strict";

import "./style.scss";
import "ng-dialog/css/ngDialog.css";
// import "ng-dialog/css/ngDialog-theme-default.css";

// services
import variables  from "./services/variables";
import preloaders from "./services/preloaders";

// directives
import sidebarPrimaryToggle from "./directives/sidebar_primary_toggle";
import sidebarPrimary       from "./directives/sidebar_primary";
import customScrollbar      from "./directives/custom_scrollbar";
import documentEvents       from "./directives/document_events";
import mainSearchShow       from "./directives/main_search_show";
import mainSearchHide       from "./directives/main_search_hide";
import mdInput              from "./directives/md_input";
import mdPreloader          from "./directives/md_preloader";
import textareaAutosize     from "./directives/textarea_autosize";

// controllers
// import mainSidebar       from "./controllers/main_sidebar";
// import mainHeader        from "./controllers/main_header_controller";
// import welcomeController from "./controllers/welcome_controller";

// modules
import "./modules/selectize";

export default angular
    .module("common", ["selectize", "ngDialog"])
    .service("variables",              variables)
    .service("preloaders",             preloaders)
    .directive("sidebarPrimaryToggle", sidebarPrimaryToggle)
    .directive("sidebarPrimary",       sidebarPrimary)
    .directive("customScrollbar",      customScrollbar)
    .directive("documentEvents",       documentEvents)
    .directive("mainSearchShow",       mainSearchShow)
    .directive("mainSearchHide",       mainSearchHide)
    .directive("mdInput",              mdInput)
    .directive("mdPreloader",          mdPreloader)
    .directive("textareaAutosize", textareaAutosize)
    .name;
    // .controller("mainSidebar",         mainSidebar)
    // .controller("mainHeader",          mainHeader)
    // .controller("welcomeController",   welcomeController)
