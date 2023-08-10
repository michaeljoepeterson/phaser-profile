'use client';

import { useEffect } from "react";
import { BaseGame } from "../_game/base-game";

export const Game = () => {
    useEffect(() => {
        if(window){
            const game = new BaseGame();
        }
    }, []);

    return (
        <>
            Game
        </>
    );
}

export default Game;