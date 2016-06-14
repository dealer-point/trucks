
"use strict";

export default class CardToolsService {

    public static $inject: Array<string> = [];

    private _tools: Array<ICardTool> = [];

    constructor() {
    }

    public add(tool: ICardTool): void {
        this.tools.push(tool);
    }

    public get tools() {
        return this._tools;
    }
}
