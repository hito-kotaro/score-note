import { Player } from "@/app/types/player";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { FC } from "react";

interface Props {
  player: Player;
  isOpen: boolean;
  input: string;
  isInvalidValue: boolean;
  onCloseDialog: () => void;
  addScore: (id: string, add: number) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clear: () => void;
}
export const AddPointDialog: FC<Props> = (props) => {
  const {
    player,
    isOpen,
    input,
    isInvalidValue,
    onCloseDialog,
    addScore,
    onChange,
    clear,
  } = props;

  return (
    <Dialog onClose={onCloseDialog} open={isOpen}>
      <Box className="bg-red-50">
        <DialogTitle>任意のポイントを加点</DialogTitle>
        <DialogContent className="bg-green-200 flex justify-center">
          <TextField variant="standard" value={input} onChange={onChange} />
        </DialogContent>
        <DialogActions>
          <Button
            disabled={isInvalidValue}
            variant="contained"
            className="bg-primary text-white"
            onClick={() => {
              onCloseDialog();
              addScore(player.id, Number(input));
              clear();
            }}
          >
            確定
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
