import UserService from "./services/user";

angular
    .module("dp.core", [])
    .service('UserService', UserService);

export * from "./services/user";
