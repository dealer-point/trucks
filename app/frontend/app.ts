"use strict";

/*
 import styles
 todo : move to gulp
*/
import "./assets/template/stylesheets/uikit.almost-flat.css";
import "./assets/template/icons/flags/flags.css";
import "./assets/template/stylesheets/main.css";

// import { User } from "./user/index";

import RootConfig from "./config";
import RoutesConfig from "./routes";
import environment from "./environment/index";

angular
    .module("trucksApp", ["ui.router", "ngSanitize", "ngAnimate", "ngRetina", "ncy-angular-breadcrumb", environment])
    .run(RootConfig)
    .config(RoutesConfig);
