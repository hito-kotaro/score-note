"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface Data {
  [key: string]: string;
}

export default function Home() {
  const [players, setPlayers] = useState(3);
  const [data, setData] = useState<Data>({});
  const [isHeadcountDetermined, setIsHeadcountDetermined] = useState(false);
  const router = useRouter();

  const changePlayer = (increment: boolean) => {
    if (increment) {
      setPlayers(players + 1);
    } else {
      setPlayers(players - 1);
    }
  };

  const headcountDetermined = (flag: boolean) => {
    console.log(players);
    if (flag) {
      let emptyData: Data = {};
      [...Array(players)].map((_, key) => {
        console.log(key + "+" + key);
        emptyData = { ...emptyData, [key]: "" };
      });
      setData(emptyData);
    }
    setIsHeadcountDetermined(flag);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key: string = e.target.name;
    const value: string = e.target.value;
    console.log(key + "/" + value);
    const newData: Data = { ...data, [key]: value };
    setData(newData);
  };

  const onSubmitPlayer = () => {
    localStorage.setItem("players", JSON.stringify(data));
    // 全てのキーにあたいが入っていることを確認する
    if (isNotEmptyCheck()) {
      console.log("ok go game page");
      router.push("/game");
    } else {
      //alert
      console.log("name empty");
    }
  };

  // 全てのvalueがemptyでなければtrueを返す
  const isNotEmptyCheck = () => {
    return Object.values(data).every((value) => value !== "");
  };

  return (
    <Box>
      <Typography variant="h3" className="text-primary text-center">
        ScoreNote
      </Typography>

      <Box className="mt-6">
        <Box>
          <Typography variant="h6" className="text-primary text-center">
            プレイ人数
          </Typography>
          <Typography variant="h4" className="text-primary text-center">
            {players}
          </Typography>
        </Box>
        {!isHeadcountDetermined ? (
          <Box>
            <Box className="flex justify-around">
              <Button
                variant="contained"
                className="bg-primary text-white"
                onClick={() => changePlayer(true)}
              >
                増やす
              </Button>
              <Button
                variant="outlined"
                className="bg-white border-primary text-primary"
                onClick={() => changePlayer(false)}
              >
                減らす
              </Button>
            </Box>

            <Box className="mt-6 flex justify-center">
              <Button
                variant="contained"
                className="bg-primary text-white"
                onClick={() => headcountDetermined(true)}
              >
                人数を確定
              </Button>
            </Box>
          </Box>
        ) : (
          ""
        )}
      </Box>

      {isHeadcountDetermined ? (
        <Box className="mt-6 px-3">
          {[...Array(players)].map((i, key) => (
            <Box key={key} className="mt-3">
              <TextField
                key={i}
                name={String(key)}
                value={data[key] || ""}
                onChange={onChange}
                variant="standard"
                color="success"
                focused
                placeholder="プレイヤー名を入力"
                className="w-full"
                sx={{ color: "red" }}
              />
            </Box>
          ))}
        </Box>
      ) : (
        ""
      )}

      {isHeadcountDetermined ? (
        <Box className="mt-6">
          <Box className="flex justify-center">
            <Button
              variant="contained"
              className="bg-primary text-white"
              onClick={onSubmitPlayer}
            >
              ゲーム開始
            </Button>
          </Box>
          <Box className="mt-3 flex justify-center">
            <Button
              variant="outlined"
              className="bg-white border-primary text-primary"
              onClick={() => headcountDetermined(false)}
            >
              人数選択に戻る
            </Button>
          </Box>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}
