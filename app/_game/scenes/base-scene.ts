import Phaser, { Physics } from "phaser";

export class BaseScene extends Phaser.Scene{
    shape1: any;
    shape2: any;

    preload (){
        //this.load.image('sky', 'assets/clouds.png');
    }

    create (){
        //this.add.image(400, 300, 'sky');
        this.shape1 = this.add.graphics();
        this.shape1.fillStyle(0xffff00, 1);  
        this.shape1.fillRoundedRect(0, 0, 700, 15, 0);
        const rBody = this.shape1 as Phaser.Types.Physics.Arcade.GameObjectWithDynamicBody;

        this.physics.add.existing(this.shape1);

        rBody.body.setSize(700, 15);
        rBody.body.velocity.x = 100;
        rBody.body.velocity.y = 100;
        rBody.body.bounce.x = 1;
        rBody.body.bounce.y = 1;
        rBody.body.collideWorldBounds = true;

        const particles = this.add.particles(0, 0, 'red', {
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        this.shape2 = this.add.graphics();
        this.shape2.fillStyle(0xffff00, 1);  
        this.shape2.fillRoundedRect(0, 0, 100, 15, 0);
        this.physics.add.existing(this.shape2);
        // cast to dynamic body for ts errors
        const circleBody = this.shape2 as Phaser.Types.Physics.Arcade.GameObjectWithDynamicBody;
        circleBody.body.setSize(100, 15);
        circleBody.body.velocity.x = 100;
        circleBody.body.velocity.y = 100;
        circleBody.body.bounce.x = 1;
        circleBody.body.bounce.y = 1;
        circleBody.body.collideWorldBounds = true;

        const logo = this.physics.add.image(400, 100, 'logo');
    
        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);
        logo.body.onCollide = true;
    
        particles.startFollow(logo);
    }

    update(time: number, delta: number): void {
        this.physics.world.collide(this.shape1, [this.shape2])
    }
}