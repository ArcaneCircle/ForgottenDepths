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

  let _setup_fn = () => { };
  let _reset_fn = () => { };
  let _update_fn = (now: number, delta: number) =>
  {
    if (key_state.get(D_UP) === KEY_WAS_DOWN)
      selected_option_index = math.max(0, selected_option_index - 1);
    else if (key_state.get(D_DOWN) === KEY_WAS_DOWN)
      selected_option_index = math.min(number_of_options - 1, selected_option_index + 1);
    else if (key_state.get(A_BUTTON) === KEY_WAS_DOWN)
    {
      if (selected_option_index === 0)
      {
        generate_level(9);
        switch_to_scene(Dungeon._scene_id);
      }
    }
  };
  let _render_fn = () =>
  {
    render_text_menu([SCREEN_CENTER_X, SCREEN_CENTER_Y], menu_options, number_of_options, selected_option_index);
  };
  export let _scene_id = get_next_scene_id();
  export let _scene: Scene = { _scene_id, _setup_fn, _reset_fn, _update_fn, _render_fn };
}