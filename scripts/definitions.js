const TEXTURE_TYPES = {
  TEXTURE_TYPE_FONT: 0,
  TEXTURE_TYPE_SPRITE: 1,
  TEXTURE_TYPE_SPRITE_STRIP: 2,
};

let texture_id = 0;
const TEXTURES = {
  TEXTURE_SINGLE_WHITE_PIXEL: texture_id++,
  TEXTURE_WHITE_CIRCLE: texture_id++,
  TEXTURE_D_PAD: texture_id++,
  TEXTURE_ROBED_MAN_0: texture_id++,
  TEXTURE_ROBED_MAN_1: texture_id++,
  TEXTURE_BANDIT_0: texture_id++,
  TEXTURE_BANDIT_1: texture_id++,
  TEXTURE_SKELETON_0: texture_id++,
  TEXTURE_SKELETON_1: texture_id++,
  TEXTURE_ZOMBIE_0: texture_id++,
  TEXTURE_ZOMBIE_1: texture_id++,
  TEXTURE_WALL_0: texture_id++,
  TEXTURE_WALL_1: texture_id++,
  TEXTURE_WALL_2: texture_id++,
  TEXTURE_WALL_3: texture_id++,
  TEXTURE_FLOOR_0: texture_id++,
  TEXTURE_FLOOR_1: texture_id++,
  TEXTURE_FLOOR_2: texture_id++,
};

const FONTS = {
  TEXT_ALIGN_LEFT: 0,
  TEXT_ALIGN_CENTER: 1,
  TEXT_ALIGN_RIGHT: 2,

  FONT_NORMAL: 200,
  FONT_SMALL: 400,
};

let interp_id = 0;
const INTERPOLATION_IDS = {
  INTERP_SCENE_TRANSITION: interp_id++,
  INTERP_CAMERA_MOVEMENT: interp_id++,
  INTERP_PLAYER_MOVEMENT: interp_id++,
};

const GL = {
  GL_TEXTURE2D: 3553,
  GL_TEXTURE0: 33984,
  GL_TEXTURE1: 33985,
  GL_BYTE: 5120,
  GL_UNSIGNED_BYTE: 5121,
  GL_SHORT: 5122,
  GL_UNSIGNED_SHORT: 5123,
  GL_FLOAT: 5126
};

const CONTROLS = {
  D_LEFT: 0,
  D_UP: 1,
  D_RIGHT: 2,
  D_DOWN: 3,
  A_BUTTON: 4,
  B_BUTTON: 5,

  KEY_IS_UP: 0,
  KEY_WAS_DOWN: 1,
  KEY_IS_DOWN: 2,
};

const INVENTORY = {
  INV_WEAPON: 0,
  INV_STAFF: 1,
  INV_HEAD: 2,
  INV_NECK: 3,
  INV_RING: 4,
};

const GAMESTATE = {
  GAMESTATE_EVENTS: 0,
  GAMESTATE_CURRENT_DUNGEON: 1,
};

module.exports.DEFINITIONS = { ...TEXTURE_TYPES, ...TEXTURES, ...INTERPOLATION_IDS, ...FONTS, ...GL, ...CONTROLS, ...INVENTORY, ...GAMESTATE };