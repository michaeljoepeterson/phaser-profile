import { baseGameOptions } from "./game-options";

export const pongGameOptions = {
    ...baseGameOptions,
    physics: {
        ...baseGameOptions.physics,
        arcade: {
            debug: true,
            gravity: {
                y: 0
            }
        }
    }
}