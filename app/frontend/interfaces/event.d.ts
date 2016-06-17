
interface IEvent extends IModel {
    kind: string;
    status: string;
    description: string;
    created_by: IUser;
    assigned_by: IUser;
    processed_by: IUser;
    created_at: string;
    assigned_at: string;
    processed_at: string;
}
