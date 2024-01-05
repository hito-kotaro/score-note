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
  onCloseDialog: () => void;
  changeContentId: (id: number) => void;
  clearPlayerList: () => void;
}
export const FinishDialog: FC<Props> = (props) => {
  const { isOpen, onCloseDialog, changeContentId, clearPlayerList } = props;

  const removeLocalStorage = () => {
    localStorage.removeItem("score");
    localStorage.removeItem("player");
  };

  return (
    <Dialog onClose={onCloseDialog} open={isOpen}>
      <Box>
        <DialogTitle>ゲームを終了しますか？</DialogTitle>
        <DialogContent className="flex justify-center">
          終了するとスコアは全て削除され復元できません。
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="orange"
            onClick={() => {
              removeLocalStorage();
              clearPlayerList();
              changeContentId(0);
            }}
          >
            終了
          </Button>
          <Button
            variant="contained"
            color="green"
            onClick={() => {
              onCloseDialog();
            }}
          >
            ゲームに戻る
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
