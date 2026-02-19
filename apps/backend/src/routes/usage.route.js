import express from "express";
import { protect } from "../middleware/auth.middleware.js";
import { User } from "../models/user.model.js";

const router = express.Router();

const DAILY_LIMIT = 30;

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

router.get("/", protect, async (req, res) => {
  const user = await User.findById(req.usedId);

  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const today = getToday();

  let used = 0;

  if (user.usageDate === today) {
    used = user.dailyUsageCount;
  }

  res.json({
    limit: DAILY_LIMIT,
    used,
    remaining: DAILY_LIMIT - used,
  });
});

export default router;
