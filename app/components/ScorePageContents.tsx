import { Box } from "@mui/material";
import { FC } from "react";
import { GameHeader } from "./molcules/GameHeader/GameHeader";
import { Player } from "../types/player";

interface Props {
  playerList: Player[];
  changeContentId: (id: number) => void;
}

const ScorePageContents: FC<Props> = (props) => {


  return (

    <Box>
      <GameHeader
				needMenu={false}
      />
      <Box>ScorePageContents</Box>
    </Box>
  );
};

export default ScorePageContents
