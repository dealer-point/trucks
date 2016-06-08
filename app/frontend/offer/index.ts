import "textangular/dist/textAngular.css";
import "./templates/offers.scss";

import customTextangular        from "./modules/custom_textangular";

import RoutesConfig             from "./routes";

import OffersService            from "./services/offers_service";

import offerGeneratorController from "./controllers/offer_generator_controller";
import offersController         from "./controllers/offers_controller";


export default angular
    .module("app.offer", ["ngSanitize", "angularFileUpload", customTextangular])
    .service("Offers", OffersService)
    .controller("offersController", offersController)
    .controller("offerGeneratorController", offerGeneratorController)
    .config(RoutesConfig)
    .name;
