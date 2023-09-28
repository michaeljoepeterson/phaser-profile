export const baseGameOptions = {
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,

    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: { y: 200 }
        }
    },
    backgroundColor: '#4488aa',
    canvasStyle: 'position: fixed; top: 0',
}