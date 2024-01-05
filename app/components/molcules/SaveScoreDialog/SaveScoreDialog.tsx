import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FC } from "react";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  snackbarHandleOpen: () => void;
  saveScore: () => void;
}
export const SaveScoreDialog: FC<Props> = (props) => {
  const { isOpen, handleClose, snackbarHandleOpen, saveScore } = props;

  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <Box>
        <DialogTitle>このセットのスコアを記録しますか?</DialogTitle>
        <DialogContent className="flex justify-center">
          記録したスコアを修正することはできません。
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="orange"
            onClick={() => {
              snackbarHandleOpen();
              saveScore();
              handleClose();
            }}
          >
            記録
          </Button>
          <Button
            variant="contained"
						color='green'
            onClick={() => {
              handleClose();
            }}
          >
            ゲームに戻る
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
