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

  return {
    playerList,
    playerName,
    onChangePlayerName,
    addPlayer,
    removePlayer,
    changePlayerList,
    addScore,
    substructScore,
  };
};
