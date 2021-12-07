import Phaser from 'phaser';

import logoImg from '../assets/logo.png';

export class HomeScene extends Phaser.Scene {
  logo: Phaser.GameObjects.Image;

  preload() {
    this.load.image('logo', logoImg);
  }

  create() {
    this.logo = this.add.image(400, 150, 'logo');

    this.tweens.add({
      targets: this.logo,
      y: 450,
      duration: 2000,
      ease: 'Power2',
      yoyo: true,
      loop: -1,
    });
  }
}
