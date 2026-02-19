import express from "express";
import { explainDiff } from "../services/diffs/diff.service.js";
// import { User } from "../models/user.model.js";
import { ok, fail } from "../utils/response.js";


const router = express.Router();
const MAX_INPUT = 12000;
router.post("/explain-diff", async (req, res) => {
  const { before, after, context } = req.body;

  if (
    !before ||
    !after ||
    typeof before !== "string" ||
    typeof after !== "string" ||
    !before.trim() ||
    !after.trim()
  ) {
    // return res.status(400).json({
    //   error: "Both before and after inputs are required",
    // });
    return fail(res, 400, "Both before and after inputs are required");
  }
  if (before.length > MAX_INPUT || after.length > MAX_INPUT) {
    // return res.status(400).json({
    //   error:
    //     "Input too large. Please paste only the relevant portion of the error.",
    // });
    return fail(
          res,
          400,
          "Input too large. Please paste only the relevant portion.",
        );
  }

  try {
    const result = await explainDiff(before, after, context, req.usedId);
    return ok(res, result);
  } catch {
    return fail(res, 500, "Unable to explain this diff.");
  }
});

// router.get("/test-user", async (req, res) => {
//   const user = await User.create({
//     email: "test@example.com",
//     name: "Test User"
//   });

//   res.json(user);
// });

export default router;
