export class Grid {
    private readonly grid: Array<any>;
    private readonly fieldSize: number;
    private connectedElement: HTMLElement | undefined;
    public readonly width: number;
    public readonly height: number;


    constructor(rows: number, columns: number, size: number = 20) {
        this.fieldSize = size;
        this.width = columns;
        this.height = rows;
        this.grid = [];
        for (let i = 0; i < rows; i++) {
            this.grid.push([]);
            for (let k = 0; k < columns; k++) {
                this.grid[i].push([0]);
            }
        }
    }

    public getFieldSize() {
        return this.fieldSize;
    }

    public connect(element: HTMLElement) {
        this.connectedElement = element;
    }

    public build(): void {
        let gridStr = "";
        for(let i = 0; i < this.grid.length; i++) {
            gridStr += "<div style='display: grid; grid-template-columns: "+ (this.fieldSize +"px ").repeat(this.grid[i].length) +"'>";
            for (let k = 0; k < this.grid[i].length; k++) {
                let elementClass = "";
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

                gridStr += `<div class="${elementClass}" style="width: ${this.fieldSize}px; height: ${this.fieldSize}px">`;
                gridStr += this.grid[i][k];
                gridStr += "</div>";
            }
            gridStr += "</div>";
        }
        if (this.connectedElement !== undefined) {
            this.connectedElement.innerHTML = gridStr;
        }
    }

    public getBlockValue(x: number, y: number): number {
        return this.grid[y][x];
    }

    public updateBlock(x: number, y: number, type: 0 | 1 | 2) {
        this.grid[y][x] = type;
    }
}
