import client from "../db/client";

type User = {
  id: number;
  username: string;
  passwordDigest: string;
};
