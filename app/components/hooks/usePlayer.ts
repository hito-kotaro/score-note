import { Player } from "@/app/types/player";
import { useState } from "react";

export const usePlayer = () => {
  const [playerList, setPlayerList] = useState<Player[]>([]);

  const changePlayerList = (newPlayerList: Player[]) => {
    setPlayerList(newPlayerList);
  };

  const updatePlayer = (id: number, newPlayerData: Player) => {
    const newPlayerList = [...playerList];
    newPlayerList[id] = newPlayerData;

    changePlayerList(newPlayerList);
  };

  const addScore = (id: number, add: number) => {
    console.log(id);
    const currentPlayerData = playerList[id];
    const newScore = currentPlayerData.score + add;
    console.log(currentPlayerData);
    const newPlayerData: Player = {
      id: currentPlayerData.id,
      name: currentPlayerData.name,
      score: newScore,
      total: currentPlayerData.total,
    };

    updatePlayer(id, newPlayerData);
  };

  const substructScore = (id: number, sub: number) => {
    console.log(id);
    const currentPlayerData = playerList[id];
    let newScore = currentPlayerData.score;
    if (newScore > 0) {
      newScore -= sub;
    }
    console.log(currentPlayerData);
    const newPlayerData: Player = {
      id: currentPlayerData.id,
      name: currentPlayerData.name,
      score: newScore,
      total: currentPlayerData.total,
    };

    updatePlayer(id, newPlayerData);
  };

  return { playerList, changePlayerList, addScore, substructScore };
};
