"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var controlBlock_1 = require("./controlBlock");
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.connect = function (grid) {
        this.grid = grid;
    };
    Game.prototype.start = function () {
        if (this.grid === undefined) {
            throw "No grid connected";
        }
        this.addBlock();
    };
    Game.prototype.controlLeft = function () {
        if (this.grid === undefined) {
            throw "No grid connected";
        }
        if (this.controlBlock === undefined) {
            throw "No control block exist";
        }
        switch (this.controlBlock.getType()) {
            case "block":
                if (this.controlBlock.getPosition("x") === 0 ||
                    this.grid.getBlockValue(this.controlBlock.getPosition("x") - 1, this.controlBlock.getPosition("y")) === 2) {
                    return;
                }
                else {
                    this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 0);
                    this.controlBlock.updatePosition({
                        x: this.controlBlock.getPosition("x") - 1
                    });
                    this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 1);
                }
                break;
            case "line":
                switch (this.controlBlock.getRotation()) {
                    case "top":
                    case "bottom":
                        if (this.controlBlock.getPosition("x") === 0 ||
                            this.grid.getBlockValue(this.controlBlock.getPosition("x") - 1, this.controlBlock.getPosition("y")) === 2 ||
                            this.grid.getBlockValue(this.controlBlock.getPosition("x") - 1, this.controlBlock.getPosition("y") - 1) === 2 ||
                            this.grid.getBlockValue(this.controlBlock.getPosition("x") - 1, this.controlBlock.getPosition("y") + 1) === 2) {
                            return;
                        }
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 0);
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") - 1, 0);
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") + 1, 0);
                        this.controlBlock.updatePosition({
                            x: this.controlBlock.getPosition("x") - 1
                        });
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 1);
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") - 1, 1);
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") + 1, 1);
                        break;
                    case "right":
                    case "left":
                        if (this.controlBlock.getPosition("x") === 1 ||
                            this.grid.getBlockValue(this.controlBlock.getPosition("x") - 2, this.controlBlock.getPosition("y")) === 2) {
                            return;
                        }
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 0);
                        this.grid.updateBlock(this.controlBlock.getPosition("x") - 1, this.controlBlock.getPosition("y"), 0);
                        if (this.controlBlock.getPosition("x") !== (this.grid.width - 1)) {
                            this.grid.updateBlock(this.controlBlock.getPosition("x") + 1, this.controlBlock.getPosition("y"), 0);
                        }
                        this.controlBlock.updatePosition({
                            x: this.controlBlock.getPosition("x") - 1
                        });
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 1);
                        this.grid.updateBlock(this.controlBlock.getPosition("x") - 1, this.controlBlock.getPosition("y"), 1);
                        this.grid.updateBlock(this.controlBlock.getPosition("x") + 1, this.controlBlock.getPosition("y"), 1);
                        break;
                }
                break;
        }
        this.update();
    };
    Game.prototype.controlRight = function () {
        if (this.grid === undefined) {
            throw "No grid connected";
        }
        if (this.controlBlock === undefined) {
            throw "No control block exist";
        }
        switch (this.controlBlock.getType()) {
            case "block":
                if (this.controlBlock.getPosition("x") === this.grid.width ||
                    this.grid.getBlockValue(this.controlBlock.getPosition("x") + 1, this.controlBlock.getPosition("y")) === 2) {
                    return;
                }
                this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 0);
                this.controlBlock.updatePosition({
                    x: this.controlBlock.getPosition("x") + 1
                });
                this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 1);
                break;
            case "line":
                switch (this.controlBlock.getRotation()) {
                    case "bottom":
                    case "top":
                        if (this.controlBlock.getPosition("x") === this.grid.width - 1 ||
                            this.grid.getBlockValue(this.controlBlock.getPosition("x") + 1, this.controlBlock.getPosition("y")) === 2 ||
                            this.grid.getBlockValue(this.controlBlock.getPosition("x") + 1, this.controlBlock.getPosition("y") - 1) === 2 ||
                            this.grid.getBlockValue(this.controlBlock.getPosition("x") + 1, this.controlBlock.getPosition("y") + 1) === 2) {
                            return;
                        }
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 0);
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") - 1, 0);
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") + 1, 0);
                        this.controlBlock.updatePosition({
                            x: this.controlBlock.getPosition("x") + 1
                        });
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 1);
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") - 1, 1);
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") + 1, 1);
                        break;
                    case "left":
                    case "right":
                        if (this.controlBlock.getPosition("x") === this.grid.width - 2 ||
                            this.grid.getBlockValue(this.controlBlock.getPosition("x") + 2, this.controlBlock.getPosition("y")) === 2) {
                            return;
                        }
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 0);
                        this.grid.updateBlock(this.controlBlock.getPosition("x") - 1, this.controlBlock.getPosition("y"), 0);
                        this.grid.updateBlock(this.controlBlock.getPosition("x") + 1, this.controlBlock.getPosition("y"), 0);
                        this.controlBlock.updatePosition({
                            x: this.controlBlock.getPosition("x") + 1
                        });
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 1);
                        this.grid.updateBlock(this.controlBlock.getPosition("x") - 1, this.controlBlock.getPosition("y"), 1);
                        this.grid.updateBlock(this.controlBlock.getPosition("x") + 1, this.controlBlock.getPosition("y"), 1);
                        break;
                }
                break;
        }
        this.update();
    };
    Game.prototype.controlDown = function () {
        if (this.grid === undefined) {
            throw "No grid connected";
        }
        if (this.controlBlock === undefined) {
            throw "No control block exist";
        }
        switch (this.controlBlock.getType()) {
            case "line":
                switch (this.controlBlock.getRotation()) {
                    case "left":
                    case "right":
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 0);
                        this.grid.updateBlock(this.controlBlock.getPosition("x") - 1, this.controlBlock.getPosition("y"), 0);
                        this.grid.updateBlock(this.controlBlock.getPosition("x") + 1, this.controlBlock.getPosition("y"), 0);
                        this.controlBlock.updatePosition({
                            y: this.controlBlock.getPosition("y") + 1
                        });
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 1);
                        this.grid.updateBlock(this.controlBlock.getPosition("x") - 1, this.controlBlock.getPosition("y"), 1);
                        this.grid.updateBlock(this.controlBlock.getPosition("x") + 1, this.controlBlock.getPosition("y"), 1);
                        break;
                    case "bottom":
                    case "top":
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 0);
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") - 1, 0);
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") + 1, 0);
                        this.controlBlock.updatePosition({
                            y: this.controlBlock.getPosition("y") + 1
                        });
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 1);
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") - 1, 1);
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") + 1, 1);
                        break;
                }
                break;
            case "block":
                this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 0);
                this.controlBlock.updatePosition({
                    y: this.controlBlock.getPosition("y") + 1
                });
                this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 1);
                break;
        }
        this.update();
    };
    Game.prototype.rotateClock = function () {
        if (this.controlBlock === undefined) {
            throw "No control block exist";
        }
        if (this.grid === undefined) {
            throw "No grid connected";
        }
        var lastRotatePosition = this.controlBlock.rotateClock();
        this.updateControlBlockPosition(lastRotatePosition);
        this.update();
    };
    Game.prototype.rotateAntiClock = function () {
        if (this.controlBlock === undefined) {
            throw "No control block exist";
        }
        if (this.grid === undefined) {
            throw "No grid connected";
        }
        var lastRotatePosition = this.controlBlock.rotateAntiClock();
        this.updateControlBlockPosition(lastRotatePosition);
        this.update();
    };
    Game.prototype.updateControlBlockPosition = function (lastRotation) {
        if (this.controlBlock === undefined) {
            throw "No control block exist";
        }
        if (this.grid === undefined) {
            throw "No grid connected";
        }
        switch (this.controlBlock.getType()) {
            case "line":
                switch (this.controlBlock.getRotation()) {
                    case "top":
                    case "bottom":
                        this.grid.updateBlock(this.controlBlock.getPosition("x") - 1, this.controlBlock.getPosition("y"), 0);
                        this.grid.updateBlock(this.controlBlock.getPosition("x") + 1, this.controlBlock.getPosition("y"), 0);
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") + 1, 1);
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") - 1, 1);
                        break;
                    case "right":
                    case "left":
                        if (this.controlBlock.getPosition("x") === (this.grid.width - 1)) {
                            this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") - 1, 0);
                            this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") + 1, 0);
                            this.controlLeft();
                        }
                        else if (this.controlBlock.getPosition("x") === 0) {
                            this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") - 1, 0);
                            this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") + 1, 0);
                            this.controlRight();
                        }
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") + 1, 0);
                        this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") - 1, 0);
                        this.grid.updateBlock(this.controlBlock.getPosition("x") - 1, this.controlBlock.getPosition("y"), 1);
                        this.grid.updateBlock(this.controlBlock.getPosition("x") + 1, this.controlBlock.getPosition("y"), 1);
                        break;
                }
                break;
        }
    };
    Game.prototype.addBlock = function () {
        if (this.grid === undefined) {
            throw "No grid connected";
        }
        this.controlBlock = new controlBlock_1.ControlBlock(this.grid.width);
        console.log(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), this.controlBlock.getType());
        switch (this.controlBlock.getType()) {
            case "block":
                this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 1);
                break;
            case "line":
                if ((this.controlBlock.getPosition("x") - 1) < 0) {
                    this.controlBlock.updatePosition({
                        x: 1
                    });
                }
                else if ((this.controlBlock.getPosition("x") + 1) >= this.grid.width) {
                    this.controlBlock.updatePosition({
                        x: this.grid.width - 2
                    });
                }
                this.grid.updateBlock(this.controlBlock.getPosition("x") - 1, this.controlBlock.getPosition("y"), 1);
                this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 1);
                this.grid.updateBlock(this.controlBlock.getPosition("x") + 1, this.controlBlock.getPosition("y"), 1);
                break;
        }
        this.grid.build();
    };
    Game.prototype.update = function () {
        if (this.grid === undefined) {
            throw "No grid connected";
        }
        if (this.controlBlock === undefined) {
            throw "No control block exist";
        }
        switch (this.controlBlock.getType()) {
            case "block":
                if (this.controlBlock.getPosition("y") === (this.grid.height - 1) ||
                    this.grid.getBlockValue(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") + 1) === 2) {
                    this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 2);
                    this.controlBlock = new controlBlock_1.ControlBlock(this.grid.width);
                }
                break;
            case "line":
                switch (this.controlBlock.getRotation()) {
                    case "left":
                    case "right":
                        if (this.controlBlock.getPosition("y") === (this.grid.height - 1) ||
                            this.grid.getBlockValue(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") + 1) === 2 ||
                            this.grid.getBlockValue(this.controlBlock.getPosition("x") - 1, this.controlBlock.getPosition("y") + 1) === 2 ||
                            this.grid.getBlockValue(this.controlBlock.getPosition("x") + 1, this.controlBlock.getPosition("y") + 1) === 2) {
                            this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 2);
                            this.grid.updateBlock(this.controlBlock.getPosition("x") - 1, this.controlBlock.getPosition("y"), 2);
                            this.grid.updateBlock(this.controlBlock.getPosition("x") + 1, this.controlBlock.getPosition("y"), 2);
                            this.controlBlock = new controlBlock_1.ControlBlock(this.grid.width);
                        }
                        break;
                    case "bottom":
                    case "top":
                        if ((this.controlBlock.getPosition("y") + 1) === (this.grid.height - 1) ||
                            this.grid.getBlockValue(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") + 2) === 2) {
                            this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y"), 2);
                            this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") - 1, 2);
                            this.grid.updateBlock(this.controlBlock.getPosition("x"), this.controlBlock.getPosition("y") + 1, 2);
                            this.controlBlock = new controlBlock_1.ControlBlock(this.grid.width);
                        }
                        break;
                }
                break;
        }
        this.grid.build();
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map