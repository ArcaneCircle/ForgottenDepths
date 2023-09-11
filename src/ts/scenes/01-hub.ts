import { push_text, SMALL_FONT_AND_CENTERED_TEXT } from "../graphics/text";
import { A_PRESSED, controls_used, DOWN_PRESSED, UP_PRESSED } from "../input/controls";
import { game_state } from "../game-state";
import { render_resources } from "../nodes/resources";
import { render_text_menu } from "../nodes/text-menu";
import { get_next_scene_id, push_scene, Scene, switch_to_scene } from "../scene";
import { SCREEN_CENTER_X, SCREEN_CENTER_Y, SCREEN_HEIGHT, SCREEN_WIDTH } from "../screen";
import { change_track, toggle_mute_music } from "../zzfx";
import { number_sort, safe_add, safe_subtract } from "../math/math";
import { MainMenu } from "./00-main-menu";
import { Craft } from "./01a-craft";
import { ManageDeck } from "./01b-manaage-deck";
import { LevelSelect } from "./02-level-select";
import { Dialog } from "./20-dialog";
export namespace Hub
{
  let selected_option_index: number;
  let number_of_options = 5;

  let menu_options = [
    "descend",
    "craft cards",
    "manage deck",
    "mute music",
    "save and quit"
  ];
  let _reset_fn = () =>
  {
    controls_used(D_UP, D_DOWN, A_BUTTON);
    selected_option_index = 0;
    change_track(0);
    game_state[GAMESTATE_COMBAT] = [0, 0, 0];
  };
  let _update_fn = (delta: number) =>
  {
    if (game_state[GAMESTATE_EVENTS][1] === EVENT_PENDING)
    {
      Dialog._push_dialog_text("you have fallen in battle and|have awakened back at the entrance.");
      push_scene(Dialog._scene_id);
      game_state[GAMESTATE_EVENTS][1] = EVENT_DONE;
    }
    else if (game_state[GAMESTATE_EVENTS][2] === EVENT_PENDING)
    {
      Dialog._push_dialog_text("you have defeated a lich and|taken its heart as your own.");
      Dialog._push_dialog_text("there would be no shame in stopping now|surely the horrors deeper down would|only spell diaster");
      Dialog._push_dialog_text("(challenge floors unlock)");
      push_scene(Dialog._scene_id);
      game_state[GAMESTATE_EVENTS][2] = EVENT_DONE;
    }

    if (UP_PRESSED)
      selected_option_index = safe_subtract(selected_option_index);
    else if (DOWN_PRESSED)
      selected_option_index = safe_add(number_of_options - 1, selected_option_index);
    else if (A_PRESSED)
    {
      if (selected_option_index === 0)
        switch_to_scene(LevelSelect._scene_id);
      else if (selected_option_index === 1)
        switch_to_scene(Craft._scene_id);
      else if (selected_option_index === 2)
        switch_to_scene(ManageDeck._scene_id);
      else if (selected_option_index === 3)
      {
        if (toggle_mute_music())
          menu_options[3] = "enable music";
        else
          menu_options[3] = "mute music";
      }
      else if (selected_option_index === 4)
        switch_to_scene(MainMenu._scene_id);
    }
  };
  let _render_fn = () =>
  {
    push_text("catacombs entrance", SCREEN_WIDTH - 5, 5, { _scale: 3, _align: TEXT_ALIGN_RIGHT });
    render_text_menu(SCREEN_CENTER_X, SCREEN_CENTER_Y - 50, menu_options, number_of_options, selected_option_index);
    render_resources(game_state[GAMESTATE_RESOURCES]);
  };

  export let _scene_id = get_next_scene_id();
  export let _scene: Scene = { _scene_id, _reset_fn, _update_fn, _render_fn };
}
