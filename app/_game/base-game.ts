import Phaser from "phaser";
import { BaseScene } from "./scenes/base-scene";
import { ClassType } from "../_models/class-type";

export class BaseGame{
    game: Phaser.Game;

    constructor(container?: HTMLElement, scene: ClassType<Phaser.Scene> = BaseScene) {
        console.log(container);
        this.game = new Phaser.Game({
            scale: {
                mode: Phaser.Scale.RESIZE,
                autoCenter: Phaser.Scale.CENTER_BOTH,
                width: 1920,
                height: 1080,
            },
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 200 }
                }
            },
            backgroundColor: '#4488aa',
            parent: container,
            canvasStyle: 'position: fixed; top: 0',
            scene,
        });
    }
}
