export default angular.module("customTextAngular", ["textAngular"])
    .config(["$provide", function($provide: any): any {
        // this demonstrates how to register a new tool and add it to the default toolbar
        $provide.decorator("taOptions", ["$delegate", function(taOptions: any): any {
            // $delegate is the taOptions we are decorating
            // here we override the default toolbars and classes specified in taOptions.
            taOptions.forceTextAngularSanitize = true; // set false to allow the textAngular-sanitize provider to be replaced
            taOptions.keyMappings = []; // allow customizable keyMappings for specialized key boards or languages
            taOptions.toolbar = [
                ["h1", "h2", "h3", "h4", "h5", "h6", "p", "pre", "quote"],
                [ "bold", "italics", "underline"],
                ["ul", "ol", "redo", "undo", "clear"],
                ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull"]
                // ["html", "insertImage", "insertLink", "wordcount", "charcount"]
            ];
            taOptions.classes = {
                focussed: "focussed",
                toolbar: "textangular-toolbar",
                toolbarGroup: "md-btn-group",
                toolbarButton: "md-btn md-btn-default md-btn-small",
                toolbarButtonActive: "active",
                disabled: "disabled",
                textEditor: "form-control",
                htmlEditor: "form-control"

            };
            return taOptions; // whatever you return will be the taOptions
        }]);
        // this demonstrates changing the classes of the icons for the tools for font-awesome v3.x
        $provide.decorator("taTools", ["$delegate", function(taTools: any): any {
            taTools.quote.iconclass = "uk-icon-quote-right";
            taTools.bold.iconclass = "uk-icon-bold";
            taTools.italics.iconclass = "uk-icon-italic";
            taTools.underline.iconclass = "uk-icon-underline";
            taTools.ul.iconclass = "uk-icon-list-ul";
            taTools.ol.iconclass = "uk-icon-list-ol";
            taTools.undo.iconclass = "uk-icon-undo";
            taTools.redo.iconclass = "uk-icon-repeat";
            taTools.justifyLeft.iconclass = "uk-icon-align-left";
            taTools.justifyRight.iconclass = "uk-icon-align-right";
            taTools.justifyCenter.iconclass = "uk-icon-align-center";
            taTools.justifyFull.iconclass = "uk-icon-align-justify";
            taTools.clear.iconclass = "uk-icon-ban";
            taTools.insertLink.iconclass = "uk-icon-link";
            taTools.insertImage.iconclass = "uk-icon-picture";
            return taTools;
        }]);
    }]).name;
