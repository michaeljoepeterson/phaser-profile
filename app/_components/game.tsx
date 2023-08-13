'use client';

import { useEffect, useRef, useState } from "react";
import { BaseGame } from "../_game/base-game";
import { SceneType, getScene } from "../_models/scenes";

export const Game = () => {
    const gameContainer = useRef<any>();
    const [selectedScene, setselectedScene] = useState<SceneType>(SceneType.pong);
    useEffect(() => {
        if(window){
            const scene = getScene(selectedScene);
            const game = new BaseGame(undefined, scene);
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