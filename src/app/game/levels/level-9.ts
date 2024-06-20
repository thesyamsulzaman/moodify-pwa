import {
  Direction,
  LevelThemes,
  PLACEMENT_TYPE_CONVEYOR,
  PLACEMENT_TYPE_FIRE,
  PLACEMENT_TYPE_FIRE_PICKUP,
  PLACEMENT_TYPE_FLOUR,
  PLACEMENT_TYPE_FLYING_ENEMY,
  PLACEMENT_TYPE_GOAL,
  PLACEMENT_TYPE_GROUND_ENEMY,
  PLACEMENT_TYPE_HERO,
  PLACEMENT_TYPE_ICE,
  PLACEMENT_TYPE_ICE_PICKUP,
  PLACEMENT_TYPE_INFECTED_HERO,
  PLACEMENT_TYPE_KEY,
  PLACEMENT_TYPE_LOCK,
  PLACEMENT_TYPE_ROAMING_ENEMY,
  PLACEMENT_TYPE_SWITCH,
  PLACEMENT_TYPE_SWITCH_DOOR,
  PLACEMENT_TYPE_TELEPORT,
  PLACEMENT_TYPE_WALL,
  PLACEMENT_TYPE_WATER,
  PLACEMENT_TYPE_WATER_PICKUP,
} from "~/constants/helpers";

