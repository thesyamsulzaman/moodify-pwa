import {
  Direction,
  LevelThemes,
  PLACEMENT_TYPE_CIABATTA,
  PLACEMENT_TYPE_CONVEYOR,
  PLACEMENT_TYPE_FIRE,
  PLACEMENT_TYPE_FLOUR,
  PLACEMENT_TYPE_FLYING_ENEMY,
  PLACEMENT_TYPE_GOAL,
  PLACEMENT_TYPE_GROUND_ENEMY,
  PLACEMENT_TYPE_HERO,
  PLACEMENT_TYPE_ICE,
  PLACEMENT_TYPE_INFECTED_HERO,
  PLACEMENT_TYPE_KEY,
  PLACEMENT_TYPE_LOCK,
  PLACEMENT_TYPE_ROAMING_ENEMY,
  PLACEMENT_TYPE_SWITCH,
  PLACEMENT_TYPE_SWITCH_DOOR,
  PLACEMENT_TYPE_WALL,
  PLACEMENT_TYPE_WATER,
  PLACEMENT_TYPE_WATER_PICKUP,
} from "~/constants/helpers";

const level10 = {
  theme: LevelThemes.Gray,
  tilesWidth: 10,
  tilesHeight: 11,
  placements: [
    { type: PLACEMENT_TYPE_HERO, x: 1, y: 1 },
    { type: PLACEMENT_TYPE_FIRE, x: 1, y: 2 },
    { type: PLACEMENT_TYPE_FIRE, x: 3, y: 2 },
    { type: PLACEMENT_TYPE_FIRE, x: 4, y: 2 },
    { type: PLACEMENT_TYPE_FIRE, x: 5, y: 2 },
    { type: PLACEMENT_TYPE_FIRE, x: 6, y: 2 },
    { type: PLACEMENT_TYPE_FIRE, x: 8, y: 2 },
    { type: PLACEMENT_TYPE_FIRE, x: 9, y: 2 },
    { type: PLACEMENT_TYPE_FIRE, x: 10, y: 2 },
    { type: PLACEMENT_TYPE_CONVEYOR, x: 2, y: 2, direction: Direction.Bottom },
    { type: PLACEMENT_TYPE_CONVEYOR, x: 2, y: 3, direction: Direction.Bottom },
    { type: PLACEMENT_TYPE_CONVEYOR, x: 7, y: 2, direction: Direction.Bottom },
    { type: PLACEMENT_TYPE_CONVEYOR, x: 7, y: 3, direction: Direction.Bottom },
    { type: PLACEMENT_TYPE_GOAL, x: 10, y: 1 },
    { type: PLACEMENT_TYPE_SWITCH_DOOR, x: 9, y: 1 },
    { type: PLACEMENT_TYPE_ICE, x: 3, y: 5 },
    { type: PLACEMENT_TYPE_ICE, x: 4, y: 5 },
    { type: PLACEMENT_TYPE_ICE, x: 5, y: 5 },
    { type: PLACEMENT_TYPE_ICE, x: 6, y: 5 },
    { type: PLACEMENT_TYPE_ICE, x: 7, y: 5 },
    { type: PLACEMENT_TYPE_ICE, x: 8, y: 5 },
    { type: PLACEMENT_TYPE_ICE, x: 8, y: 6 },
    { type: PLACEMENT_TYPE_ICE, x: 7, y: 6 },
    { type: PLACEMENT_TYPE_ICE, x: 6, y: 6 },
    { type: PLACEMENT_TYPE_ICE, x: 5, y: 6 },
    { type: PLACEMENT_TYPE_ICE, x: 4, y: 6 },
    { type: PLACEMENT_TYPE_ICE, x: 3, y: 6 },
    { type: PLACEMENT_TYPE_FIRE, x: 3, y: 8 },
    { type: PLACEMENT_TYPE_FIRE, x: 4, y: 8 },
    { type: PLACEMENT_TYPE_FIRE, x: 4, y: 9 },
    { type: PLACEMENT_TYPE_FIRE, x: 3, y: 9 },
    { type: PLACEMENT_TYPE_FIRE, x: 7, y: 8 },
    { type: PLACEMENT_TYPE_FIRE, x: 8, y: 8 },
    { type: PLACEMENT_TYPE_FIRE, x: 8, y: 9 },
    { type: PLACEMENT_TYPE_FIRE, x: 7, y: 9 },
    { type: PLACEMENT_TYPE_WALL, x: 1, y: 9 },
    { type: PLACEMENT_TYPE_WALL, x: 3, y: 11 },
    { type: PLACEMENT_TYPE_WALL, x: 8, y: 11 },
    { type: PLACEMENT_TYPE_WALL, x: 10, y: 9 },
    { type: PLACEMENT_TYPE_LOCK, x: 9, y: 10 },
    { type: PLACEMENT_TYPE_LOCK, x: 2, y: 10 },
    { type: PLACEMENT_TYPE_FLOUR, x: 10, y: 11 },
    { type: PLACEMENT_TYPE_FLOUR, x: 1, y: 11 },
    { type: PLACEMENT_TYPE_KEY, x: 1, y: 10 },
    { type: PLACEMENT_TYPE_KEY, x: 10, y: 4 },
    // { type: PLACEMENT_TYPE_CIABATTA, x: 9, y: 1 },
  ],
};

export default level10;