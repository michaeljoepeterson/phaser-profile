import Phaser, { Physics } from "phaser";

export class PongScene extends Phaser.Scene {
    create() {
        const shape = this.add.graphics();
        shape.fillStyle(0xffff00, 1);  
        shape.fillRoundedRect(0, 0, 100, 15, 0);
        this.physics.add.existing(shape);
    }

    update(time: number, delta: number): void {
        
    }
}