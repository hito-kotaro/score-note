"use client";
import { Box, Button, Snackbar } from "@mui/material";
import { Player } from "../types/player";
import { FC } from "react";
import { PlayerListItem } from "./molcules/PlayerListItem/PlayerListItem";
import { useHeaderMenu } from "./molcules/HeaderMenu/useHeaderMenu";
import { useDialog } from "./hooks/useDialog";
import { GameHeader } from "./molcules/GameHeader/GameHeader";
import { useSnackbar } from "./hooks/useSnackbar";
import { SaveScoreDialog } from "./molcules/SaveScoreDialog/SaveScoreDialog";

interface Props {
  playerList: Player[];
  scoreList: Player[][];
  addScore: (id: string, add: number) => void;
  substructScore: (id: string, sub: number) => void;
  clearPlayerList: () => void;
  saveScore: () => void;
  resetScore: () => void;
  changeContentId: (id: number) => void;
}

const GamePageComponents: FC<Props> = (props) => {
  const {
    playerList,
    scoreList,
    addScore,
    substructScore,
    saveScore,
    resetScore,
    changeContentId,
    clearPlayerList,
  } = props;

  const headerMenu = useHeaderMenu();
  const finishDialog = useDialog();
  const saveScoreDialog = useDialog();
  const snackbar = useSnackbar();

  return (
    <Box>
      {/*Snackbar*/}
      <Snackbar
        open={snackbar.isOpen}
        autoHideDuration={3000}
        onClose={snackbar.handleClose}
        message="スコアを記録しました。"
      />
      {/*Dialog*/}
      <SaveScoreDialog
        isOpen={saveScoreDialog.isOpen}
        handleClose={saveScoreDialog.handleClose}
        snackbarHandleOpen={snackbar.handleOpen}
        saveScore={saveScore}
      />
      {/*Header*/}
      <Box>
        <GameHeader
          handleMenuClick={headerMenu.handleClick}
          handleMenuClose={headerMenu.handleClose}
          menuIsOpen={headerMenu.isOpen}
          dialogIsOpen={finishDialog.isOpen}
          handleOpenDialog={finishDialog.handleOpen}
          handleCloseDialog={finishDialog.handleClose}
          anchorEl={headerMenu.anchorEl}
          resetScore={resetScore}
          changeContentId={changeContentId}
          clearPlayerList={clearPlayerList}
          needMenu={true}
        />
      </Box>

      {/*Display*/}
      <Box className="mt-6 text-primary text-2xl font-semibold text-center">
        {`第 ${scoreList.length + 1} セット`}
      </Box>

      {/*Buttons*/}
      <Box className="mt-3 flex justify-around ">
        <Box className="flex justify-center">
          <Button
            variant="contained"
            color="green"
            sx={{ color: "white" }}
            onClick={saveScoreDialog.handleOpen}
          >
            記録
          </Button>
        </Box>
        <Box className="flex justify-center">
          <Button
            variant="contained"
            color="green"
            sx={{ color: "white" }}
            onClick={() => {
              changeContentId(2);
            }}
          >
            閲覧
          </Button>
        </Box>
        <Box className="flex justify-center ">
          <Button
            variant="contained"
            color="orange"
            sx={{ color: "white" }}
            onClick={() => {
              changeContentId(3);
            }}
          >
            集計
          </Button>
        </Box>
      </Box>

      {/*PlayerList*/}
      <Box className="mt-3 px-2">
        {playerList.map((p: Player) => {
          return (
            <Box key={p.id} className="mb-3">
              <PlayerListItem
                player={p}
                addScore={addScore}
                substructScore={substructScore}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default GamePageComponents;
