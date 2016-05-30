
interface IUser extends IModel {
    name: string;
    lastname: string;
    phone: string;
    locale: string;
    activities: Array<string>;
}
