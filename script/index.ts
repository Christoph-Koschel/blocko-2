import {Grid} from "./grid";
import {Game} from "./game";

class Main {
    public static main(): void {
        const bord = document.getElementById("bord");
        let grid: Grid = new Grid(10, 10, 50);
        if (bord === null) {
            throw "HTML Element not exist";
        }
        grid.connect(bord);
        grid.build();

        let game: Game = new Game();
        game.connect(grid);

        window.addEventListener("keyup", (e) => {
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
    }
}

window.addEventListener("load", () => Main.main());
