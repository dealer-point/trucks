import UserService from './services/user';

export default angular
    .module('app.common', [])
    .service('UserService', UserService)
    .name;


