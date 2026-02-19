import express from "express";
import { explainError } from "../services/errors/error.service.js";
import { ok, fail } from "../utils/response.js";

const router = express.Router();
const MAX_INPUT = 12000;

router.post("/explain-error", async (req, res) => {
  const { errorText, framework } = req.body;

  if (!errorText || errorText.trim().length === 0) {
    return fail(res, 400, "Error text is required");
  }

  if (errorText.length > MAX_INPUT) {
    // return res.status(400).json({
    //   error:
    //     "Input too large. Please paste only the relevant portion of the error.",
    // });
    return fail(
      res,
      400,
      "Input too large. Please paste only the relevant portion of the error.",
    );
  }

  try {
    const result = await explainError(errorText, framework, req.usedId);
    return ok(res, result);
  } catch (err) {
    return fail(res, 500, "Unable to explain this error.");
  }
});

export default router;
