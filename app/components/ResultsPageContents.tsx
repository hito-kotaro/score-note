import { Box, Button } from "@mui/material";
import { Player } from "../types/player";
import { FC } from "react";
import { GameHeader } from "./molcules/GameHeader/GameHeader";
import { FinishDialog } from "./molcules/FinishDialog/FinishDialog";
import { useFinishDialog } from "./molcules/FinishDialog/useFinishDialog";
import { SimplePlayerListItem } from "./molcules/SimplePlayerListItem/SimplePlayerListItem";

interface Props {
  playerList: Player[];
  changeContentId: (id: number) => void;
  clearPlayerList: () => void;
}

const ResultPageContents: FC<Props> = (props) => {
  const { playerList, changeContentId, clearPlayerList } = props;
  const { isOpen, onOpenDialog, onCloseDialog } = useFinishDialog();

  return (
    <Box>
      {/*Header*/}
      <GameHeader needMenu={false} />

      {/*Buttons*/}
      <Box>
        <Box className="mt-6 flex justify-center">
          <Box className="w-1/2">
            <Button
              fullWidth
              className="bg-primary hover:bg-primary text-white"
              onClick={() => {
                changeContentId(1);
              }}
            >
              ゲームに戻る
            </Button>
            <Button
              fullWidth
              className="mt-3 bg-secondary hover:bg-secondary text-white"
              onClick={onOpenDialog}
            >
              ゲーム終了
            </Button>
          </Box>
        </Box>
      </Box>

      {/*Dialog*/}
      <FinishDialog
        isOpen={isOpen}
        onCloseDialog={onCloseDialog}
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
