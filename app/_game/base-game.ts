import Phaser from "phaser";
import { BaseScene } from "./scenes/base-scene";

export class BaseGame{
    game: Phaser.Game;

    constructor() {
        this.game = new Phaser.Game({
            width: 800,
            height: 800,
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 200 }
                }
            },
            scene: BaseScene
        });
    }
}
