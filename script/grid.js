"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
var Grid = /** @class */ (function () {
    function Grid(rows, columns, size) {
        if (size === void 0) { size = 20; }
        this.fieldSize = size;
        this.width = columns;
        this.height = rows;
        this.grid = [];
        for (var i = 0; i < rows; i++) {
            this.grid.push([]);
            for (var k = 0; k < columns; k++) {
                this.grid[i].push([0]);
            }
        }
    }
    Grid.prototype.getFieldSize = function () {
        return this.fieldSize;
    };
    Grid.prototype.connect = function (element) {
        this.connectedElement = element;
    };
    Grid.prototype.build = function () {
        var gridStr = "";
        for (var i = 0; i < this.grid.length; i++) {
            gridStr += "<div style='display: grid; grid-template-columns: " + (this.fieldSize + "px ").repeat(this.grid[i].length) + "'>";
            for (var k = 0; k < this.grid[i].length; k++) {
                var elementClass = "";
                switch (this.grid[i][k].toString()) {
                    case "0":
                        elementClass = "clean";
                        break;
                    case "1":
                        elementClass = "player";
                        break;
                    case "2":
                        elementClass = "lock";
                        break;
                    default:
                        elementClass = "default";
                        break;
                }
                gridStr += "<div class=\"" + elementClass + "\" style=\"width: " + this.fieldSize + "px; height: " + this.fieldSize + "px\">";
                gridStr += this.grid[i][k];
                gridStr += "</div>";
            }
            gridStr += "</div>";
        }
        if (this.connectedElement !== undefined) {
            this.connectedElement.innerHTML = gridStr;
        }
    };
    Grid.prototype.getBlockValue = function (x, y) {
        return this.grid[y][x];
    };
    Grid.prototype.updateBlock = function (x, y, type) {
        this.grid[y][x] = type;
    };
    return Grid;
}());
exports.Grid = Grid;
//# sourceMappingURL=grid.js.map