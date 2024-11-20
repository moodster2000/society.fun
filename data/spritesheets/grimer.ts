// charizard.ts
import { SpritesheetData } from './types';

export const grimerData: SpritesheetData = {
  frames: {
    down: {
      frame: { x: 0, y: 0, w: 160, h: 160 },
      sourceSize: { w: 160, h: 160 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    down2: {
      frame: { x: 160, y: 0, w: 160, h: 160 },
      sourceSize: { w: 160, h: 160 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    up: {
      frame: { x: 0, y: 160, w: 160, h: 160 },
      sourceSize: { w: 160, h: 160 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    up2: {
      frame: { x: 160, y: 160, w: 160, h: 160 },
      sourceSize: { w: 160, h: 160 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    left: {
      frame: { x: 0, y: 320, w: 160, h: 160 },
      sourceSize: { w: 160, h: 160 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    left2: {
      frame: { x: 160, y: 320, w: 160, h: 160 },
      sourceSize: { w: 160, h: 160 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    right: {
      frame: { x: 0, y: 480, w: 160, h: 160 },
      sourceSize: { w: 160, h: 160 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    right2: {
      frame: { x: 160, y: 480, w: 160, h: 160 },
      sourceSize: { w: 160, h: 160 },
      spriteSourceSize: { x: 0, y: 0 },
    },
  },
  meta: {
    scale: '2.25', // Scale down to roughly match other characters (160 -> 32)
  },
  animations: {
    down: ['down', 'down2'],
    up: ['up', 'up2'],
    left: ['left', 'left2'],
    right: ['right', 'right2'],
  },
};
