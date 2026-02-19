import { runAI } from "../ai/ai.executor.js";
import { SYSTEM_PROMPT } from "./incident.prompt.js";

export async function explainIncident(data) {
  const {
    description,
    logs = "",
    errors = "",
    changes = "",
    context = "Not specified",
    usedId=''
  } = data;

  const userPrompt = `
    Incident Description:
    ${description}
    
    Logs:
    ${logs}
   
    Errors:
    ${errors}

    Recent changes:
    ${changes}

    Context:
    ${context}
    `;

  //   const response = await client.chat.completions.create({
  //     model: "gpt-4o-mini",
  //     temperature: 0,
  //     messages: [
  //       { role: "system", content: SYSTEM_PROMPT },
  //       { role: "user", content: userPrompt },
  //     ],
  //   });

  //   const content = response.choices[0].message.content;

  //   let parsed;
  try {
    const parsed = await runAI({
      systemPrompt: SYSTEM_PROMPT,
      userPrompt,
      usedId
    });
    return {
      summary: String(parsed.summary || ""),
      likely_cause: String(parsed.likely_cause || ""),
      impact: String(parsed.impact || ""),
      next_step: String(parsed.next_step || ""),
    };
  } catch {
    throw new Error("Invalid AI response");
  }
}
