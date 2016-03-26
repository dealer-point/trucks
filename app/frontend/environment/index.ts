"use strict";

import variables from "./services/variables";
import sidebarPrimaryToggle from "./directives/sidebar_primary_toggle";
import sidebarPrimary from "./directives/sidebar_primary";
import customScrollbar from "./directives/custom_scrollbar";
import documentEvents from "./directives/document_events";
import mainSearchShow from "./directives/main_search_show";
import mainSearchHide from "./directives/main_search_hide";
import mainSidebar from "./controllers/main_sidebar";
import "./modules/selectize";

export default angular.module("environment", ["selectize"])
    .service("variables", variables)
    .directive("sidebarPrimaryToggle", sidebarPrimaryToggle)
    .directive("sidebarPrimary", sidebarPrimary)
    .directive("customScrollbar", customScrollbar)
    .directive("documentEvents", documentEvents)
    .directive("mainSearchShow", mainSearchShow)
    .directive("mainSearchHide", mainSearchHide)
    .controller("mainSidebar", mainSidebar)
    .name;
