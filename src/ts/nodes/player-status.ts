import { RED } from "../graphics/colour";
import { push_text } from "../graphics/text";
import { game_state } from "../game-state";
import { render_percentage_bar } from "./percent-bar";

export let render_player_status = () =>
{
  push_text("hp", 5, 8, { _font: FONT_SMALL });
  render_percentage_bar(20, 5, 150, 14, game_state[GAMESTATE_PLAYER][PLAYER_HP], game_state[GAMESTATE_PLAYER][PLAYER_MAX_HP], RED);
};
