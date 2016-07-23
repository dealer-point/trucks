// import {MyService} from './MyService';

interface IScope extends ng.IScope {
    $ctrl: MainSidebarController;
    langSwitcherConfig: Object;
    someMethod(): void;
}

export default class MainSidebarController {

    public static $inject: Array<string> = [
        '$rootScope',
        '$scope',
        '$timeout'
    ];

    public langSwitcherModel: string = 'gb';

    public langSwitcherOptions: Array<Object> = [
        { id: 1, title: 'English', value: 'gb' },
        { id: 2, title: 'French',  value: 'fr' },
        { id: 3, title: 'Chinese', value: 'cn' },
        { id: 4, title: 'Dutch',   value: 'nl' },
        { id: 5, title: 'Italian', value: 'it' },
        { id: 6, title: 'Spanish', value: 'es' },
        { id: 7, title: 'German',  value: 'de' },
        { id: 8, title: 'Polish',  value: 'pl' }
    ];

    constructor(
        $rootScope: IAppRootScopeService,
        $scope: IScope,
        $timeout: ng.ITimeoutService) {

        $scope.$ctrl = this;

        $scope.$on('onLastRepeat', (scope: any, element: any, attrs: any) => {
            $timeout(() => {
                if (!$rootScope.miniSidebarActive) {
                    // activate current section
                    $('#sidebar_main').find('.current_section > a').trigger('click');
                } else {
                    // add tooltips to mini sidebar
                    let tooltipElem: JQuery = $('#sidebar_main').find('.menu_tooltip');
                    tooltipElem.each(() => {
                        let $this: JQuery = $(this);

                        $this.attr('title', $this.find('.menu_title').text());
                        UIkit.tooltip($this, {});
                    });
                }
            });
        });

        $scope.langSwitcherConfig = {
            maxItems: 1,
            render: {
                option: (langData: any, escape: any): string => {
                    return `
                        <div class="option">
                            <i class="item-icon flag-${escape(langData.value).toUpperCase()}"></i>
                            <span>${escape(langData.title)}</span>
                        </div>`;
                },
                item: (langData: any, escape: any): string => {
                    return `
                        <div class="item">
                            <i class="item-icon flag-${escape(langData.value).toUpperCase()}"></i>
                        </div>`;
                }
            },
            valueField: 'value',
            labelField: 'title',
            searchField: 'title',
            create: false,
            onInitialize: (selectize: any): void => {
                $('#lang_switcher')
                    .next()
                    .children('.selectize-input')
                    .find('input')
                    .attr('readonly', 'true');
            }
        };
    }


    public sections: Array<Object> = [
        {
            id: 0,
            title: 'Welcome',
            icon: '&#xE871;',
            link: 'restricted.welcome'
        },
        {
            id: 1,
            title: 'Welcome 2',
            icon: '&#xE84D;',
            link: 'restricted.welcome2'
        },
        {
            id: 1,
            title: 'Companies',
            icon: '&#xE7FC;',
            link: 'restricted.companies.list'
        },
        {
            id: 1,
            title: 'Events',
            icon: '&#xE878;',
            link: 'restricted.events.list'
        }
    ];
}
