import Phaser from "phaser";
import { BaseScene } from "./scenes/base-scene";
import { baseGameOptions } from "../_models/game-options";

export class BaseGame{
    game: Phaser.Game;

    constructor(container?: HTMLElement, scene: Phaser.Scene = new BaseScene(), options: Phaser.Types.Core.GameConfig = baseGameOptions) {
        this.game = new Phaser.Game({
            ...options,
            parent: container,
            scene,
        });
    }
}
