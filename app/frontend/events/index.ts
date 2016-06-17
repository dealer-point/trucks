
import EventsService from "./services/events.service";
import EventsController from "./controllers/events.controller";

import Routes from "./routes";

angular
    .module("events", [])
    .service("EventsService", EventsService)
    .controller("EventsController", EventsController)
    .config(Routes)
    .run((): void => {
        console.log("Module \"Events\" initialization completed");
    });
