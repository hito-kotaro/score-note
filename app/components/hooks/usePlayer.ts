import { Player } from "@/app/types/player";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const usePlayer = () => {
  const [playerList, setPlayerList] = useState<Player[]>([]);
  const [playerName, setPlayerName] = useState("");

  const changePlayerList = (newPlayerList: Player[]) => {
    setPlayerList(newPlayerList);
  };

  const onChangePlayerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  const addPlayer = (name: string) => {
    const newPlayer: Player = {
      id: uuidv4(),
      name,
      score: 0,
      total: 0,
    };
    const newPlayerList = [...playerList];
    newPlayerList.push(newPlayer);
    setPlayerList(newPlayerList);
    setPlayerName("");
  };

  const removePlayer = (id: string) => {
    const newPlayerList = playerList.filter((p: Player) => {
      return p.id != id;
    });

    setPlayerList(newPlayerList);
  };

  const updatePlayer = (newPlayerData: Player) => {
    const index = playerList.findIndex(
      (p: Player) => p.id === newPlayerData.id,
    );

    if (index !== undefined) {
      const newPlayerList = [...playerList];
      newPlayerList[index] = newPlayerData;
      changePlayerList(newPlayerList);
      setPlayerList(newPlayerList);
    }
  };

  const clearPlayerList = () => {
    const newPlayerList: Player[] = [];
    setPlayerList(newPlayerList);
  };


  const updateAllPlayer = (newPlayerList: Player[]) => {
    setPlayerList(newPlayerList);
  };

  const addScore = (id: string, add: number) => {
    const currentPlayerData = playerList.find((p: Player) => p.id === id);
    if (currentPlayerData) {
      const newScore = currentPlayerData.score + add;
      const newPlayerData: Player = {
        id: currentPlayerData.id,
        name: currentPlayerData.name,
        score: newScore,
        total: currentPlayerData.total,
      };

      updatePlayer(newPlayerData);
    }
  };

  const substructScore = (id: string, sub: number) => {
    const currentPlayerData = playerList.find((p: Player) => p.id === id);
    if (currentPlayerData) {
      let newScore = currentPlayerData.score;
      if (newScore > 0) {
        newScore -= sub;
      }
      const newPlayerData: Player = {
        id: currentPlayerData.id,
        name: currentPlayerData.name,
        score: newScore,
        total: currentPlayerData.total,
      };

      updatePlayer(newPlayerData);
    }
  };

  const saveScore = () => {
    const currentScoreJson = localStorage.getItem("score");
    // localStorageから存在しないキーを取得するとnullになる
    if (currentScoreJson !== null) {
      const currentScore: Player[][] = JSON.parse(currentScoreJson);

      if (currentScore.length === 0) {
        // 1回目のゲームの場合
        const newScoreList = playerList.map((p: Player) => {
          const player: Player = {
            id: p.id,
            name: p.name,
            score: p.score,
            total: p.score,
          };
          return player;
        });

        const newPlayerList = playerList.map((p: Player) => {
          const player: Player = {
            id: p.id,
            name: p.name,
            score: 0,
            total: p.score,
          };
          return player;
        });

        currentScore.push(newScoreList);
        localStorage.setItem("score", JSON.stringify(currentScore));
        updateAllPlayer(newPlayerList);
        localStorage.setItem("player", JSON.stringify(newPlayerList));
      } else {
        //2回目以降の場合
        const preScore = currentScore[currentScore.length - 1];

        // @ts-ignore
        const newScoreList: Player[] = playerList.map((p: Player) => {
          //対象のidを取得
          const targetScore = preScore.find((s: Player) => {
            return s.id === p.id;
          });

          if (targetScore) {
            const score: Player = {
              id: p.id,
              name: p.name,
              score: p.score,
              total: p.score + targetScore.total,
            };
            return score;
          } else {
            // TODO ここ無駄だけどundefinedが帰る可能性があるって怒られるからつけている
            return playerList;
          }
        });

        // @ts-ignore
        const newPlayerList: Player[] = playerList.map((p: Player) => {
          const targetScore = preScore.find((s: Player) => {
            return s.id === p.id;
          });

          if (targetScore) {
            const player: Player = {
              id: p.id,
              name: p.name,
              score: 0,
              total: p.score + targetScore.total,
            };
            return player;
          }
        });

        currentScore.push(newScoreList);
        localStorage.setItem("score", JSON.stringify(currentScore));
        updateAllPlayer(newPlayerList);
        localStorage.setItem("player", JSON.stringify(newPlayerList));
      }
    }
  };
  const resetScore = () => {
    console.log(playerList);
    const newPlayerList = playerList.map((p: Player) => {
      return {
        id: p.id,
        name: p.name,
        score: 0,
        total: p.total,
      };
    });
    setPlayerList(newPlayerList);
  };

  return {
    playerList,
    playerName,
    clearPlayerList,
    updateAllPlayer,
    onChangePlayerName,
    addPlayer,
    removePlayer,
    changePlayerList,
    addScore,
    substructScore,
    saveScore,
    resetScore,
  };
};
