
interface IJqueryStatic extends JQueryStatic {
    bez(array: Array<number>): string;
}

export default class Variables {
    // header__main_height
    public headerMainHeight: number;
    // easing_swiftOut
    public easingSwiftOut: Array<number>;
    // bez_easing_swiftOut
    public bezEasingSwiftOut: string;

    constructor() {
        this.headerMainHeight = 48;
        this.easingSwiftOut = [0.4, 0, 0.2, 1];
        this.bezEasingSwiftOut = (<IJqueryStatic>$).bez([0.4, 0, 0.2, 1]);
    }
}
