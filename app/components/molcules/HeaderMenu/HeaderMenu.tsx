import { Menu, MenuItem } from "@mui/material";
import { FC } from "react";

interface Props {
  isOpen: boolean;
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  resetScore: () => void;
  openFinishDialog: () => void;
}
export const HeaderMenu: FC<Props> = (props) => {
  const { isOpen, anchorEl, handleClose, resetScore, openFinishDialog } = props;
  return (
    <Menu open={isOpen} anchorEl={anchorEl} onClose={handleClose}>
      <MenuItem
        onClick={() => {
          resetScore();
          handleClose();
        }}
      >
        画面のスコアをリセットする
      </MenuItem>
      <MenuItem
        onClick={() => {
          openFinishDialog();
          handleClose();
        }}
      >
        ゲームを終了
      </MenuItem>
    </Menu>
  );
};
