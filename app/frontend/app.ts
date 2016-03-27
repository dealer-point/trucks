"use strict";

/*
 import styles
 todo : move to gulp
*/
import "./assets/template/stylesheets/uikit.almost-flat.css";
import "./assets/template/icons/flags/flags.css";
import "./assets/template/stylesheets/main.css";

import RootConfig from "./config";
import RoutesConfig from "./routes";
import common from "./common/module";
import main from "./main/index";

angular
    .module("trucksApp", [
        "ui.router", "ngSanitize", "ngAnimate", "ngRetina", "ncy-angular-breadcrumb",
        common, main])
    .run(RootConfig)
    .config(RoutesConfig);
