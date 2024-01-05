import { Player } from "@/app/types/player";
import Clear from "@mui/icons-material/Clear";
import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  player: Player;
  removePlayer: (id: string) => void;
}

export const JoinPlayerListItem: FC<Props> = (props) => {
  const { player, removePlayer } = props;

  return (
    <Box className="flex justify-between">
      <Box className="w-full px-5 flex items-center justify-center">
        <Typography variant="h6" className="text-primary">
          {player.name}
        </Typography>
      </Box>
      <Button
        variant="contained"
        onClick={() => {
          removePlayer(player.id);
        }}
        sx={{ width: "10px", minWidth: "10px" }}
        color="orange"
      >
        <Clear fontSize="small" />
      </Button>
    </Box>
  );
};
