"use strict";

export default class OfferGeneratorController {
    public static $inject: Array<string> = ["$state", "$http", "$rootScope", "FileUploader"];

    public listTitle: string;
    public currentOffer: Array<Object>;
    public availableBlocks: Array<string>;

    constructor(
        private $state: any,
        private $http: ng.IHttpService,
        private $rootScope: IAppRootScopeService,
        private FileUploader: any
    ) {
        $rootScope.headerDoubleHeightActive = true;
        $rootScope.page_full_height = true;
        this.listTitle = "Offer generator";
        this.availableBlocks = ["fullText", "fullImage", "textWithImageLeft", "textWithImageRight", "divider"];

        // block struct:
        // uuid - js block id
        // editMode - js editing var
        // uploader - js image uploader
        // kind - block kind
        // text - block text data
        // image - block uploaded image
        this.currentOffer = [
            {
                uuid: this.generateUUID(),
                editMode: false,
                uploader: new this.FileUploader,
                kind: "textWithImageLeft",
                text: "<p>As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect.</p>",
                image: undefined
            }
        ];
    }

    public save() : void {
        console.log("save new offer (MOVE TO SERVICE)");
    }

    // block actions
    // ==================

    public addBlock(blockKind: string): void {
        let block: Object = {
            uuid: this.generateUUID(),
            editMode: false,
            uploader: undefined,
            kind: blockKind,
            text: undefined,
            image: undefined
        };
        this.initNewBlock(block);
        this.currentOffer.push(block);
    }

    public toggleBlockEditMode(block: Object): void {
        block["editMode"] = (block["editMode"] === true) ? false : true;
    }

    public moveBlock(block: Object, side: string): void {
        if (side == "up" || side == "down") {
            let fromIndex: number = _.findIndex(this.currentOffer, { uuid: block["uuid"] });
            let toIndex: number = fromIndex;
            let el: Object = this.currentOffer[fromIndex];
            if (side == "up") {
                if (fromIndex == 0) toIndex = (this.currentOffer.length - 1);
                else toIndex = fromIndex - 1;
            } else if (side == "down") {
                if (fromIndex == (this.currentOffer.length - 1)) toIndex = 0;
                else toIndex = fromIndex + 1;
            }
            this.currentOffer.splice(toIndex, 0, this.currentOffer.splice(fromIndex, 1)[0]);
        }
    }

    public removeBlock(block: Object): void {
        if (confirm("Are you sure to delete this block?")) {
            _.remove(this.currentOffer, { uuid: block["uuid"] });
        }
    }

    // private meths
    // =============

    // Initialize new block with text/uploader
    private initNewBlock(editableBlock: Object): Object {
        switch (editableBlock["kind"]) {
            case "fullText":
                editableBlock["text"] = "<h2>Heading</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>";
                break;
            case "fullImage":
                editableBlock["uploader"] = new this.FileUploader;
                break;
            case "divider":
                editableBlock["text"] = "<hr/>";
                break;
            case "textWithImageLeft":
                editableBlock["text"] = "<h2>Heading</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>";
                editableBlock["uploader"] = new this.FileUploader;
                break;
            case "textWithImageRight":
                editableBlock["text"] = "<h2>Heading</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>";
                editableBlock["uploader"] = new this.FileUploader;
                break;
            default:
                break;
        }
        return editableBlock;
    }

    // generate uuid for block update/remove/sort
    private generateUUID(): string {
        let date: number = new Date().getTime();
        let uuid: string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c: string) => {
            let r: number = (date + Math.random() * 16) % 16 | 0;
            date = Math.floor(date / 16);
            return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }

}
