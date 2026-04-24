import { runAI } from "../ai/ai.executor.js";
import { SYSTEM_PROMPT_LOG } from "./log.prompt.js";

export async function explainLog(logs, context,userId) {
  const userPrompt = `
Context: ${context || "Not specified"}

Logs:
${logs}
`;

  const parsed = await runAI({
    systemPrompt: SYSTEM_PROMPT_LOG,
    userPrompt,
    userId
  });

  return {
    summary: parsed.summary || "",
    timeline: parsed.timeline || ["No timeline available"],
    failure_point: parsed.failure_point || "No failure point identified",
    next_step: parsed.next_step || "No next step identified",
  };
}
