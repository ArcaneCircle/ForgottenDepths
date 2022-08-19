type TextureDefinition = [number, number[], number, number, number, number];

export let texture_definitions: TextureDefinition[] = [
    [TEXTURE_TYPE_SPRITE, [TEXTURE_SINGLE_WHITE_PIXEL], 2, 1, 1, 1],
    [TEXTURE_TYPE_FONT, [FONT_NORMAL], 0, 0, 8, 8],
    [TEXTURE_TYPE_FONT, [FONT_SMALL], 0, 8, 5, 5],
    [TEXTURE_TYPE_SPRITE_STRIP, [TEXTURE_SWORD, TEXTURE_SHEILD, TEXTURE_FIRE, TEXTURE_ICE, TEXTURE_HOLY, TEXTURE_SHADOW, TEXTURE_STAIR], 296, 8, 8, 8],
    [TEXTURE_TYPE_SPRITE_STRIP,
        [TEXTURE_WHITE_CIRCLE, TEXTURE_D_PAD, TEXTURE_ROBED_MAN_0, TEXTURE_BANDIT_0, TEXTURE_SKELETON_0, TEXTURE_ZOMBIE_0, TEXTURE_WALL_0, TEXTURE_WALL_1, TEXTURE_WALL_2, TEXTURE_FLOOR_0, TEXTURE_FLOOR_1, TEXTURE_FLOOR_2],
        0, 16, 16, 16],
];
