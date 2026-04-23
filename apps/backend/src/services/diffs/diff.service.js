import { runAI } from "../ai/ai.executor.js";
import { SYSTEM_PROMPT } from "./diff.prompt.js";

export async function explainDiff(before, after, context, userId) {
  //   const client = getOpenAIClient();

  const userPrompt = `
    Before:
    ${before}
    
    After:
    ${after}
    
    Context:
    ${context || "Not specified"}`;

  //   const response = await client.chat.completions.create({
  //     model: "gpt-4o-mini",
  //     temperature: 0,
  //     messages: [
  //       { role: "system", content: SYSTEM_PROMPT },
  //       { role: "user", content: userPrompt },
  //     ],
  //   });

  //   const content = response.choices[0].message.content;

  try {
    const parsed = await runAI({
      systemPrompt: SYSTEM_PROMPT,
      userPrompt,
      userId,
    });
    return {
      summary: String(parsed.summary || ""),
      key_changes:
        typeof parsed.key_changes === "string"
          ? parsed.key_changes
          : JSON.stringify(parsed.key_changes),
      risk_areas: String(parsed.risk_areas || "Quota issue"),
      what_to_check: String(parsed.what_to_check || "Quota issue"),
    };
  } catch {
    throw new Error("Invalid AI response");
  }
}
