import express from "express";
import { validatejson, fixJsonWithAI } from "../services/Json/json.service.js";
import { ok, fail } from "../utils/response.js";

const router = express.Router();

router.post("/validate-json", async (req, res) => {
  const { json } = req.body;

  if (!json.trim()) {
    return fail(res, 400, "JSON input is required");
  }
  try {
    const result = await validatejson(json);
    return ok(res, result);
  } catch {
    // res.status(500).json({
    //   error: "Unable to validate json",
    // });
    return fail(res, 500, "Unable to validate json");
  }
});

router.post("/fix-with-ai", async (req,res)=>{
    const {json} = req.body;

    if (!json.trim()) {
    // return res.status(400).json({
    //   error: "JSON input is required",
    // });
    return fail(res, 400, "JSON input is required");
  }
  try {
    const result = await fixJsonWithAI(json,req.usedId);
    return ok(res, result);
  } catch {
    return fail(res, 500, "Unable to fix json");
  }
});

export default router;
