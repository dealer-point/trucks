
import './style.scss';

import RoutesConfig from './routes';

import CurrentUser from './services/current_user_service';
import UsersService from './services/users.service';

import ActivityDirective from './directives/activity';

import MainSidebar from './controllers/main_sidebar';
import MainHeader from './controllers/main_header_controller';
import welcomeController from './controllers/welcome_controller';

export default angular
    .module('core', [])
    .service('CurrentUser', CurrentUser)
    .service('UsersService', UsersService)
    .directive('activity', ActivityDirective)
    .controller('MainSidebar', MainSidebar)
    .controller('MainHeader', MainHeader)
    .controller('welcomeController', welcomeController)
    .run(['CurrentUser', (currentUser: CurrentUser): void => {
        currentUser.load().then((): void => {
            console.log(currentUser, currentUser.can('role:create'));
        });
    }])
    .config(RoutesConfig)
    .name;
