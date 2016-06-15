
"use strict";

export default class CardTools {

    public static $inject: Array<string> = [];

    private _tools: Array<ICardTool> = [];

    // constructor() { }

    public add(tool: ICardTool): void {
        this.tools.push(tool);
    }

    public get tools(): Array<ICardTool> {
        return this._tools;
    }
}
