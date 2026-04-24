import dotenv from "dotenv";
dotenv.config();

import { requireEnv } from "./config/env.js";

requireEnv("OPENAI_API_KEY");
requireEnv("MONGO_URI");
requireEnv("JWT_SECRET");
requireEnv("GOOGLE_CLIENT_ID");
requireEnv("GOOGLE_CLIENT_SECRET");

import express from "express";
import cors from "cors";
import explainErrorRoutes from "./routes/errors.route.js";
import logsRoutes from "./routes/log.route.js";
import diffRoutes from "./routes/diffs.route.js";
import incidentsRoutes from "./routes/incident.route.js";
import jsonRoutes from "./routes/json.route.js";
import authRoutes from "./routes/auth.route.js";
import usageRoutes from "./routes/usage.route.js";
import { aiLimiter } from "./middleware/ratelimit.js";
import { connectDB } from "./config/db.js";
import { protect } from "./middleware/auth.middleware.js";
import passport from "passport";
import { configurePassport } from "./config/passport.js";
import { fail } from "./utils/response.js";
await connectDB();
configurePassport();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:7700",
    "https://clear-my-dev.netlify.app"
  ],
  credentials: true
}));
app.use(express.json({ limit: "50kb" }));
app.use(passport.initialize());
app.use("/api", aiLimiter);
app.use("/api/errors", protect, explainErrorRoutes);
app.use("/api/logs", protect, logsRoutes);
app.use("/api/diffs", protect, diffRoutes);
app.use("/api/incidents", protect, incidentsRoutes);
app.use("/api/json", protect, jsonRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/usage", usageRoutes);
app.set('trust proxy', 1);
app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);

  // res.status(500).json({
  //   error: "Something went wrong. Please try again later.",
  // });
  return fail(res, 500, "Internal server error");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`ClearMyDev backend running on port ${PORT}`);
});
