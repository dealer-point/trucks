"use strict";

import "./assets/template/stylesheets/uikit.almost-flat.css";
import "./assets/template/icons/flags/flags.css";
import "./assets/template/stylesheets/main.css";

import common from './common/module';

import { User } from "./user/index";

angular
  .module("trucksApp", [common])
  .component("user", new User());

// this way not recomended
// declare var Waves: any;

Waves.init();
