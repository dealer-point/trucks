import "textangular/dist/textAngular.css";
import "./templates/offers.scss";

import RoutesConfig        from "./routes";
import offersController    from "./controllers/offers_controller";

import customTextangular   from "./modules/custom_textangular";

export default angular
    .module("app.offer", ["ngSanitize", "angularFileUpload", customTextangular])
    .controller("offersController", offersController)
    .config(RoutesConfig)
    .name;


