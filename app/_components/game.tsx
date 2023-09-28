'use client';

import { useEffect, useRef, useState } from "react";
import { BaseGame } from "../_game/base-game";
import { getScene } from "../_models/scenes";
import { GameType } from "../_models/game-type";
import { getGameOptions } from "../_models/get-game-options";

export const Game = () => {
    const gameContainer = useRef<any>();
    const [selectedScene, setselectedScene] = useState<GameType>(GameType.pong);

    useEffect(() => {
        if(window){
            const scene = getScene(selectedScene);
            const options = getGameOptions(selectedScene);
            const game = new BaseGame(undefined, new scene(), options);
        }
    }, [gameContainer]);

    return (
        <>
            Game
            <div ref={gameContainer}></div>
        </>
    );
}

export default Game;