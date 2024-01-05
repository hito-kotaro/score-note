import { Box, Button } from "@mui/material";
import { Player } from "../types/player";
import { FC } from "react";
import { GameHeader } from "./molcules/GameHeader/GameHeader";
import { FinishDialog } from "./molcules/FinishDialog/FinishDialog";
import { SimplePlayerListItem } from "./molcules/SimplePlayerListItem/SimplePlayerListItem";
import { useDialog } from "./hooks/useDialog";

interface Props {
  playerList: Player[];
  changeContentId: (id: number) => void;
  clearPlayerList: () => void;
}

const ResultPageContents: FC<Props> = (props) => {
  const { playerList, changeContentId, clearPlayerList } = props;
  const { isOpen, handleOpen, handleClose } = useDialog();

  return (
    <Box>
      {/*Header*/}
      <GameHeader needMenu={false} />

      {/*Buttons*/}
      <Box>
        <Box className="mt-6 flex justify-center">
          <Box className="w-1/2">
            <Box>
              <Button
                variant="contained"
                color="green"
                fullWidth
                onClick={() => {
                  changeContentId(1);
                }}
              >
                ゲームに戻る
              </Button>
            </Box>
            <Box className="mt-3">
              <Button
                variant="contained"
                color="orange"
                fullWidth
                onClick={handleOpen}
              >
                ゲーム終了
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/*Dialog*/}
      <FinishDialog
        isOpen={isOpen}
        onCloseDialog={handleClose}
        changeContentId={changeContentId}
        clearPlayerList={clearPlayerList}
      />

      {/*PlayerList*/}
      <Box className="mt-6">
        <Box className="text-xl font-semibold text-secondary">最終結果</Box>
        {playerList.map((p: Player) => {
          return (
            <SimplePlayerListItem key={p.id} name={p.name} score={p.total} />
          );
        })}
      </Box>
    </Box>
  );
};

export default ResultPageContents;
