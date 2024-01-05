"use client";
import { Box } from "@mui/material";
import { NotFoundPageContents } from "./components/NotFoundPageContents";
import HomePageContents from "./components/HomePageContents";
import GamePageComponents from "./components/GamePageContents";
import { useContentId } from "./components/hooks/useContentId";
import { usePlayer } from "./components/hooks/usePlayer";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import ScorePageContents from "./components/ScorePageContents";
import ResultPageContents from "./components/ResultsPageContents";

const Page = () => {
  const { contentId, changeContentId } = useContentId();
  const {
    playerList,
    scoreList,
    playerName,
    onChangePlayerName,
    addPlayer,
    removePlayer,
    addScore,
    substructScore,
    clearPlayerList,
    saveScore,
    resetScore,
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
              playerList={playerList}
              scoreList={scoreList}
              addScore={addScore}
              substructScore={substructScore}
              saveScore={saveScore}
              resetScore={resetScore}
              changeContentId={changeContentId}
              clearPlayerList={clearPlayerList}
            />
          ) : (
            ""
          )}
          {contentId === 2 ? (
            <ScorePageContents
              scoreList={scoreList}
              changeContentId={changeContentId}
            />
          ) : (
            ""
          )}
          {contentId === 3 ? (
            <ResultPageContents
              playerList={playerList}
              changeContentId={changeContentId}
              clearPlayerList={clearPlayerList}
            />
          ) : (
            ""
          )}
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
