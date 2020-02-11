import express from "express";
import container from "../container"
const users = container.users;
const router = express.Router();

router.post("/", async (res, resp, next) => {
  const result = await users.Login(res.body);
  if (result) {
    resp.send(JSON.stringify(result));
  } else resp.send(JSON.stringify({ message: "Login Failed" }));
});

export default router;
