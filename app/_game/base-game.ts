import Phaser from "phaser";
import { BaseScene } from "./scenes/base-scene";

export class BaseGame{
    game: Phaser.Game;

    constructor(container?: HTMLElement, scene: Phaser.Scene = new BaseScene()) {
        this.game = new Phaser.Game({
            scale: {
                mode: Phaser.Scale.ENVELOP,
                autoCenter: Phaser.Scale.CENTER_BOTH,
                width: 1920,
                height: 1080,
            },
            physics: {
                default: 'arcade',
                arcade: {
                    debug: true,
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
