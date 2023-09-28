import Phaser, { Physics } from "phaser";

export class PongScene extends Phaser.Scene {
    topWall?: Phaser.GameObjects.Graphics;
    bottomWall?: Phaser.GameObjects.Graphics;
    playerPaddle?: Phaser.GameObjects.Graphics;
    opponentPaddle?: Phaser.GameObjects.Graphics;
    ball?: Phaser.GameObjects.Graphics;
    shape1: any;

    constructor(){
        super();
    }

    create() {
        const { width, height } = this.sys.game.canvas;
        // this.shape1 = this.add.graphics();
        // this.shape1.fillStyle(0xffff00, 1);  
        // this.shape1.fillRoundedRect(0, 0, width - 500, 15, 0);
        // const rBody = this.shape1 as Phaser.Types.Physics.Arcade.GameObjectWithDynamicBody;

        // this.physics.add.existing(this.shape1);

        // rBody.body.setSize(width - 500, 15);
        // rBody.body.velocity.x = 100;
        // rBody.body.velocity.y = 200;
        // rBody.body.collideWorldBounds = true;


        this.topWall = this.add.graphics();
        this.topWall.fillStyle(0xffff00, 1);  
        this.topWall.fillRoundedRect(0, 0, width, 15, 0);
        this.physics.add.existing(this.topWall);
        const topWallBody = this.topWall as Phaser.Types.Physics.Arcade.GameObjectWithDynamicBody;
        topWallBody.body.setSize(width, 15, true);
        topWallBody.body.collideWorldBounds = true;

        this.bottomWall = this.add.graphics();
        this.bottomWall.fillStyle(0xffff00, 1);  
        this.bottomWall.fillRoundedRect(0, 0, width, 15, 0);
        this.physics.add.existing(this.bottomWall);
        const bottomWallBody = this.topWall as Phaser.Types.Physics.Arcade.GameObjectWithDynamicBody;
        bottomWallBody.body.setSize(width, 15, true);
        bottomWallBody.body.collideWorldBounds = true;

        this.ball = this.add.graphics();
        this.ball.fillStyle(0x00000, 1);  
        this.ball.fillCircle(0, 0, 50);
        this.physics.add.existing(this.ball);
        const circleBody = this.ball as Phaser.Types.Physics.Arcade.GameObjectWithDynamicBody;
        circleBody.body.setSize(50, 50, true);
        circleBody.body.velocity.x = 1;
        //circleBody.body.velocity.y = 400;
        circleBody.body.collideWorldBounds = true;
    }

    update(time: number, delta: number): void {
        if(this.ball && this.topWall && this.bottomWall){
            console.log("update")
            this.physics.world.collide(this.ball, [this.topWall, this.bottomWall]);
        }
    }
}