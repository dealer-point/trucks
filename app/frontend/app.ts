"use strict";

import "./assets/stylesheets/main.css";

import "angular";

import { User } from "./user";

angular
  .module("trucksApp", [])
  .component("user", new User());

// this way not recomended
// declare var Waves: any;

Waves.init();
