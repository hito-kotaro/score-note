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
  handleOpenDialog?: () => void;
  handleCloseDialog?: () => void;
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
    handleOpenDialog,
    handleCloseDialog,
    anchorEl,
    resetScore,
    changeContentId,
    clearPlayerList,
    needMenu,
  } = props;
  return (
    <Box className="bg-white p-2 rounded-b-lg drop-shadow-lg flex justify-between">
      <Box className="bg-primary h-10 w-10 rounded-lg text-3xl text-white flex justify-center items-center">
        S
      </Box>
      <Box className="flex justify-around ">
        {needMenu ? (
          <>
            <IconButton onClick={handleMenuClick}>
              <MenuIcon fontSize="medium" />
            </IconButton>
            <HeaderMenu
              isOpen={menuIsOpen!}
              anchorEl={anchorEl!}
              handleClose={handleMenuClose!}
              resetScore={resetScore!}
              openFinishDialog={handleOpenDialog!}
            />
            <FinishDialog
              isOpen={dialogIsOpen!}
              onCloseDialog={handleCloseDialog!}
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
