import { push_text } from "@graphics/text";
import { render_percentage_bar } from "./percent-bar";

export let render_player_status = () =>
{
  push_text("hp", 5, 5, { _font: FONT_SMALL });
  render_percentage_bar(20, 5, 100, 5, 10, 10, 0xFF0000FF);
  push_text("mp", 5, 15, { _font: FONT_SMALL });
  render_percentage_bar(20, 15, 100, 5, 5, 5, 0xFFFF5555);
  push_text("xp", 5, 25, { _font: FONT_SMALL });
  render_percentage_bar(20, 25, 100, 5, 0, 100, 0xFF00FFFF);
};