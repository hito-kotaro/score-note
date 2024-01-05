import Add from "@mui/icons-material/Add";
import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { JoinPlayerListItem } from "./organizations/home/JoinPlayerListItem/JoinPlayerListItem";
import { Player } from "../types/player";
import { usePlayer } from "./hooks/usePlayer";
import { FC } from "react";

interface Props {
  playerList: Player[];
  playerName: string;
  changeContentId: (id: number) => void;
  onChangePlayerName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addPlayer: (name: string) => void;
  removePlayer: (id: string) => void;
}

const HomePageContents: FC<Props> = (props) => {
  const {
    playerList,
    playerName,
    changeContentId,
    onChangePlayerName,
    addPlayer,
    removePlayer,
  } = props;

  const gameStart = () => {
    changeContentId(1);
    const initialScore: Player[][] = [];
    localStorage.setItem("score", JSON.stringify(initialScore));
    localStorage.setItem("player", JSON.stringify(playerList));
  };

  return (
    <Box className="px-2">
      {/*Header*/}
      <Typography variant="h3" className="text-primary text-center">
        ScoreNote
      </Typography>

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
          <IconButton
            className="bg-primary hover:bg-primary"
            onClick={() => addPlayer(playerName)}
          >
            <Add fontSize="small" className="text-white" />
          </IconButton>
        </Box>
      </Box>

      {/*SubmitButton*/}
      <Box className="mt-6">
        <Box className="flex justify-center">
          <Button
            variant="contained"
            className="bg-primary text-white hover:bg-primary"
            disabled={playerList.length === 0}
            onClick={gameStart}
          >
            このメンバーで始める
          </Button>
        </Box>
      </Box>

      {/*PlayerList*/}
      <Box>
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
