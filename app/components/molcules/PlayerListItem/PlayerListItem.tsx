import { Player } from "@/app/types/player";
import { Settings } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, IconButton } from "@mui/material";
import { FC } from "react";
import { AddPointDialog } from "../../organizations/AddPointDialog/AddPointDialog";
import { useAddPointDialog } from "../../organizations/AddPointDialog/useAddPointDialog";

interface Props {
  player: Player;
  addScore: (id: string, add: number) => void;
  substructScore: (id: string, sub: number) => void;
}

export const PlayerListItem: FC<Props> = (props) => {
  const { player, addScore, substructScore } = props;
  const {
    isOpen,
    input,
    isInvalidValue,
    onOpenDialog,
    onCloseDialog,
    onChange,
    clear,
  } = useAddPointDialog();

  return (
    <Box className="flex justify-between bg-white drop-shadow-lg rounded-lg p-2">
      <AddPointDialog
        player={player}
        isOpen={isOpen}
        input={input}
        isInvalidValue={isInvalidValue}
        onCloseDialog={onCloseDialog}
        addScore={addScore}
        onChange={onChange}
        clear={clear}
      />
      <Box className="w-36 text-primary text-2xl flex items-center">
        {player.name}
      </Box>
      <Box className="text-secondary text-2xl font-bold flex items-center">
        {player.score}
      </Box>
      <Box>
        <IconButton onClick={() => addScore(player.id, 1)}>
          <AddIcon fontSize="medium" className="text-primary" />
        </IconButton>
        <IconButton onClick={() => substructScore(player.id, 1)}>
          <RemoveIcon fontSize="medium" className="text-primary" />
        </IconButton>
        <IconButton onClick={onOpenDialog}>
          <Settings fontSize="medium" className="text-secondary" />
        </IconButton>
      </Box>
    </Box>
  );
};
