import { Player } from "@/app/types/player";
import { Box } from "@mui/material";
import { FC } from "react";
import { SimplePlayerListItem } from "../SimplePlayerListItem/SimplePlayerListItem";

interface Props {
  score: Player[];
  index: number;
}
export const SimplePlayerList: FC<Props> = (props) => {
  const { score, index } = props;
  return (
    <Box>
      <Box className="text-xl font-semibold text-secondary">
        {`第${index + 1}セット`}
      </Box>

      {score.map((p: Player) => {
        return (
          <Box key={p.id} className="mt-1">
            <SimplePlayerListItem name={p.name} score={p.score} />
          </Box>
        );
      })}
    </Box>
  );
};
