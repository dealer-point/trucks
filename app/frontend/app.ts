"use strict";

import "angular";
// import './style.sass';

// import { User } from './user.ts';
// var greeting: string = 'Greetings';

// var user: User = new User('Igor', 'ikasparov.dev@gmail.com');
import { User } from "./user";

angular
  .module("trucksApp", [])
  .component("user", new User());
