"use client";
import { Box, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Player } from "../types/player";
import { FC  } from "react";
import { PlayerListItem } from "./molcules/PlayerListItem";
import { useHeaderMenu } from "./molcules/HeaderMenu/useHeaderMenu";
import { HeaderMenu } from "./molcules/HeaderMenu/HeaderMenu";
import { FinishDialog } from "./molcules/FinishDialog/FinishDialog";
import { useFinishDialog } from "./molcules/FinishDialog/useFinishDialog";

interface Props {
  playerList: Player[];
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
    addScore,
    substructScore,
    saveScore,
    resetScore,
    changeContentId,
    clearPlayerList,
  } = props;

  const { isOpen, anchorEl, handleClose, handleClick } = useHeaderMenu();
  const finishDialog = useFinishDialog();

  return (
    <Box>
      {/*Header*/}
      <Box>
        <Box className="bg-white p-2 rounded-b-lg drop-shadow-lg flex justify-between">
          <Box className="bg-primary h-14 w-14 rounded-lg text-5xl text-white flex justify-center items-center">
            S
          </Box>
          <Box className="flex justify-around ">
            <IconButton onClick={handleClick}>
              <MenuIcon fontSize="large" />
            </IconButton>
            <HeaderMenu
              isOpen={isOpen}
              anchorEl={anchorEl}
              handleClose={handleClose}
              resetScore={resetScore}
              openFinishDialog={finishDialog.onOpenDialog}
            />
            <FinishDialog
              isOpen={finishDialog.isOpen}
              onCloseDialog={finishDialog.onCloseDialog}
              changeContentId={changeContentId}
              clearPlayerList={clearPlayerList}
            />
          </Box>
        </Box>
      </Box>
      {/*PlayerList*/}
      <Box className="mt-6 px-2">
        {playerList.map((p: Player) => {
          return (
            <Box key={p.id} className="mt-3">
              <PlayerListItem
                player={p}
                addScore={addScore}
                substructScore={substructScore}
              />
            </Box>
          );
        })}
      </Box>
      {/*Buttons*/}
      <Box className="mt-6 flex justify-center">
        <Box className="w-2/3">
          <Box className="flex justify-center mt-3">
            <Button
              fullWidth
              variant="contained"
              className="bg-primary hover:bg-primary"
              onClick={saveScore}
            >
              このセットの結果を記録
            </Button>
          </Box>
          <Box className="flex justify-center mt-3">
            <Button
              fullWidth
              variant="outlined"
              className="border-primary hover:border-primary text-primary"
            >
              各セットの結果を閲覧
            </Button>
          </Box>
          <Box className="flex justify-center mt-3">
            <Button
              fullWidth
              variant="contained"
              className="bg-secondary hover:bg-secondary"
            >
              集計結果を確認
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GamePageComponents;
