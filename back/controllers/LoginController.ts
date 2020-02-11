import express from "express";
import UserContext from "../Models/contexts/UserContext";
const router = express.Router();

router.post("/", async (res, resp, next) => {
  const result = await UserContext.login(res.body);
  if (result) {
    resp.send(JSON.stringify(result));
  } else resp.send(JSON.stringify({ message: "Login Failed" }));
});

export default router;
