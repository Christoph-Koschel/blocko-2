"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grid_1 = require("./grid");
var game_1 = require("./game");
var Main = /** @class */ (function () {
    function Main() {
    }
    Main.main = function () {
        var bord = document.getElementById("bord");
        var grid = new grid_1.Grid(10, 10, 50);
        if (bord === null) {
            throw "HTML Element not exist";
        }
        grid.connect(bord);
        grid.build();
        var game = new game_1.Game();
        game.connect(grid);
        window.addEventListener("keyup", function (e) {
            switch (e.keyCode) {
                case 81: // Q
                    console.log("q");
                    game.rotateAntiClock();
                    break;
                case 69: // E
                    console.log("e");
                    game.rotateClock();
                    break;
                case 65: // A
                    console.log("a");
                    game.controlLeft();
                    break;
                case 83: // S
                    console.log("s");
                    game.controlDown();
                    break;
                case 68: // D
                    console.log("d");
                    game.controlRight();
                    break;
            }
        });
        game.start();
    };
    return Main;
}());
window.addEventListener("load", function () { return Main.main(); });
//# sourceMappingURL=index.js.map