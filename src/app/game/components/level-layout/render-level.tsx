import { LevelThemes, THEME_BACKGROUNDS } from "~/constants/helpers";
import LevelBackgroundTilesLayer from "./level-backround-tiles-layer";
import { Fragment, useContext, useEffect, useState } from "react";
import LevelState from "../../classes/level-state";
import LevelCompleteMessage from "../hud/level-complete-message";
import { GameContext } from "../../main";
import DeathMessage from "../hud/death-message";
import TopHud from "../hud/top-hud";
import RenderBattle from "./render-battle";
import Dialog from "../hud/dialog";
import Body from "../object-graphics/body";
import { TILES } from "~/constants/tiles";
import Image from "next/image";
import Journal from "../ui/journal";
import journalEntry from "../../classes/journal-entry";

const RenderLevel = () => {
  const { levelId } = useContext(GameContext);
  const [level, setLevel] = useState<any>(null);

  useEffect(() => {
    const levelState = new LevelState(levelId, (newState) => {
      setLevel(newState);
    });

    const handleKeyDown = (event) => {};

    setLevel(levelState.getState());

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      levelState.destroy();
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [levelId]);

  if (!level) {
    return null;
  }

  return (
    <Fragment>
      <div
        className="flex items-center justify-center inset-0 absolute"
        style={{ background: THEME_BACKGROUNDS[level.theme as LevelThemes] }}
      >
        <div className="w-[var(--game-viewport-width)] h-[var(--game-viewport-height)] scale-[var(--pixel-size)]">
          <div
            style={{
              transform: `translate3d(${level?.cameraTransformX}, ${level?.cameraTransformY}, 0)`,
            }}
          >
            <LevelBackgroundTilesLayer level={level} />
            {level?.placements
              ?.filter((placement: any) => !placement.hasBeenCollected)
              ?.map((placement: any) => {
                const [x, y] = placement.displayXY();

                return (
                  <div
                    key={placement?.id}
                    style={{
                      position: "absolute",
                      transform: `translate3d(${x + "px"}, ${y + "px"}, 0)`,
                      zIndex: placement.zIndex(),
                    }}
                  >
                    {placement?.renderComponent()}
                  </div>
                );
              })}
          </div>
          {level.isCompleted && <LevelCompleteMessage />}
          {level.deathOutcome && <DeathMessage level={level} />}

          {/* <div className="outer-container absolute inset-0 z-[var(--ui-popup-z-index)] flex items-center justify-center">
            <div className="popup-container relative flex flex-col items-center max-w-[70px] bg-white p-1 gap-[2px] rounded-md">
              <img
                src="https://img.freepik.com/free-psd/fire-element-illustration_23-2150396733.jpg?w=826&t=st=1717733531~exp=1717734131~hmac=9710f85998544c1a479d86e06dba28b3059a2da6c3744d604c6379f9d9dac4b4"
                alt=""
                width={30}
              />
              <h1 className="text-[5px] text-[#7c7c7d] text-center tracking-[1px]">
                2 Days Streak
              </h1>
              <p className="text-[3px] text-center tracking-[0.5px] text-[#444]">
                Lakukan jurnaling setiap hari maka streak mu tidak akan
                ter-reset
              </p>
            </div>
          </div> */}
        </div>

        <TopHud level={level} />

        {/* {!!level?.currentDialog && (
          <Dialog
            dialog={level?.currentDialog}
            onComplete={level.resetCurrentDialog}
          />
        )} */}

        {!!level?.custscenes?.length && (
          <Dialog
            isOpen={!!level?.custscenes?.length}
            onClose={level?.clearCutscene}
            content={level?.custscenes}
          />
        )}

        {/* 
        <Dialog
          isOpen={true}
          onClose={level?.clearCutscene}
          leftSection={
            <img
              src="https://img.itch.zone/aW1nLzExNzY3NzEyLnBuZw==/original/zOww4a.png"
              alt="Ciabatta"
              width={900}
              height={500}
              className="-mt-14"
            />
          }
          content={[
            {
              type: "message",
              text: "Hi, Namaku peter, aku adalah seorang pekerja kantoran biasa yang terjebak masuk di dunia yang tidak dikenal ini, aku bertemu dengan sekelompok orang yang wajahnya penuh dengan keputusasaan. Mata mereka kosong, Keputusasaan menyelimuti mereka, seperti kain kafan kegelapan, ternyata oh ternyata mereka terinfeksi virus yang bernama 'Cognivirues'",
            },
            {
              type: "message",
              text: "Aku membutuhkan bantuanmu untuk keluar dari tempat ini. Aku juga harus memeriksamu setiap hari untuk memastikan kamu tidak terinfeksi. Gejala virus ini sering aku lihat, yaitu pikiran-pikiran yang sangat terdistorsi dan terlihat menyiksa para korbannya.",
            },
            {
              type: "message",
              text: "Caranya adalah, setiap kita akan bertemu kamu harus menulis dan mengirim jurnal mengenai hari harimu setiap harinya, aku akan mengecek apakah kamu sudah terinfeksi Cognivirues atau belum, Jurnal harian yang kamu tulis akan dianalisis secara berkala oleh ku untuk mengidentifikasi pola tanda-tanda Cognivirues.",
            },
          ]}
        /> */}

        {level?.battle?.isOpen && (
          <RenderBattle
            level={level}
            isOpen={level.battle?.isOpen}
            onClose={level?.battle?.close}
            onBattleEnd={level?.battle?.onComplete}
          />
        )}

        {/* <Journal isOpen={true} onClose={() => {}} onSave={() => {}} /> */}
      </div>
    </Fragment>
  );
};

export default RenderLevel;
