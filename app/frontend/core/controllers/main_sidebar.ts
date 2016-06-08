// import {MyService} from "./MyService";

interface IScope extends ng.IScope {
    $ctrl: MainSidebarController;
    langSwitcherConfig: Object;
    someMethod(): void;
}

export default class MainSidebarController {

    public static $inject: Array<string> = ["$rootScope", "$scope", "$timeout"];

    public langSwitcherModel: string = "gb";

    public langSwitcherOptions: Array<Object> = [
        { id: 1, title: "English", value: "gb" },
        { id: 2, title: "French",  value: "fr" },
        { id: 3, title: "Chinese", value: "cn" },
        { id: 4, title: "Dutch",   value: "nl" },
        { id: 5, title: "Italian", value: "it" },
        { id: 6, title: "Spanish", value: "es" },
        { id: 7, title: "German",  value: "de" },
        { id: 8, title: "Polish",  value: "pl" }
    ];

    constructor($rootScope: IAppRootScopeService, $scope: IScope, $timeout: ng.ITimeoutService) {

        $scope.$ctrl = this;

        $scope.$on("onLastRepeat", (scope: any, element: any, attrs: any) => {
            $timeout(() => {
                if (!$rootScope.miniSidebarActive) {
                    // activate current section
                    $("#sidebar_main").find(".current_section > a").trigger("click");
                } else {
                    // add tooltips to mini sidebar
                    let tooltipElem: JQuery = $("#sidebar_main").find(".menu_tooltip");
                    tooltipElem.each(() => {
                        let $this: JQuery = $(this);

                        $this.attr("title", $this.find(".menu_title").text());
                        UIkit.tooltip($this, {});
                    });
                }
            });
        });

        $scope.langSwitcherConfig = {
            maxItems: 1,
            render: {
                option: (langData: any, escape: any): string => {
                    return "<div class=\"option\">" +
                        "<i class=\"item-icon flag-" + escape(langData.value).toUpperCase() + "\"></i>" +
                        "<span>" + escape(langData.title) + "</span>" +
                        "</div>";
                },
                item: (langData: any, escape: any): string => {
                    return "<div class=\"item\"><i class=\"item-icon flag-" + escape(langData.value).toUpperCase() + "\"></i></div>";
                }
            },
            valueField: "value",
            labelField: "title",
            searchField: "title",
            create: false,
            onInitialize: (selectize: any): void => {
                $("#lang_switcher").next().children(".selectize-input").find("input").attr("readonly", "true");
            }
        };
    }


    public sections: Object[] = [
        {
            id: 0,
            title: "Welcome",
            icon: "&#xE871;",
            link: "restricted.welcome"
        },
        {
            id: 1,
            title: "Welcome 2",
            icon: "&#xE84D;",
            link: "restricted.welcome2"
        },
        {
            id: 1,
            title: "Companies",
            icon: "&#xE7FC;",
            link: "restricted.companies"
        },
        {
            id: 1,
            title: "Offers",
            icon: "&#xE873;",
            link: "restricted.offers"
        }
    ];


}

// ,
// {
//     id: 1,
//     title: "Mailbox",
//     icon: "&#xE158;",
//     link: "restricted.pages.mailbox"
// },
// {
//     id: 2,
//     title: "Invoices",
//     icon: "&#xE53E;",
//     link: "restricted.pages.invoices.list"
// },
// {
//     id: 7,
//     title: "Forms",
//     icon: "&#xE8D2;",
//     submenu: [
//         {
//             title: "Regular Elements",
//             link: "restricted.forms.regular"
//         },
//         {
//             title: "Advanced Elements",
//             link: "restricted.forms.advanced"
//         },
//         {
//             title: "File Input",
//             link: "restricted.welcome"
//         },
//         {
//             title: "File Upload",
//             link: "restricted.forms.file_upload"
//         },
//         {
//             title: "Validation",
//             link: "restricted.forms.validation"
//         },
//         {
//             title: "Wizard",
//             link: "restricted.forms.wizard"
//         },
//         {
//             title: "CKeditor",
//             link: "restricted.forms.wysiwyg_ckeditor",
//             group: "WYSIWYG Editors"
//         },
//         {
//             title: "TinyMCE",
//             link: "restricted.forms.wysiwyg_tinymce"
//         },
//         {
//             title: "Inline",
//             link: "restricted.forms.wysiwyg_inline"
//         }
//     ]
// },
// {
//     id: 8,
//     title: "Layout",
//     icon: "&#xE8F1;",
//     submenu: [
//         {
//             title: "Top Menu",
//             link: "restricted.layout.top_menu"
//         },
//         {
//             title: "Full Header",
//             link: "restricted.layout.full_header"
//         }
//     ]
// }
