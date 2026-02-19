import { runAI } from "../ai/ai.executor.js";
import { SYSTEM_PROMPT_ERROR } from "./error.prompt.js";

export async function explainError(errortext, framework,userId) {
//   console.log("inside service");
//   const openai = getOpenAICLient();

  const userPrompt = `
 Framework:${framework || "Other"}
 Error: ${errortext}`;

//   const response = await openai.chat.completions.create({
//     model: "gpt-4o-mini",
//     temperature: 0,
//     messages: [
//       { role: "system", content: SYSTEM_PROMPT_ERROR },
//       { role: "user", content: userPrompt },
//     ],
//   });

//   const content = response.choices[0].message.content;

//   let parsed;
//   try {
//     parsed = JSON.parse(content);
//   } catch {
//     throw new Error("AI returned invalid json");
//   }
  const result = await runAI({
  systemPrompt: SYSTEM_PROMPT_ERROR,
  userPrompt,
  userId
});
  console.log("Result************",result)
  return {
    meaning: result.meaning || "",
    cause: result.cause || "",
    check: result.check || "",
    mistake: result.mistake || "",
  };
}
