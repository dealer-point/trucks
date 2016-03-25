"use strict";

import variables from "./services/variables";
import sidebarPrimaryToggle from "./directives/sidebar_primary_toggle";
import sidebarPrimary from "./directives/sidebar_primary";
import customScrollbar from "./directives/custom_scrollbar";
import documentEvents from "./directives/document_events";
import mainSidebar from "./controllers/main_sidebar";

export default angular.module("environment", [])
    .service("variables", variables)
    .directive("sidebarPrimaryToggle", sidebarPrimaryToggle)
    .directive("sidebarPrimary", sidebarPrimary)
    .directive("customScrollbar", customScrollbar)
    .directive("documentEvents", documentEvents)
    .controller("mainSidebar", mainSidebar)
    .name;
