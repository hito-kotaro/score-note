"use client";
import { Box, Button } from "@mui/material";
import { ScorePageContents } from "./components/ScorePageContents";
import { ResultPageContents } from "./components/ResultsPageContents";
import { NotFoundPageContents } from "./components/NotFoundPageContents";
import HomePageContents from "./components/HomePageContents";
import GamePageComponents from "./components/GamePageContents";
import { useContentId } from "./components/hooks/useContentId";
import { usePlayer } from "./components/hooks/usePlayer";

const Page = () => {
  const { contentId, changeContentId } = useContentId();
  const { playerList, changePlayerList, addScore , substructScore} = usePlayer();

  return (
    <Box>
      <Box>
        {contentId === 0 ? (
          <HomePageContents
            changeContentId={changeContentId}
            changePlayerList={changePlayerList}
          />
        ) : (
          ""
        )}
        {contentId === 1 ? (
          <GamePageComponents playerList={playerList} addScore={addScore}  substructScore={substructScore}/>
        ) : (
          ""
        )}
        {contentId === 2 ? <ScorePageContents /> : ""}
        {contentId === 3 ? <ResultPageContents /> : ""}
        {contentId !== 0 &&
        contentId !== 1 &&
        contentId !== 2 &&
        contentId !== 3 ? (
          <NotFoundPageContents />
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
};

export default Page;
