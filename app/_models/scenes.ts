import { BaseScene } from "../_game/scenes/base-scene";
import { PongScene } from "../_game/scenes/pong/pong-scene"
import { ClassType } from "./class-type";
import Phaser from "phaser";
import { GameType } from "./game-type";

export const getScene = (gameType: GameType): ClassType<Phaser.Scene> => {
    switch(gameType){
        case GameType.pong:
            return PongScene;
        case GameType.testScene:
            return BaseScene;
    }
}