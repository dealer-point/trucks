
export default class Preloaders
{

    public static $inject: string[] = ["$rootScope", "$timeout"];

    constructor($rootScope: IAppRootScopeService, $timeout: ng.ITimeoutService)
    {
        $rootScope.content_preloader_show = (style?: string, container?: JQuery): void => {
            let $body: JQuery = $("body");
            if (!$body.find(".content-preloader").length) {
                let isHighDensity: boolean = ((window.matchMedia &&
                    (window.matchMedia("only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only" +
                        "screen and (min-resolution: 48.8dpcm)").matches ||
                        window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and" +
                            "(-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3)," +
                            "only screen and (min-device-pixel-ratio: 1.3)").matches)) ||
                    (window.devicePixelRatio && window.devicePixelRatio > 1.3));
                let imageDensity: string = isHighDensity ? "@2x" : "";

                let preloaderContent: string = (typeof style !== "undefined" && style === "regular")
                    ? "<img src=\"assets/img/spinners/spinner" + imageDensity + ".gif\" alt=\"\" width=\"32\" height=\"32\">"
                    : "<div class=\"md-preloader\"><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"32\" width=\"32\"" +
                    "viewbox=\"0 0 75 75\"><circle cx=\"37.5\" cy=\"37.5\" r=\"33.5\" stroke-width=\"8\"/></svg></div>";

                let thisContainer: JQuery = (typeof container !== "undefined") ? container : $body;

                thisContainer.append("<div class=\"content-preloader\">" + preloaderContent + "</div>");
                $timeout((): void => {
                    $(".content-preloader").addClass("preloader-active");
                });
            }
            $rootScope.content_preloader_hide = (style?: string, container?: JQuery): void => {
                let $body: JQuery = $("body");
                if ($body.find(".content-preloader").length) {
                    // hide preloader
                    $(".content-preloader").removeClass("preloader-active");
                    // remove preloader
                    $timeout((): void => {
                        $(".content-preloader").remove();
                    }, 500);
                }
            };
        };
    }

}
