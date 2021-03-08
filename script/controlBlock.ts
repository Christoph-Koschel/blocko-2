export class ControlBlock {
    private readonly type: "block" | "line";
    private readonly types: string[] = ["block", "block", "line", "line", "line"];
    private readonly position: number[];
    private rotation: "top" | "left" | "bottom" | "right";

    constructor(width: number) {
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
        } else {
            this.position = [this.random(0, width), 0];
        }
        this.rotation = "left";
    }

    private random(min: number, max: number): number {
        let num = Math.random() * (max - min) + min;
        return Math.floor(num);
    }

    public getPosition(type: "x" | "y"): number {
        return (type === "x") ? this.position[0] : this.position[1];
    }

    public getRotation(): "top" | "left" | "bottom" | "right" {
        return this.rotation;
    }

    public updatePosition({
                              x = this.position[0],
                              y = this.position[1]
                          }): void {
        this.position[0] = x;
        this.position[1] = y;
    }

    public getType(): "block" | "line" {
        return this.type;
    }

    public rotateAntiClock(): "top" | "left" | "bottom" | "right" {
        let result = this.rotation;
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
    }

    public rotateClock(): "top" | "left" | "bottom" | "right" {
        let result = this.rotation;
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
    }
}
