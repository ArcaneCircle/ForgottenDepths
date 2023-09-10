import { push_text, RIGHT_ALGIN_TEXT } from "../graphics/text";
import { is_touch } from "../input/controls";
import { game_state } from "../game-state";
import { SCREEN_WIDTH } from "../screen";
import { render_panel } from "./panel";

let resource_names = ["bone", "rotting meat", "soul", "human heart", "lich heart"];
export let get_resource_name = (resource_index: number, amount: number = 1) => game_state[GAMESTATE_RESOURCES_GATHERED][resource_index] ? resource_names[resource_index] + (amount > 1 ? "s" : "") : "???";

export let render_resources = (resources: number[]) =>
{
  for (let r = 0, i = 0; r < 5; r++)
  {
    if (game_state[GAMESTATE_RESOURCES_GATHERED][r])
    {
      let y_offset = 40 * i + (i >= 3 && is_touch ? 85 : 0);
      render_panel(SCREEN_WIDTH - 125, 50 + y_offset, 120, 30);
      push_text(get_resource_name(r, resources[r]), SCREEN_WIDTH - 10, 55 + y_offset, RIGHT_ALGIN_TEXT);
      push_text(resources[r], SCREEN_WIDTH - 10, 67 + y_offset, RIGHT_ALGIN_TEXT);
      i++;
    }
  }
};
