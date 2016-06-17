
"use strict";

export default class Event implements IEvent {
    public id: number;
    public kind: string;
    public status: string;
    public description: string;
    public created_by: IUser;
    public assigned_by: IUser;
    public processed_by: IUser;
    public created_at: string;
    public assigned_at: string;
    public processed_at: string;
}
