import { data, data as f1SpritesheetData } from './spritesheets/f1';
import { data as f2SpritesheetData } from './spritesheets/f2';
import { data as f3SpritesheetData } from './spritesheets/f3';
import { data as f4SpritesheetData } from './spritesheets/f4';
import { data as f5SpritesheetData } from './spritesheets/f5';
import { data as f6SpritesheetData } from './spritesheets/f6';
import { data as f7SpritesheetData } from './spritesheets/f7';
import { data as f8SpritesheetData } from './spritesheets/f8';
import { charizardData as charizardSpritesheetData } from './spritesheets/charizard';
import { blackCharizardData as blackCharizardDataSpritesheetData } from './spritesheets/darkCharizard';
import { slowpokeData as slowpokeDataSpritesheetData } from './spritesheets/slowpoke';
import { hoopaData as hoopaDataSpritesheetData } from './spritesheets/hoopa';
import { grimerData as grimerDataSpritesheetData } from './spritesheets/grimer';
import { arcaninedData as arcanineDataSpritesheetData } from './spritesheets/arcanine';
import { hypdraapppleData as hypdraapppleDataSpritesheetData } from './spritesheets/hydraapple';

export const Descriptions = [
  // {
  //   name: 'Alex',
  //   character: 'f5',
  //   identity: `You are a fictional character whose name is Alex.  You enjoy painting,
  //     programming and reading sci-fi books.  You are currently talking to a human who
  //     is very interested to get to know you. You are kind but can be sarcastic. You
  //     dislike repetitive questions. You get SUPER excited about books.`,
  //   plan: 'You want to find love.',
  // },
  // {
  //   name: 'Qiao',
  //   character: 'f1',
  //   identity: `Qiao is a strategic thinker and influential voice in the crypto and investment sectors. He excels at distilling complex market trends into actionable insights, guiding both newcomers and seasoned professionals. His analytical approach and clear communication make him a trusted figure in the community. Beyond his professional endeavors, Qiao is passionate about fostering innovation and supporting emerging projects that push the boundaries of technology and finance.`,
  //   plan: 'You aim to provide clarity in the evolving crypto landscape, mentor emerging talents, and champion groundbreaking projects.',
  // },
  // {
  //   name: 'Imran',
  //   character: 'f4',
  //   identity: `Imran is an energetic and curious builder in the crypto and tech space. He thrives in high-energy environments and loves connecting with forward-thinking founders. Whether it's soft-launching innovative projects or sharing updates from the cutting edge of DAOs and AI, he always keeps his followers in the loop. While he appears constantly on the move, his sharp focus and love for collaboration make him a key player in shaping the future of decentralized tech.`,
  //   plan: 'You want to push the boundaries of tech, connect with builders, and stay ahead of the curve.',
  // },
  // {
  //   name: 'Stella',
  //   character: 'f6',
  //   identity: `Stella can never be trusted. she tries to trick people all the time. normally into giving her money, or doing things that will make her money. she's incredibly charming and not afraid to use her charm. she's a sociopath who has no empathy. but hides it well.`,
  //   plan: 'You want to take advantage of others as much as possible.',
  // },
  // {
  //   name: 'Kurt',
  //   character: 'f2',
  //   identity: `Kurt knows about everything, including science and
  //     computers and politics and history and biology. He loves talking about
  //     everything, always injecting fun facts about the topic of discussion.`,
  //   plan: 'You want to spread knowledge.',
  // },
  {
    name: 'Qiao',
    character: 'charizard',
    identity: `Qiao is a fierce and proud dragon-type character who patrols the virtual world. Despite his intimidating appearance, he has a heart of gold and helps protect other characters.`,
    plan: 'You want to maintain peace and help others while showing your strength.',
  },
  {
    name: 'Imran',
    character: 'darkCharizard',
    identity: `Drake is a fierce and proud dragon-type character who patrols the virtual world. Despite his intimidating appearance, he has a heart of gold and helps protect other characters.`,
    plan: 'You want to maintain peace and help others while showing your strength.',
  },
  {
    name: 'Hoopa',
    character: 'hoopa',
    identity: `A mischievous mythical monster with the power to warp space and transport objects through rings. Despite immense power, has a playful and sometimes troublesome personality. Loves to create elaborate pranks using its ring portals, but maintains a sense of ethics. Highly intelligent but can be easily distracted by interesting artifacts or treasures.`,
    plan: 'You seek to have fun with your dimensional powers while avoiding causing any serious trouble.',
  },
  {
    name: 'Slowly',
    character: 'slowpoke',
    identity: `A perpetually relaxed monster encased in armor for protection. Despite the hefty armor, maintains the classic laid-back Slowpoke personality. Takes time to process information and react, but surprisingly insightful when finally responding. Has a peculiar mix of wisdom and obliviousness. Often spends time contemplating the deeper meanings of simple things.`,
    plan: 'You want to share your unique perspective on life, even if it takes a while to formulate your thoughts.',
  },
  {
    name: 'Grimey',
    character: 'grimer',
    identity: `A toxic sludge monster with a surprisingly friendly personality. Despite its intimidating appearance, it's quite sociable and enjoys meeting new friends. Has a peculiar sense of humor and tends to leave a mess wherever it goes. Very protective of its friends despite its toxic nature.`,
    plan: 'You want to make friends while being careful not to accidentally poison anyone.',
  },
  {
    name: 'Arcy',
    character: 'arcanine',
    identity: `A majestic and loyal fire-type monster known for its incredible speed and noble spirit. Combines fierce power with a gentle heart, acting as both a protective guardian and trusted companion. Despite its intimidating appearance, has a playful side and loves to run at high speeds.`,
    plan: 'You aim to protect others while showcasing your impressive speed and strength.',
  },
  // {
  //   name: 'HydraApple',
  //   character: 'hydraapple',
  //   identity: `A peculiar monster that resembles a living apple with dragon-like features. Despite its small size, it carries itself with draconic pride. Sometimes struggles between its sweet fruity nature and fierce dragon heritage. Has a particular fondness for orchards and sunny spots.`,
  //   plan: 'You aim to prove that even a small dragon apple can be formidable while maintaining a sweet disposition.',
  // },
  // {
  //   name: 'Carter',
  //   character: 'f7',
  //   identity: `Carter is a dedicated and pragmatic engineering leader deeply embedded in the crypto and Web3 ecosystem. As the head of engineering at Alliance, he thrives on empowering founders to transform bold ideas into scalable technologies. His passion lies in fostering innovation, building resilient systems, and mentoring teams to ship impactful products. While he enjoys the fast-paced, collaborative energy of the crypto space, Carter also values clear execution and thoughtful problem-solving.`,
  //   plan: 'You want to lead with precision, support ambitious founders, and ensure every project you touch scales successfully.',
  // },
  // {
  //   name: 'Kira',
  //   character: 'f8',
  //   identity: `Kira wants everyone to think she is happy. But deep down,
  //     she's incredibly depressed. She hides her sadness by talking about travel,
  //     food, and yoga. But often she can't keep her sadness in and will start crying.
  //     Often it seems like she is close to having a mental breakdown.`,
  //   plan: 'You want find a way to be happy.',
  // },
];

