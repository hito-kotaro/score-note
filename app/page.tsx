"use client";
import { Box, Button } from "@mui/material";
import { ScorePageContents } from "./components/ScorePageContents";
import { ResultPageContents } from "./components/ResultsPageContents";
import { NotFoundPageContents } from "./components/NotFoundPageContents";
import HomePageContents from "./components/HomePageContents";
import GamePageComponents from "./components/GamePageContents";
import { useContentId } from "./components/hooks/useContentId";
import { usePlayer } from "./components/hooks/usePlayer";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

const Page = () => {
  const { contentId, changeContentId } = useContentId();
  const {
    playerList,
    playerName,
    onChangePlayerName,
    addPlayer,
    removePlayer,
    addScore,
    substructScore,
    clearScore,
		saveScore,
  } = usePlayer();

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box>
          {contentId === 0 ? (
            <HomePageContents
              changeContentId={changeContentId}
              playerList={playerList}
              playerName={playerName}
              onChangePlayerName={onChangePlayerName}
              addPlayer={addPlayer}
              removePlayer={removePlayer}
            />
          ) : (
            ""
          )}
          {contentId === 1 ? (
            <GamePageComponents
              clearScore={clearScore}
              playerList={playerList}
              addScore={addScore}
              substructScore={substructScore}
							saveScore={saveScore}
            />
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
    </ThemeProvider>
  );
};

export default Page;
