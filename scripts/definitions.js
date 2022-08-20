const TEXTURE_TYPES = {
  TEXTURE_TYPE_FONT: 0,
  TEXTURE_TYPE_SPRITE: 1,
  TEXTURE_TYPE_SPRITE_STRIP: 2,
};

let texture_id = 0;
const TEXTURES = {
  TEXTURE_SINGLE_WHITE_PIXEL: texture_id++,

  TEXTURE_SWORD: texture_id++,
  TEXTURE_SHEILD: texture_id++,
  TEXTURE_STAIR: texture_id++,

  TEXTURE_WHITE_CIRCLE: texture_id++,
  TEXTURE_D_PAD: texture_id++,

  TEXTURE_ROBED_MAN: texture_id++,
  TEXTURE_BANDIT: texture_id++,
  TEXTURE_SKELETON: texture_id++,
  TEXTURE_ZOMBIE: texture_id++,
  TEXTURE_BAT: texture_id++,
  TEXTURE_SNAKE: texture_id++,
  TEXTURE_WALL: texture_id++,
  TEXTURE_FLOOR: texture_id++,
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

let combat_mode = 0;
const GAMESTATE = {
  GAMESTATE_EVENTS: 0,
  GAMESTATE_CURRENT_DUNGEON: 1,
  GAMESTATE_PLAYER: 2,
  GAMESTATE_RESOURCES: 3,
  GAMESTATE_CARD_COLLECTION: 4,
  GAMESTATE_DECK: 5,

  PLAYER_XP: 0,
  PLAYER_LEVEL: 1,
  PLAYER_LEVEL_PENDING: 2,
  PLAYER_HP: 3,
  PLAYER_MAX_HP: 4,
  PLAYER_DEBUFFS: 5,

  CARD_TYPE: 0,
  CARD_LEVEL: 1,
  CARD_ATTACK: 2,
  CARD_DEFENSE: 3,
  CARD_EFFECTS: 4,

  EFFECT_TYPE: 0,
  EFFECT_DESCRIPTION: 1,
  EFFECT_LEVEL: 2,
  EFFECT_APPLY_FUNCTION: 3,

  EFFECT_TYPE_WEAKEN: 0,
  EFFECT_TYPE_CURSE: 1,
  EFFECT_TYPE_BARBS: 2,
  EFFECT_TYPE_ROT: 3,
  EFFECT_TYPE_DRAIN: 4,

  ENEMY_INTENT_TYPE_NONE: 0,
  ENEMY_INTENT_TYPE_ATTACK: 1,
  ENEMY_INTENT_TYPE_BLOCK: 2,
  ENEMY_INTENT_TYPE_FIRE: 3,
  ENEMY_INTENT_TYPE_ICE: 4,
  ENEMY_INTENT_TYPE_HOLY: 5,
  ENEMY_INTENT_TYPE_SHADOW: 6,

  COMBAT_MODE_DRAW: combat_mode++,
  COMBAT_MODE_CARD_SELECT: combat_mode++,
  COMBAT_MODE_ACTION_SELECT: combat_mode++,
  COMBAT_MODE_ATTACK_ACTION: combat_mode++,
  COMBAT_MODE_DEFEND_ACTION: combat_mode++,
  COMBAT_MODE_ENEMY_ATTACKS: combat_mode++,
  COMBAT_MODE_POST_COMBAT: combat_mode++,
  COMBAT_MODE_LOOT_AND_LEAVE: combat_mode++,
};

let enemy_type = 0;
const ENEMY_TYPES = {
  ENEMY_TYPE_SKELETON: enemy_type++,
  ENEMY_TYPE_ZOMBIE: enemy_type++,
  ENEMY_TYPE_SPIRIT: enemy_type++,
  ENEMY_TYPE_BANDIT: enemy_type++,
  ENEMY_TYPE_MAGE: enemy_type++,
  ENEMY_TYPE_LICH: enemy_type++,
};

const PALETTES = {
  PALETTE_PLAYER: 25,

  PALETTE_MAGE: 28,
  PALETTE_CLERIC: 31,
  PALETTE_BANDIT: 34,

  PALETTE_SKELETON: 36,
  PALETTE_ZOMBIE: 38,
  PALETTE_GHOUL: 40,
  PALETTE_BAT: 42,
  PALETTE_BAT: 38,
};
module.exports.DEFINITIONS = { ...TEXTURE_TYPES, ...TEXTURES, ...INTERPOLATION_IDS, ...FONTS, ...GL, ...CONTROLS, ...GAMESTATE, ...ENEMY_TYPES, ...PALETTES };