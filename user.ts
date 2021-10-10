// INTERSECTION
// accountInfo
// charInfo

type AccountInfo = {
  id: number;
  name: string;
  email?: string;
};

const account: AccountInfo = {
  id: 123,
  name: "Emersson",
  email: "emersson@gmail.com",
};

type CharInfo = {
  nickname: string;
  level: number;
};

const char: CharInfo = {
  nickname: "Cardim",
  level: 100,
};

type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: 1234,
  level: 20,
  name: "Emersson",
  nickname: "Cardim",
};
