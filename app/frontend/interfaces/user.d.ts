
interface IUser extends IModel {
    name: string;
    lastname: string;
    title: string;
    phone: string;
    locale: string;
    activities: Array<string>;
}
