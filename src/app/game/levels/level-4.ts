import {
  Direction,
  LevelThemes,
  PLACEMENT_TYPE_CONVEYOR,
  PLACEMENT_TYPE_FLOUR,
  PLACEMENT_TYPE_FLYING_ENEMY,
  PLACEMENT_TYPE_GOAL,
  PLACEMENT_TYPE_GROUND_ENEMY,
  PLACEMENT_TYPE_HERO,
  PLACEMENT_TYPE_INFECTED_HERO,
  PLACEMENT_TYPE_ROAMING_ENEMY,
  PLACEMENT_TYPE_SWITCH,
  PLACEMENT_TYPE_SWITCH_DOOR,
  PLACEMENT_TYPE_WALL,
  PLACEMENT_TYPE_WATER,
  PLACEMENT_TYPE_WATER_PICKUP,
} from "~/constants/helpers";

const level4 = {
  theme: LevelThemes.Green,
  tilesWidth: 11,
  tilesHeight: 6,
  placements: [
    { type: PLACEMENT_TYPE_HERO, x: 11, y: 3 },
    { type: PLACEMENT_TYPE_WALL, x: 1, y: 4 },
    { type: PLACEMENT_TYPE_WALL, x: 1, y: 6 },
    { type: PLACEMENT_TYPE_WALL, x: 2, y: 6 },
    { type: PLACEMENT_TYPE_WALL, x: 3, y: 6 },
    { type: PLACEMENT_TYPE_WALL, x: 4, y: 6 },
    { type: PLACEMENT_TYPE_WALL, x: 5, y: 6 },
    { type: PLACEMENT_TYPE_WALL, x: 6, y: 6 },
    { type: PLACEMENT_TYPE_WALL, x: 8, y: 6 },
    { type: PLACEMENT_TYPE_WALL, x: 7, y: 6 },
    { type: PLACEMENT_TYPE_WALL, x: 9, y: 6 },
    { type: PLACEMENT_TYPE_WALL, x: 10, y: 6 },
    { type: PLACEMENT_TYPE_WALL, x: 11, y: 6 },
    { type: PLACEMENT_TYPE_WALL, x: 2, y: 4 },
    { type: PLACEMENT_TYPE_WALL, x: 5, y: 4 },
    { type: PLACEMENT_TYPE_WALL, x: 7, y: 4 },
    { type: PLACEMENT_TYPE_WALL, x: 10, y: 4 },
    { type: PLACEMENT_TYPE_WALL, x: 11, y: 4 },
    { type: PLACEMENT_TYPE_GOAL, x: 10, y: 2 },
    { type: PLACEMENT_TYPE_FLOUR, x: 3, y: 5 },
    { type: PLACEMENT_TYPE_WALL, x: 3, y: 4 },
    { type: PLACEMENT_TYPE_FLOUR, x: 9, y: 5 },
    { type: PLACEMENT_TYPE_WALL, x: 9, y: 4 },
    { type: PLACEMENT_TYPE_SWITCH_DOOR, x: 4, y: 5, isRaised: true },
    { type: PLACEMENT_TYPE_SWITCH_DOOR, x: 8, y: 5 },
    { type: PLACEMENT_TYPE_WALL, x: 8, y: 4 },
    { type: PLACEMENT_TYPE_WALL, x: 4, y: 4 },
    { type: PLACEMENT_TYPE_SWITCH, x: 6, y: 4 },
    // { type: PLACEMENT_TYPE_INFECTED_HERO, x: 7, y: 5 },

    {
      type: PLACEMENT_TYPE_GROUND_ENEMY,
      x: 2,
      y: 5,
      initialDirection: Direction.Right,
    },
  ],
};

export default level4;