const level9 = {
  theme: LevelThemes.Gray,
  tilesWidth: 15,
  tilesHeight: 15,
  placements: [
    { type: PLACEMENT_TYPE_HERO, x: 2, y: 2 },
    { type: PLACEMENT_TYPE_WALL, x: 4, y: 1 },
    { type: PLACEMENT_TYPE_WALL, x: 4, y: 3 },
    { type: PLACEMENT_TYPE_WALL, x: 3, y: 4 },
    { type: PLACEMENT_TYPE_WALL, x: 1, y: 4 },
    { type: PLACEMENT_TYPE_WALL, x: 5, y: 4 },
    { type: PLACEMENT_TYPE_WALL, x: 4, y: 4 },
    { type: PLACEMENT_TYPE_WALL, x: 7, y: 4 },
    { type: PLACEMENT_TYPE_WALL, x: 8, y: 4 },
    { type: PLACEMENT_TYPE_WALL, x: 8, y: 3 },
    { type: PLACEMENT_TYPE_WALL, x: 8, y: 1 },
    { type: PLACEMENT_TYPE_WALL, x: 9, y: 4 },
    { type: PLACEMENT_TYPE_WALL, x: 11, y: 4 },
    { type: PLACEMENT_TYPE_WALL, x: 12, y: 4 },
    { type: PLACEMENT_TYPE_WALL, x: 12, y: 3 },
    { type: PLACEMENT_TYPE_WALL, x: 12, y: 2 },
    { type: PLACEMENT_TYPE_WALL, x: 12, y: 1 },
    { type: PLACEMENT_TYPE_WALL, x: 13, y: 4 },
    { type: PLACEMENT_TYPE_WALL, x: 15, y: 4 },
    { type: PLACEMENT_TYPE_WALL, x: 8, y: 6 },
    { type: PLACEMENT_TYPE_WALL, x: 8, y: 5 },
    { type: PLACEMENT_TYPE_WALL, x: 8, y: 7 },
    { type: PLACEMENT_TYPE_WALL, x: 8, y: 8 },
    { type: PLACEMENT_TYPE_WALL, x: 8, y: 9 },
    { type: PLACEMENT_TYPE_WALL, x: 8, y: 10 },
    { type: PLACEMENT_TYPE_WALL, x: 8, y: 11 },
    { type: PLACEMENT_TYPE_WALL, x: 8, y: 12 },
    { type: PLACEMENT_TYPE_FIRE, x: 4, y: 5 },
    { type: PLACEMENT_TYPE_FIRE, x: 4, y: 6 },
    { type: PLACEMENT_TYPE_FIRE, x: 4, y: 7 },
    { type: PLACEMENT_TYPE_FIRE, x: 4, y: 8 },
    { type: PLACEMENT_TYPE_FIRE, x: 5, y: 8 },
    { type: PLACEMENT_TYPE_FIRE, x: 6, y: 8 },
    { type: PLACEMENT_TYPE_FIRE, x: 7, y: 8 },
    { type: PLACEMENT_TYPE_FIRE, x: 3, y: 8 },
    { type: PLACEMENT_TYPE_FIRE, x: 2, y: 8 },
    { type: PLACEMENT_TYPE_FIRE, x: 1, y: 8 },
    { type: PLACEMENT_TYPE_FIRE, x: 4, y: 9 },
    { type: PLACEMENT_TYPE_FIRE, x: 4, y: 10 },
    { type: PLACEMENT_TYPE_FIRE, x: 4, y: 11 },
    { type: PLACEMENT_TYPE_FIRE, x: 5, y: 12 },
    { type: PLACEMENT_TYPE_FIRE, x: 7, y: 12 },
    { type: PLACEMENT_TYPE_FIRE, x: 6, y: 12 },
    { type: PLACEMENT_TYPE_FIRE, x: 3, y: 13 },
    { type: PLACEMENT_TYPE_FIRE, x: 2, y: 13 },
    { type: PLACEMENT_TYPE_FIRE, x: 1, y: 13 },
    { type: PLACEMENT_TYPE_FIRE, x: 1, y: 14 },
    { type: PLACEMENT_TYPE_FIRE, x: 3, y: 14 },
    { type: PLACEMENT_TYPE_FIRE, x: 3, y: 15 },
    { type: PLACEMENT_TYPE_FIRE, x: 2, y: 15 },
    { type: PLACEMENT_TYPE_FIRE, x: 1, y: 15 },
    { type: PLACEMENT_TYPE_WALL, x: 1, y: 12 },
    { type: PLACEMENT_TYPE_WALL, x: 3, y: 12 },
    { type: PLACEMENT_TYPE_WALL, x: 4, y: 12 },
    { type: PLACEMENT_TYPE_WALL, x: 4, y: 15 },
    { type: PLACEMENT_TYPE_WALL, x: 4, y: 14 },
    { type: PLACEMENT_TYPE_WALL, x: 4, y: 13 },
    { type: PLACEMENT_TYPE_WALL, x: 8, y: 13 },
    { type: PLACEMENT_TYPE_WALL, x: 8, y: 14 },
    { type: PLACEMENT_TYPE_WALL, x: 8, y: 15 },
    { type: PLACEMENT_TYPE_WALL, x: 12, y: 12 },
    { type: PLACEMENT_TYPE_WALL, x: 12, y: 13 },
    { type: PLACEMENT_TYPE_WALL, x: 12, y: 14 },
    { type: PLACEMENT_TYPE_WALL, x: 12, y: 15 },
    { type: PLACEMENT_TYPE_WALL, x: 13, y: 12 },
    { type: PLACEMENT_TYPE_WALL, x: 15, y: 12 },
    { type: PLACEMENT_TYPE_WATER, x: 10, y: 1 },
    { type: PLACEMENT_TYPE_WATER, x: 11, y: 1 },
    { type: PLACEMENT_TYPE_WATER, x: 11, y: 2 },
    { type: PLACEMENT_TYPE_WATER, x: 11, y: 3 },
    { type: PLACEMENT_TYPE_WATER, x: 9, y: 3 },
    { type: PLACEMENT_TYPE_WATER, x: 10, y: 3 },
    { type: PLACEMENT_TYPE_WATER, x: 9, y: 2 },
    { type: PLACEMENT_TYPE_WATER, x: 9, y: 1 },
    { type: PLACEMENT_TYPE_WATER, x: 12, y: 5 },
    { type: PLACEMENT_TYPE_WATER, x: 12, y: 6 },
    { type: PLACEMENT_TYPE_WATER, x: 12, y: 7 },
    { type: PLACEMENT_TYPE_WATER, x: 12, y: 8 },
    { type: PLACEMENT_TYPE_WATER, x: 11, y: 8 },
    { type: PLACEMENT_TYPE_WATER, x: 10, y: 8 },
    { type: PLACEMENT_TYPE_WATER, x: 9, y: 8 },
    { type: PLACEMENT_TYPE_WATER, x: 13, y: 8 },
    { type: PLACEMENT_TYPE_WATER, x: 14, y: 8 },
    { type: PLACEMENT_TYPE_WATER, x: 15, y: 8 },
    { type: PLACEMENT_TYPE_WATER, x: 12, y: 9 },
    { type: PLACEMENT_TYPE_WATER, x: 12, y: 10 },
    { type: PLACEMENT_TYPE_WATER, x: 12, y: 11 },
    { type: PLACEMENT_TYPE_WATER, x: 10, y: 12 },
    { type: PLACEMENT_TYPE_WATER, x: 9, y: 12 },
    { type: PLACEMENT_TYPE_WATER, x: 11, y: 12 },
    { type: PLACEMENT_TYPE_WATER, x: 13, y: 13 },
    { type: PLACEMENT_TYPE_WATER, x: 15, y: 13 },
    { type: PLACEMENT_TYPE_WATER, x: 15, y: 14 },
    { type: PLACEMENT_TYPE_WATER, x: 13, y: 14 },
    { type: PLACEMENT_TYPE_WATER, x: 13, y: 15 },
    { type: PLACEMENT_TYPE_WATER, x: 14, y: 15 },
    { type: PLACEMENT_TYPE_WATER, x: 15, y: 15 },
    { type: PLACEMENT_TYPE_WATER, x: 14, y: 14 },
    { type: PLACEMENT_TYPE_ICE, x: 9, y: 5 },
    { type: PLACEMENT_TYPE_ICE, x: 10, y: 5 },
    { type: PLACEMENT_TYPE_ICE, x: 11, y: 5 },
    { type: PLACEMENT_TYPE_ICE, x: 10, y: 7 },
    { type: PLACEMENT_TYPE_ICE, x: 9, y: 7 },
    { type: PLACEMENT_TYPE_ICE, x: 9, y: 6 },
    { type: PLACEMENT_TYPE_ICE, x: 11, y: 6 },
    { type: PLACEMENT_TYPE_ICE, x: 11, y: 7 },
    { type: PLACEMENT_TYPE_TELEPORT, x: 6, y: 2 },
    { type: PLACEMENT_TYPE_TELEPORT, x: 6, y: 6 },
    { type: PLACEMENT_TYPE_TELEPORT, x: 6, y: 10 },
    { type: PLACEMENT_TYPE_TELEPORT, x: 6, y: 14 },
    { type: PLACEMENT_TYPE_TELEPORT, x: 10, y: 14 },
    { type: PLACEMENT_TYPE_TELEPORT, x: 10, y: 10 },
    { type: PLACEMENT_TYPE_TELEPORT, x: 10, y: 6 },
    { type: PLACEMENT_TYPE_TELEPORT, x: 14, y: 10 },
    { type: PLACEMENT_TYPE_TELEPORT, x: 14, y: 2 },
    { type: PLACEMENT_TYPE_LOCK, x: 14, y: 12, color: "GREEN" },
    { type: PLACEMENT_TYPE_LOCK, x: 2, y: 12 },
    { type: PLACEMENT_TYPE_FIRE, x: 4, y: 2 },
    { type: PLACEMENT_TYPE_FIRE, x: 6, y: 4 },
    { type: PLACEMENT_TYPE_KEY, x: 2, y: 10, color: "GREEN" },
    { type: PLACEMENT_TYPE_KEY, x: 14, y: 14 },
    { type: PLACEMENT_TYPE_WATER, x: 14, y: 13 },
    { type: PLACEMENT_TYPE_FIRE_PICKUP, x: 2, y: 6 },
    { type: PLACEMENT_TYPE_ICE_PICKUP, x: 2, y: 14 },
    { type: PLACEMENT_TYPE_WATER_PICKUP, x: 14, y: 6 },
    // { type: PLACEMENT_TYPE_ROAMING_ENEMY, x: 5, y: 13 },
    // { type: PLACEMENT_TYPE_ROAMING_ENEMY, x: 6, y: 12 },
    { type: PLACEMENT_TYPE_GOAL, x: 10, y: 2 },
    { type: PLACEMENT_TYPE_CONVEYOR, x: 10, y: 4, direction: Direction.Top },
    { type: PLACEMENT_TYPE_CONVEYOR, x: 8, y: 2, direction: Direction.Right },

    {
      type: PLACEMENT_TYPE_INFECTED_HERO,
      x: 9,
      y: 10,
      direction: Direction.Right,
    },
    { type: PLACEMENT_TYPE_CONVEYOR, x: 10, y: 9, direction: Direction.Right },
    { type: PLACEMENT_TYPE_CONVEYOR, x: 11, y: 9, direction: Direction.Bottom },
    {
      type: PLACEMENT_TYPE_CONVEYOR,
      x: 11,
      y: 10,
      direction: Direction.Bottom,
    },
    { type: PLACEMENT_TYPE_CONVEYOR, x: 11, y: 11, direction: Direction.Left },
    { type: PLACEMENT_TYPE_CONVEYOR, x: 10, y: 11, direction: Direction.Left },
    { type: PLACEMENT_TYPE_CONVEYOR, x: 9, y: 11, direction: Direction.Top },
  ],
};

export default level9;