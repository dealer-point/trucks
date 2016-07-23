
'use strict';

export default class User implements IUser {
    public id: number;
    public name: string;
    public lastname: string;
    public title: string;
    public phone: string;
    public locale: string;
    public activities: Array<string>;
}
