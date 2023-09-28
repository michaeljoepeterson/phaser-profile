import { baseGameOptions } from "./game-options";
import { GameType } from "./game-type";
import { pongGameOptions } from "./pong-game-options";

export const getGameOptions = (gameType: GameType): any => {
    switch(gameType){
        case GameType.pong:
            return pongGameOptions;
        case GameType.testScene:
            return baseGameOptions;
    }
};