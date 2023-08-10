'use client';

import { useEffect, useRef } from "react";
import { BaseGame } from "../_game/base-game";

export const Game = () => {
    const gameContainer = useRef<any>();
    useEffect(() => {
        if(window){
            const game = new BaseGame();
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