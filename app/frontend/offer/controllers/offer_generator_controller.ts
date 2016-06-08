"use strict";

import Offer from "../libs/offer";

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

        this.currentOffer = [
            {
                uuid: this.generateUUID(),
                editMode: false,
                kind: "fullText",
                data: "<h1 style='text-align: center;'>Franz Kafka</h1><h2 style='text-align: center;'>The Metamorphosis</h2>",
                uploader: undefined
            },
            {
                uuid: this.generateUUID(),
                editMode: false,
                kind: "fullImage",
                data: undefined,
                uploader: new this.FileUploader
            },
            {
                uuid: this.generateUUID(),
                editMode: false,
                kind: "divider",
                data: "<hr/>",
                uploader: undefined
            },
            {
                uuid: this.generateUUID(),
                editMode: false,
                kind: "fullText",
                data: "<p>As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was lying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his dome-like brown belly divided into stiff arched segments on top of which the bed quilt could hardly keep in position and was about to slide off completely. His numerous legs, which were pitifully thin compared to the rest of his bulk, waved helplessly before his eyes.</p>",
                uploader: undefined
            },
            {
                uuid: this.generateUUID(),
                editMode: false,
                kind: "textWithImageLeft",
                data: "<p>What has happened to me? he thought. It was no dream. His room, a regular human bedroom, only rather too small, lay quiet between the four familiar walls. Above the table on which a collection of cloth samples was unpacked and spread out-Samsa was a commercial traveler-hung the picture which he had recently cut out of an illustrated magazine and put into a pretty gilt frame. It showed a lady, with a fur cap on and a fur stole, sitting upright and holding out to the spectator a huge fur muff into which the whole of her forearm had vanished! Gregor's eyes turned next to the window, and the overcast sky-one could hear rain drops beating on the window gutter-made him quite melancholy.</p>",
                uploader: new this.FileUploader
            },
            {
                uuid: this.generateUUID(),
                editMode: false,
                kind: "textWithImageRight",
                data: "<p>What about sleeping a little longer and forgetting all this nonsense, he thought, but it could not be done, for he was accustomed to sleep on his right side and in his present condition he could not turn himself over. However violently he forced himself towards his right side he always rolled on to his back again. He tried it at least a hundred times, shutting his eyes to keep from seeing his struggling legs, and only desisted when he began to feel in his side a faint dull ache he had never experienced before.</p>",
                uploader: new this.FileUploader
            },
            {
                uuid: this.generateUUID(),
                editMode: false,
                kind: "fullText",
                data: "<p>Oh God, he thought, what an exhausting job I've picked on! Traveling about day in, day out. It's much more irritating work than doing the actual business in the office, and on top of that there's the trouble of constant traveling, of worrying about train connections, the bed and irregular meals, casual acquaintances that are always new and never become intimate friends. The devil take it all! He felt a slight itching up on his belly; slowly pushed himself on his back nearer to the top of the bed so that he could lift his head more easily; identified the itching place which was surrounded by many small white spots the nature of which he could not understand and made to touch it with a leg, but drew the leg back immediately, for the contact made a cold shiver run through him.</p>",
                upload: undefined
            }
        ];
    }

    public save() : void {
        let offer: Object = {
            name: 'blabla1',
            data: this.currentOffer
        };
        this.$http.post('/api/v1/offers', offer).then(
            (result: any): any => { this.$state.go("restricted.offers"); },
            (errors: any): any => { console.log(errors.data); }
        );
    }

    public addBlock( blockKind: string ): void {
        let block: Object = {
            uuid: this.generateUUID(),
            editMode: false,
            kind: blockKind,
            data: undefined,
            uploader: undefined
        };
        this.initNewBlock(block);
        this.currentOffer.push(block);
    }

    public toggleBlockEditMode( block: Object ): void {
        block["editMode"] = (block["editMode"] === true) ? false : true;
    }

    public removeBlock( block: Object ): void {
        if (confirm("Are you sure to delete this block?")) {
            _.remove(this.currentOffer, { uuid: block["uuid"] });
        }
    }

    private initNewBlock( editableBlock: Object ): Object {
        switch (editableBlock["kind"]) {
            case "fullText":
                editableBlock["data"] = "<h2>Heading</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>";
                break;
            case "fullImage":
                editableBlock["uploader"] = new this.FileUploader;
                break;
            case "divider":
                editableBlock["data"] = "<hr/>";
                break;
            case "textWithImageLeft":
                editableBlock["data"] = "<h2>Heading</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>";
                editableBlock["uploader"] = new this.FileUploader;
                break;
            case "textWithImageRight":
                editableBlock["data"] = "<h2>Heading</h2><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>";
                editableBlock["uploader"] = new this.FileUploader;
                break;
            default:
                break;
        }
        return editableBlock;
    }

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
