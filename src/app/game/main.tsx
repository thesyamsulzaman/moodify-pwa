"use client";
import React, { createContext, useEffect, useState } from "react";
import { SPRITESHEET_IMAGE_SRC } from "~/constants/helpers";
import RenderLevel from "./components/level-layout/render-level";
import levels from "./levels/levels-map";
import soundManager from "./classes/sounds";
import journalEntry from "./classes/journal-entry";
import progressEntry from "./classes/progress-entry";

interface SpriteSheetImage {
  image: HTMLImageElement | null;
  levelId: keyof typeof levels;
  setLevelId: (levelId: keyof typeof levels) => void;
}

soundManager.init();
journalEntry.promptEntry();

type GameProviderProps = { children: React.ReactNode };

export const GameContext = createContext<SpriteSheetImage>({
  image: null,
  levelId: "level-1",
  setLevelId(levelId) {},
});

const checkpoint = progressEntry.get().checkpoint as keyof typeof levels;

const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [levelId, setLevelId] = useState<keyof typeof levels>(
    checkpoint || "level-1"
  );

  const [spriteSheetImage, setSpriteSheetImage] =
    useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const image = new Image();
    image.src = SPRITESHEET_IMAGE_SRC;
    image.onload = () => setSpriteSheetImage(image);

    // Cleanup function to avoid memory leaks
    return () => {
      image.onload = null;
    };
  }, []);

  if (!spriteSheetImage) {
    return null;
  }

  return (
    <GameContext.Provider
      value={{ image: spriteSheetImage, levelId, setLevelId }}
    >
      {children}
    </GameContext.Provider>
  );
};

const Game = () => {
  return (
    <GameProvider>
      <RenderLevel />
    </GameProvider>
  );
};

export default Game;
