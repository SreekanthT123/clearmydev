import { runAI } from "../ai/ai.executor.js";
import { SYSTEM_PROMPT } from "./json.prompt.js";

export async function validatejson(json) {
  try {
    const parsed = JSON.parse(json);
    const formatted = JSON.stringify(parsed, null, 2);

    return {
      valid: true,
      formatted,
    };
  } catch (err) {
    return {
      valid: false,
      error: err.message,
    };
  }
}

export async function fixJsonWithAI(json,userId) {
  const userPrompt = `
    Broken JSON:
    ${json}`;

  const parsed = await runAI({
    systemPrompt: SYSTEM_PROMPT,
    userPrompt,
    userId
  });

  return {
    fixed: parsed,
    explanation: "JSON syntax errors were fixed without changing data.",
    error: null,
  };
}
