"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlBlock = void 0;
var ControlBlock = /** @class */ (function () {
    function ControlBlock(width) {
        this.types = ["block", "block", "line", "line", "line"];
        console.log(Math.floor(Math.random() * (this.types.length - 1)));
        switch (Math.floor(Math.random() * (this.types.length - 1))) {
            case 0:
            case 1:
                this.type = "block";
                break;
            case 2:
            case 3:
                this.type = "line";
                break;
            default:
                this.type = "block";
                break;
        }
        if (this.type === "line") {
            this.position = [this.random(1, width - 1), 0];
        }
        else {
            this.position = [this.random(0, width), 0];
        }
        this.rotation = "left";
    }
    ControlBlock.prototype.random = function (min, max) {
        var num = Math.random() * (max - min) + min;
        return Math.floor(num);
    };
    ControlBlock.prototype.getPosition = function (type) {
        return (type === "x") ? this.position[0] : this.position[1];
    };
    ControlBlock.prototype.getRotation = function () {
        return this.rotation;
    };
    ControlBlock.prototype.updatePosition = function (_a) {
        var _b = _a.x, x = _b === void 0 ? this.position[0] : _b, _c = _a.y, y = _c === void 0 ? this.position[1] : _c;
        this.position[0] = x;
        this.position[1] = y;
    };
    ControlBlock.prototype.getType = function () {
        return this.type;
    };
    ControlBlock.prototype.rotateAntiClock = function () {
        var result = this.rotation;
        switch (this.rotation) {
            case "top":
                this.rotation = "left";
                break;
            case "right":
                this.rotation = "bottom";
                break;
            case "bottom":
                this.rotation = "right";
                break;
            case "left":
                this.rotation = "top";
                break;
        }
        return result;
    };
    ControlBlock.prototype.rotateClock = function () {
        var result = this.rotation;
        switch (this.rotation) {
            case "top":
                this.rotation = "right";
                break;
            case "right":
                this.rotation = "bottom";
                break;
            case "bottom":
                this.rotation = "left";
                break;
            case "left":
                this.rotation = "top";
                break;
        }
        return result;
    };
    return ControlBlock;
}());
exports.ControlBlock = ControlBlock;
//# sourceMappingURL=controlBlock.js.map