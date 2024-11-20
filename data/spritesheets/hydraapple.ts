// charizard.ts
import { SpritesheetData } from './types';

export const hypdraapppleData: SpritesheetData = {
  frames: {
    down: {
      frame: { x: 0, y: 0, w: 128, h: 128 },
      sourceSize: { w: 128, h: 128 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    down2: {
      frame: { x: 128, y: 0, w: 128, h: 128 },
      sourceSize: { w: 128, h: 128 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    up: {
      frame: { x: 0, y: 128, w: 128, h: 128 },
      sourceSize: { w: 128, h: 128 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    up2: {
      frame: { x: 128, y: 128, w: 128, h: 128 },
      sourceSize: { w: 128, h: 128 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    left: {
      frame: { x: 0, y: 256, w: 128, h: 128 },
      sourceSize: { w: 128, h: 128 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    left2: {
      frame: { x: 128, y: 256, w: 128, h: 128 },
      sourceSize: { w: 128, h: 128 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    right: {
      frame: { x: 0, y: 384, w: 128, h: 128 },
      sourceSize: { w: 128, h: 128 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    right2: {
      frame: { x: 128, y: 384, w: 128, h: 128 },
      sourceSize: { w: 128, h: 128 },
      spriteSourceSize: { x: 0, y: 0 },
    },
  },
  meta: {
    scale: '1.5', // Added scale to help with the 64->32 conversion
  },
  animations: {
    left: ['left', 'left2', 'left3', 'left4'],
    right: ['right', 'right2', 'right3', 'right4'],
    up: ['up', 'up2', 'up3', 'up4'],
    down: ['down', 'down2', 'down3', 'down4'],
  },
};
