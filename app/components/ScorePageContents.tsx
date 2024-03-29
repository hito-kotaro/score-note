import { Box, Button } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { FC } from "react";
import { GameHeader } from "./molcules/GameHeader/GameHeader";
import { Player } from "../types/player";
import { SimplePlayerList } from "./molcules/SimplePlayerList/SimplePlayerList";

interface Props {
  scoreList: Player[][];
  changeContentId: (id: number) => void;
}

const ScorePageContents: FC<Props> = (props) => {
  const { scoreList, changeContentId } = props;

  return (
    <Box>
      {/*Header*/}
      <GameHeader needMenu={false} />

      {/*Button*/}
      <Box className="mt-6 flex justify-center">
        <Box className="w-1/2">
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
      </Box>

      {/*ScoreList*/}
      <Box className="mt-6 px-2">
        {scoreList.length === 0 ? (
          <Box>
            <Box className="text-center opacity-80 text-gray text-lg font-semibold">
              まだ記録がありません。
            </Box>
            <Box className="flex justify-center opacity-20">
              <SentimentVeryDissatisfiedIcon
                sx={{ width: "200px", height: "200px" }}
                className="text-gray"
              />
            </Box>
          </Box>
        ) : (
          <Box>
            {scoreList.map((score: Player[], index) => {
              return (
                <Box key={index} className="mb-6">
                  <SimplePlayerList
                    score={score}
                    label={`第${index + 1}セット`}
                  />
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ScorePageContents;
