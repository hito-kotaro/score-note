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
  changeContentId: (id: number) => void;
  clearPlayerList: () => void;
  continueData: () => void;
}
export const ContinueDialog: FC<Props> = (props) => {
  const {
    isOpen,
    handleClose,
    snackbarHandleOpen,
    changeContentId,
    clearPlayerList,
    continueData,
  } = props;
  const removeLocalStorage = () => {
    localStorage.removeItem("score");
    localStorage.removeItem("player");
  };

  return (
    <Dialog onClose={handleClose} open={isOpen}>
      <Box>
        <DialogTitle>前回のデータが残っています。</DialogTitle>
        <DialogContent className="flex justify-center">
          「はじめから」を選択した場合、データは削除され復元できません。
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="orange"
            onClick={() => {
              continueData();
              snackbarHandleOpen();
              changeContentId(1);
              handleClose();
            }}
          >
            途中から遊ぶ
          </Button>
          <Button
            variant="contained"
            color="green"
            onClick={() => {
              removeLocalStorage();
              clearPlayerList();
              changeContentId(0);
              handleClose();
            }}
          >
            はじめから
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
