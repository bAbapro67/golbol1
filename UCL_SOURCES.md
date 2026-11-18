# UCL game update — 30 September 2026

This is a fictional 16-club knockout game tournament, using all the game's clubs, not a reproduction of UEFA's actual season or competition format.

## Selected current squads

- Arsenal: Bukayo Saka, Declan Rice, Martin Ødegaard, David Raya. [Official squad](https://www.arsenal.com/men/players/k), [2026 club update](https://www.arsenal.com/news/rice-retains-arsenal-player-of-the-season-award-a09NT8r5MujS).
- Chelsea: Cole Palmer, Morgan Rogers, João Pedro, Emiliano Martínez. [Official summer 2026 transfers](https://www.chelseafc.com/en/news/article/summer-transfers-2026-all-the-chelsea-ins-outs-and-new-contracts-so-far), [Rogers number](https://www.chelseafc.com/en/news/article/morgan-rogers-chelsea-squad-number-confirmed), [Palmer](https://www.chelseafc.com/en/teams/profile/cole-palmer). Transfer announcements supersede stale cached profiles: Enzo Fernández and Robert Sánchez are not used.
- Inter: Lautaro Martínez, Marcus Thuram, Nicolò Barella, Josep Martínez. [Official forwards](https://www.inter.it/en/teams/first-team/strikers), [Barella](https://www.inter.it/en/teams/first-team/player/nicolo-barella), [current goalkeepers](https://www.inter.it/en/teams/first-team/goalkeepers). The goalkeeper list supersedes older Sommer squad lists.
- Atlético Madrid: Julián Álvarez, Álex Baena, Giuliano Simeone, Jan Oblak. [Official 2026/27 squad](https://www.atleticodemadrid.com/jugadores-primer-equipo/?r=1).

Each club has three selectable outfield players and one keeper, matching the existing game. Ratings and traits are fictional game balancing. Portraits are newly generated illustrated likenesses, not official player photographs. New shirt designs and small monogram crests are drawn game adaptations.

## User references

Original files remain unchanged. Copies: `assets/ucl/logo.jpg`, `assets/ucl/bracket-reference.jpg`, `assets/ucl/trophy-reference.jpg`. The live bracket recreates the two-sided path from round of 16 to the central final. The former generated trophy cutout remains archived as `assets/ucl/trophy.png`. The live bracket and ceremony now use a photograph of the actual trophy at `assets/trophies/champions.png`; see [Trophy photograph sources](TROPHY_SOURCES.md).

## Built-in image_gen assets and prompts

Player atlas: `assets/player-heads-europe.png` (4 × 4). Initial prompt:

> Create one 4x4 transparent sprite atlas of 16 distinct recognizable current professional football player heads for a semi-realistic cartoon football game. Exactly equal square cells, heads front facing, head only no shoulders or neck, generous margin, real transparent background, no text. Natural current adult appearances, recognizable facial features. Row1 left to right: Bukayo Saka, Declan Rice, Martin Odegaard, David Raya. Row2: Cole Palmer, Enzo Fernandez, Joao Pedro (Chelsea Brazilian forward), Robert Sanchez (Chelsea Spanish goalkeeper). Row3: Lautaro Martinez, Marcus Thuram, Nicolo Barella, Josep Martinez (Inter Spanish goalkeeper, NOT Emiliano Martinez). Row4: Julian Alvarez, Alex Baena, Giuliano Simeone, Jan Oblak. Polished illustrated photographic likeness with subtle outline and clean alpha silhouette, all identical scale head-height 80% cell. Do not include kit, neck, labels, numbers, grids.

Final squad correction prompt:

> Edit only two head cells in this 4x4 transparent football game head atlas. Row 2 column 2 (cell 5) replace Enzo Fernandez with recognizable Morgan Rogers: light brown mixed-race English man, short dense dark curly hair, youthful rounded face, close facial hair. Row 2 column 4 (cell 7) replace Robert Sanchez with recognizable Emiliano Dibu Martinez: Argentine goalkeeper, fair skin, short dark hair cropped at sides, longer narrow face, strong nose, clean shaven or faint stubble. Keep all other 14 heads and their positions unchanged. Same illustrated realism, front-facing head only, no neck or shirt. Real transparent background throughout. Exact 4x4 equal square cells and square image.

Trophy output: `assets/ucl/trophy.png`. Initial prompt:

> Extract the exact silver trophy shown in this reference into a clean transparent background cutout game asset. Preserve the recognizable tall curved handles, silver cup and pedestal, front view, polished silver shading. Remove white backdrop and watermark text; do not add text or change trophy design. Center complete trophy with transparent margin. Transparent alpha PNG.

Refinement:

> Remove ONLY the background completely. Output this trophy as an isolated PNG cutout with a genuinely transparent alpha channel, including inside both handles. No gradient, no black, no gray, no drop shadow, no background pixels. Preserve silver trophy. Complete trophy entirely in frame with 8% transparent margin.
