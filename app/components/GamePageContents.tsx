"use client";
import { Box, Button, Typography } from "@mui/material";
import { Player } from "../types/player";
import { FC } from "react";
import { PlayerListItem } from "./molcules/PlayerListItem";
import { useAddPointDialog } from "./organizations/AddPointDialog/useAddPointDialog";
import { AddPointDialog } from "./organizations/AddPointDialog/AddPointDialog";

interface Props {
  playerList: Player[];
  addScore: (id: number, add: number) => void;
  substructScore: (id: number, sub: number) => void;
}
const GamePageComponents: FC<Props> = (props) => {
  const { playerList, addScore, substructScore } = props;
  console.log(playerList);

  return (
    <Box>
      {/*Header*/}
      <Box>
        <Box className="bg-white p-2 rounded-b-lg drop-shadow-lg flex justify-between">
          <Box className="bg-primary h-14 w-14 rounded-lg text-5xl text-white flex justify-center items-center">
            S
          </Box>
          <Button variant="contained" className="bg-secondary text-white h-10">
            RESET
          </Button>
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
      <Box className="mt-6">
        <Box className="flex justify-center mt-3">
          <Button variant="contained" className="bg-primary">
            このセットの結果を記録
          </Button>
        </Box>
        <Box className="flex justify-center mt-3">
          <Button variant="outlined" className="border-primary text-primary">
            各セットの結果を閲覧
          </Button>
        </Box>
        <Box className="flex justify-center mt-3">
          <Button variant="contained" className="bg-secondary">
            集計結果を確認
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default GamePageComponents;
