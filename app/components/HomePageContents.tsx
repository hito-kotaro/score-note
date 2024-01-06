import Add from "@mui/icons-material/Add";
import { Box, Button, Snackbar, TextField, Typography } from "@mui/material";
import { JoinPlayerListItem } from "./organizations/home/JoinPlayerListItem/JoinPlayerListItem";
import { Player } from "../types/player";
import { FC, useEffect, useState } from "react";
import { useSnackbar } from "./hooks/useSnackbar";
import { useDialog } from "./hooks/useDialog";
import { ContinueDialog } from "./molcules/ContinueDialog/ContinueDialog";

interface Props {
  playerList: Player[];
  playerName: string;
  changeContentId: (id: number) => void;
  onChangePlayerName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addPlayer: (name: string) => void;
  removePlayer: (id: string) => void;
  continueData: () => void;
  clearPlayerList: () => void;
}

const HomePageContents: FC<Props> = (props) => {
  const {
    playerList,
    playerName,
    changeContentId,
    onChangePlayerName,
    addPlayer,
    removePlayer,
    continueData,
    clearPlayerList,
  } = props;
  const [isContinue, setIsContinue] = useState<boolean>(true);
  const snackbar = useSnackbar();
  const continueDialog = useDialog();

  const gameStart = () => {
    changeContentId(1);
    const initialScore: Player[][] = [];
    localStorage.setItem("score", JSON.stringify(initialScore));
    localStorage.setItem("player", JSON.stringify(playerList));
  };

  useEffect(() => {
    console.log("check");
    const score = localStorage.getItem("score");
    const player = localStorage.getItem("player");

    if (score !== null && player !== null) {
      continueDialog.handleOpen();
    }
  }, []);

  return (
    <Box className="px-2">
      {/*Header*/}
      <Typography variant="h3" className="text-primary text-center">
        ScoreNote
      </Typography>

      {/*Dialog*/}
      <ContinueDialog
        isOpen={continueDialog.isOpen}
        handleClose={continueDialog.handleClose}
        snackbarHandleOpen={snackbar.handleOpen}
        changeContentId={changeContentId}
        clearPlayerList={clearPlayerList}
        continueData={continueData}
      />

      {/*Display*/}
      <Box className="mt-6">
        <Typography variant="h6" className="text-primary text-center">
          プレイ人数
        </Typography>
        <Typography variant="h4" className="text-primary text-center">
          {playerList.length}
        </Typography>
      </Box>

      {/*Name Input*/}
      <Box className="w-full flex justify-between">
        <Box className="flex-grow px-5">
          <TextField
            variant="standard"
            placeholder="プレイヤー名を入力"
            color="green"
            fullWidth
            focused
            value={playerName}
            onChange={onChangePlayerName}
          />
        </Box>
        <Box>
          <Button
            variant="contained"
            disabled={playerName.length === 0}
            color="green"
            onClick={() => addPlayer(playerName)}
            sx={{ minWidth: "10px", maxWidth: "10px" }}
          >
            <Add fontSize="small" />
          </Button>
        </Box>
      </Box>

      {/*SubmitButton*/}
      <Box className="mt-6">
        <Box className="flex justify-center">
          <Button
            variant="contained"
            color="green"
            disabled={playerList.length === 0}
            onClick={gameStart}
          >
            このメンバーで始める
          </Button>
        </Box>
      </Box>

      {/*PlayerList*/}
      <Box className="mt-6">
        {playerList.map((p: Player) => (
          <Box key={p.id} className="mt-3">
            <JoinPlayerListItem player={p} removePlayer={removePlayer} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HomePageContents;
