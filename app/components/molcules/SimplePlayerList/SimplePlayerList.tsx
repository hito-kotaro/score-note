import { Player } from "@/app/types/player";
import { Box } from "@mui/material";
import { FC } from "react";
import { SimplePlayerListItem } from "../SimplePlayerListItem/SimplePlayerListItem";

interface Props {
  score: Player[];
  label: string;
}
export const SimplePlayerList: FC<Props> = (props) => {
  const { score, label } = props;
  return (
    <Box>
      <Box className="text-xl font-semibold text-secondary">{label}</Box>

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
