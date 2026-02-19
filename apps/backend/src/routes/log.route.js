import express from "express";
import { explainLog } from "../services/logs/log.service.js";
import { ok, fail } from "../utils/response.js";

const router = express.Router();
const MAX_INPUT = 12000;
router.post("/explain-log", async (req, res) => {
  const { logs, context } = req.body;

  if (!logs || typeof logs !== "string" || !logs.trim()) {
    return fail(res, 400, "Logs input is required");
  }
  if (logs.length > MAX_INPUT) {
    return fail(
      res,
      400,
      "Input too large. Please paste only the relevant portion of the logs.",
    );
  }

  try {
    const result = await explainLog(logs, context, req.usedId);
    return ok(res, result);
  } catch {
    return fail(res, 500, "Unable to explain this logs.");
  }
});

export default router;
