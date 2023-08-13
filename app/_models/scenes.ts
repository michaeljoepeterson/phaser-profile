import { BaseScene } from "../_game/scenes/base-scene";
import { PongScene } from "../_game/scenes/pong/pong-scene"
import { ClassType } from "./class-type";
import Phaser from "phaser";

export enum SceneType {
    testScene,
    pong
};

export const getScene = (sceneType: SceneType): ClassType<Phaser.Scene> => {
    switch(sceneType){
        case SceneType.pong:
            return PongScene;
        case SceneType.testScene:
            return BaseScene;
    }
}