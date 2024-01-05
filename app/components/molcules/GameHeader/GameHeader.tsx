import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderMenu } from "../HeaderMenu/HeaderMenu";
import { FinishDialog } from "../FinishDialog/FinishDialog";
import { FC } from "react";

interface Props {
  handleMenuClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleMenuClose?: () => void;
  menuIsOpen?: boolean;
  dialogIsOpen?: boolean;
  onOpenDialog?: () => void;
  onCloseDialog?: () => void;
  anchorEl?: null | HTMLElement;
  resetScore?: () => void;
  changeContentId?: (id: number) => void;
  clearPlayerList?: () => void;
  needMenu: boolean;
}

export const GameHeader: FC<Props> = (props) => {
  const {
    handleMenuClose,
    handleMenuClick,
    menuIsOpen,
    dialogIsOpen,
    onOpenDialog,
    onCloseDialog,
    anchorEl,
    resetScore,
    changeContentId,
    clearPlayerList,
    needMenu,
  } = props;
  return (
    <Box className="bg-white p-2 rounded-b-lg drop-shadow-lg flex justify-between">
      <Box className="bg-primary h-14 w-14 rounded-lg text-5xl text-white flex justify-center items-center">
        S
      </Box>
      <Box className="flex justify-around ">
        {needMenu ? (
          <>
            <IconButton onClick={handleMenuClick}>
              <MenuIcon fontSize="large" />
            </IconButton>
            <HeaderMenu
              isOpen={menuIsOpen!}
              anchorEl={anchorEl!}
              handleClose={handleMenuClose!}
              resetScore={resetScore!}
              openFinishDialog={onOpenDialog!}
            />
            <FinishDialog
              isOpen={dialogIsOpen!}
              onCloseDialog={onCloseDialog!}
              changeContentId={changeContentId!}
              clearPlayerList={clearPlayerList!}
            />
          </>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};
