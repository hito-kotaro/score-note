import { Box } from "@mui/material";
import { FC } from "react";

interface Props {
  name: string;
  score: number;
}
export const SimplePlayerListItem: FC<Props> = (props) => {
  const { name, score } = props;
  return (
    <Box className="flex justify-between text-primary bg-white rounded-lg px-3 py-1 drop-shadow-sm">
      <Box className="text-lg">{name}</Box>
      <Box className="text-lg text-secondary">{score}</Box>
    </Box>
  );
};
