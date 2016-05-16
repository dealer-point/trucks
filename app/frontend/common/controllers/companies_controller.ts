"use strict";

// interface IScope extends ng.IScope {

// }

export default class CompaniesController {

    public static $inject: Array<string> = ["$scope"];

    public listTitle: string;

    public companies: Array<Object> = [
      { id: 1, title: "Горстрой", owner: "Екатерина Мещерякова", email: "solowey011@yandex.ru", website: "http://solowey011yandex.ru" },
      { id: 2, title: "Российский алюминий", owner: "Alexander Bulygin", email: "ahds@aol.com", website: "http://ahdsaol.com" },
      { id: 3, title: "УГМК", owner: "Андрей Козицын", email: "akas@aol.com", website: "http://akasaol.com" },
      { id: 4, title: "ГК «ТАИФ»", owner: "Альберт Шигабутдинов", email: "gyu@emails.ru", website: "http://gyuemails.ru" },
      { id: 5, title: "Металлоинвест", owner: "Максим Губиев", email: "workpost@fxt.ru", website: "http://workpostfxt.ru" },
      { id: 6, title: "Группа ГАЗ", owner: "Эрик Эберхардсон", email: "bolinir@googlemail.com", website: "http://bolinirgooglemail.com" }
    ];

    constructor(private $scope: ng.IScope) {
        // todo something
        this.listTitle = "Companies";
    }
}
