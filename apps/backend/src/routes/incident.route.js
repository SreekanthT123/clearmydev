import express from "express";
import { explainIncident } from "../services/incidents/incident.service.js";
import { ok, fail } from "../utils/response.js";

const router = express.Router();
const MAX_INPUT = 12000;
router.post("/explain-incident", async (req, res) => {
  const { description, logs, errors, changes, context } = req.body;

  if (!description || typeof description !== "string" || !description.trim()) {
    // return res.status(400).json({
    //   error: "Incident description is required",
    // });
    return fail(res, 400, "Incident description is required");
  }

  if (
    description.length > MAX_INPUT ||
    logs.length > MAX_INPUT ||
    errors.length > MAX_INPUT ||
    changes.length > MAX_INPUT
  ) {
    return fail(
          res,
          400,
          "Input too large. Please paste only the relevant portion of the incident.",
        );
  }

  try {
    const usedId = req.usedId;
    const result = await explainIncident({
      description,
      logs,
      errors,
      changes,
      context,
      usedId,
    });
    return ok(res, result);
  } catch {
    // res.status(500).json({
    //   error: "Unable to explain incident",
    // });
    return fail(res, 500, "Unable to explain this incident.");
  }
});

export default router;
