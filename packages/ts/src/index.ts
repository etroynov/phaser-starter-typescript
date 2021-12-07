import Phaser from 'phaser';
import { HomeScene } from './scenes/Home.ts';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: [HomeScene],
};

// eslint-disable-next-line no-unused-vars
const game = new Phaser.Game(config);
