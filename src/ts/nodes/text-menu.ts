import { push_text } from "@graphics/text";
import { V2 } from "@math/vector";
import { emit_particles, ParticleParameters } from "@root/particle-system";

let fire_particle: ParticleParameters = {
  _position: [0, 0],
  _velocity: [0, -45],
  _velocity_variation: [14, 40],
  _size_begin: 0.35,
  _size_end: 0,
  _size_variation: 0.5,
  _colour_begin: [120, 170, 220, 1],
  _colour_end: [255, 255, 255, 0.25],
  _lifetime: 500
};

export let render_text_menu = (position: V2, menu_options: string[], number_of_options: number, selected_option_index: number) =>
{
  let selected_text = menu_options[selected_option_index];
  let selected_text_length = selected_text.length * 16 / 2 + 10;

  fire_particle._position[1] = position[1] + 10 + 35 * selected_option_index;

  fire_particle._position[0] = position[0] - selected_text_length;
  emit_particles(fire_particle, 5);

  fire_particle._position[0] = position[0] + selected_text_length - 3;
  emit_particles(fire_particle, 5);

  for (let option_index = 0; option_index < number_of_options; option_index++)
    push_text(menu_options[option_index], position[0], position[1] + 35 * option_index, { _align: TEXT_ALIGN_CENTER, _scale: 2 });
};