import {dispatch} from "../state/redux";
import {Action} from "../state/actions";

export class Keyboard {

    constructor() {

        this.keys = {
            up: 38,
            down: 40,
            left: 37,
            right: 39,
            space: 32,
            enter: 13,
            escape: 27
        };

        this.handledKeys = [];
        this.handledKeys[this.keys.up] = false;
        this.handledKeys[this.keys.down] = false;
        this.handledKeys[this.keys.left] = false;
        this.handledKeys[this.keys.right] = false;
        this.handledKeys[this.keys.space] = false;
        this.handledKeys[this.keys.enter] = false;
        this.handledKeys[this.keys.escape] = false;
    }

    bind() {
        const that = this;
        addEventListener("keyup", function (e) {
            delete that.handledKeys[e.keyCode];
        }, false);

        addEventListener("keydown", function (e) {
            if (that.handledKeys[e.keyCode]) {
                that.handledKeys[e.keyCode] = true;
            }

            switch (e.keyCode) {

                case that.keys.up:
                    dispatch({
                        type: Action.UP,
                    });

                    break;
                case that.keys.down:
                    dispatch({
                        type: Action.DOWN,
                    });

                    break;
                case that.keys.enter:
                    dispatch({
                        type: Action.ENTER,
                    });
                    break;
                case that.keys.left:
                    dispatch({
                        type: Action.LEFT,
                    });
                    break;
                case that.keys.right:
                    dispatch({
                        type: Action.RIGHT,
                    });
                    break;
            }

        }, false);
    }
}
