"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import { objectToArray } from "../utils/objectToArray";
import { Data } from "../types/input";
import { isNotEmptyCheck } from "../utils/isNoteEnptyCheck";
import { Player } from "../types/player";

interface Props {
  changeContentId: (newContentId: number) => void;
	changePlayerList: (newPlayerList: Player[]) => void
}

const HomePageContents: FC<Props> = (props) => {
  const { changeContentId, changePlayerList } = props;
  const [players, setPlayers] = useState(3);
  const [data, setData] = useState<Data>({});
  const [isHeadcountDetermined, setIsHeadcountDetermined] = useState(false);

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
    console.log(data);
    // 配列に変換
    const array = objectToArray(data);

    const newPlayerList = array.map((name: string, id) => {
      console.log(id + "/" + name);
      return { id, name, score: 0, total: 0 };
    });
		changePlayerList(newPlayerList)

    // localStorage.setItem("players", JSON.stringify(data));
    //
    // 全てのキーにあたいが入っていることを確認する
    if (isNotEmptyCheck(data)) {
      console.log("ok go game page");
      changeContentId(1);
    } else {
      //alert
      console.log("name empty");
    }
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
};

export default HomePageContents;
