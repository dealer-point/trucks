
import EventsService from './services/events.service';
import EventService from './services/event.service';
import EventsController from './controllers/events.controller';
import FastAddEventController from './controllers/fast_add_event.controller';

import Routes from './routes';

angular
    .module('events', [])
    .service('EventsService', EventsService)
    .service('EventService', EventService)
    .controller('EventsController', EventsController)
    .controller('FastAddEventController', FastAddEventController)
    .config(Routes);
