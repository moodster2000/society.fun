// charizard.ts
import { SpritesheetData } from './types';

export const arcaninedData: SpritesheetData = {
  frames: {
    down: {
      frame: { x: 0, y: 0, w: 64, h: 64 },
      sourceSize: { w: 64, h: 64 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    down2: {
      frame: { x: 64, y: 0, w: 64, h: 64 },
      sourceSize: { w: 64, h: 64 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    down3: {
      frame: { x: 128, y: 0, w: 64, h: 64 },
      sourceSize: { w: 64, h: 64 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    down4: {
      frame: { x: 192, y: 0, w: 64, h: 64 },
      sourceSize: { w: 64, h: 64 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    left: {
      frame: { x: 0, y: 64, w: 64, h: 64 },
      sourceSize: { w: 64, h: 64 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    left2: {
      frame: { x: 64, y: 64, w: 64, h: 64 },
      sourceSize: { w: 64, h: 64 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    left3: {
      frame: { x: 128, y: 64, w: 64, h: 64 },
      sourceSize: { w: 64, h: 64 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    left4: {
      frame: { x: 192, y: 64, w: 64, h: 64 },
      sourceSize: { w: 64, h: 64 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    right: {
      frame: { x: 0, y: 128, w: 64, h: 64 },
      sourceSize: { w: 64, h: 64 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    right2: {
      frame: { x: 64, y: 128, w: 64, h: 64 },
      sourceSize: { w: 64, h: 64 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    right3: {
      frame: { x: 128, y: 128, w: 64, h: 64 },
      sourceSize: { w: 64, h: 64 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    right4: {
      frame: { x: 192, y: 128, w: 64, h: 64 },
      sourceSize: { w: 64, h: 64 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    up: {
      frame: { x: 0, y: 192, w: 64, h: 64 },
      sourceSize: { w: 64, h: 64 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    up2: {
      frame: { x: 64, y: 192, w: 64, h: 64 },
      sourceSize: { w: 64, h: 64 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    up3: {
      frame: { x: 128, y: 192, w: 64, h: 64 },
      sourceSize: { w: 64, h: 64 },
      spriteSourceSize: { x: 0, y: 0 },
    },
    up4: {
      frame: { x: 192, y: 192, w: 64, h: 64 },
      sourceSize: { w: 64, h: 64 },
      spriteSourceSize: { x: 0, y: 0 },
    },
  },
  meta: {
    scale: '1', // Added scale to help with the 64->32 conversion
  },
  animations: {
    left: ['left', 'left2', 'left3', 'left4'],
    right: ['right', 'right2', 'right3', 'right4'],
    up: ['up', 'up2', 'up3', 'up4'],
    down: ['down', 'down2', 'down3', 'down4'],
  },
};