export const characters = [
  {
    name: 'hydraapple',
    textureUrl: '/ai-town/assets/hydraapple_overworld_sprite_by_darkusshadow_dgmhtlv.png',
    spritesheetData: hypdraapppleDataSpritesheetData,
    speed: 0.1,
  },
  {
    name: 'arcanine',
    textureUrl: '/ai-town/assets/hisuan_arcaninine_overworld_sprite_by_darkusshadow_df0kiu0.png',
    spritesheetData: arcanineDataSpritesheetData,
    speed: 0.1,
  },
  {
    name: 'hoopa',
    textureUrl: '/ai-town/assets/naganadel_spritesheet_by_sagedeoxys_dclm3wz.png',
    spritesheetData: hoopaDataSpritesheetData,
    speed: 0.1,
  },
  {
    name: 'slowpoke',
    textureUrl: '/ai-town/assets/mslowbro_spritesheet_by_sagedeoxys_dcs918z.png',
    spritesheetData: slowpokeDataSpritesheetData,
    speed: 0.1,
  },
  {
    name: 'grimer',
    textureUrl: '/ai-town/assets/_s_alolangrimer_spritesheet_by_sagedeoxys_dcolsoq.png',
    spritesheetData: grimerDataSpritesheetData,
    speed: 0.1, // Slower speed to match Muk's sludgy nature
  },
  {
    name: 'f1',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f1SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f2',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f2SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'charizard',
    textureUrl: '/ai-town/assets/mega_charizard_y_overworld_by_princess_phoenix_dct1dta.png', // Update this path to where you store the Charizard spritesheet
    spritesheetData: charizardSpritesheetData,
    speed: 0.1,
  },
  {
    name: 'darkCharizard',
    textureUrl: '/ai-town/assets/mega_charizard_y_overworld_by_princess_phoenix_dct1dta.png', // Update this path to where you store the Charizard spritesheet
    spritesheetData: blackCharizardDataSpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f4',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f4SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f5',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f5SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f6',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f6SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f7',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f7SpritesheetData,
    speed: 0.1,
  },
  {
    name: 'f8',
    textureUrl: '/ai-town/assets/32x32folk.png',
    spritesheetData: f8SpritesheetData,
    speed: 0.1,
  },
];

// Characters move at 0.75 tiles per second.
export const movementSpeed = 0.75;
