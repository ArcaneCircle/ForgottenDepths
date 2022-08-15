import { key_state } from "@input/controls";
import { generate_level } from "@root/level-gen";
import { render_text_menu } from "@root/nodes/text-menu";
import { get_next_scene_id, Scene, switch_to_scene } from "@root/scene";
import { SCREEN_CENTER_X, SCREEN_CENTER_Y } from "@root/screen";
import { math } from "math";
import { Dungeon } from "./03-dungeon";
export namespace LevelSelect
{
  let selected_option_index = 0;
  let number_of_options = 1;
  let menu_options = [
    "continue",
  ];

  let _reset_fn = () =>
  {
    // TODO: update menu options based on game progress
  };
  let _update_fn = (now: number, delta: number) =>
  {
    if (key_state[D_UP] === KEY_WAS_DOWN)
      selected_option_index = math.max(0, selected_option_index - 1);
    else if (key_state[D_DOWN] === KEY_WAS_DOWN)
      selected_option_index = math.min(number_of_options - 1, selected_option_index + 1);
    else if (key_state[A_BUTTON] === KEY_WAS_DOWN)
    {
      if (selected_option_index === 0)
      {
        generate_level(8);
        switch_to_scene(Dungeon._scene_id);
      }
    }
  };
  let _render_fn = () =>
  {
    render_text_menu([SCREEN_CENTER_X, SCREEN_CENTER_Y], menu_options, number_of_options, selected_option_index);
  };
  export let _scene_id = get_next_scene_id();
  export let _scene: Scene = { _scene_id, _reset_fn, _update_fn, _render_fn };
}