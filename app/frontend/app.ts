"use strict";

import "./assets/stylesheets/main.css";

import "angular";

import { User } from "./user";

angular
  .module("trucksApp", [])
  .component("user", new User());
