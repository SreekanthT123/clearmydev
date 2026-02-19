import { getOpenAICLient } from "./ai.client.js";
import { checkAndIncrementUsage } from "../general/usage.service.js";

export async function runAI({ systemPrompt, userPrompt, userId }) {
  console.log("system prompt", systemPrompt);
  console.log("User prompt", userPrompt);

  const usage = await checkAndIncrementUsage(userId);
  if (!usage.allowed) {
    return {
      meaning: "Daily limit reached",
      cause: "You have used all free AI requests for today.",
      check: "Please come back tomorrow.",
      mistake: "",
    };
  }
  //   if (!systemPrompt || typeof systemPrompt !== "string") {
  //     throw new Error("systemPrompt must be a non-empty string");
  //   }

  //   if (!userPrompt || typeof userPrompt !== "string") {
  //     throw new Error("userPrompt must be a non-empty string");
  //   }

  try {
    console.log("inside executor");

    const client = getOpenAICLient();

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: trimInput(userPrompt) },
      ],
    });

    const content = response.choices[0].message.content;
    console.log("contentttttt", content);

    return JSON.parse(content);
  } catch (err) {
    console.log("AI error caught in executor", err);

    // OpenAI quota / billing error
    // if (
    //   err?.code === "insufficient_quota" ||
    //   err?.error?.code === "insufficient_quota"
    // ) {
    //   return {
    //     meaning: "AI quota exhausted",
    //     cause: "OpenAI usage limit reached",
    //     check: "Add billing or wait for quota reset",
    //     mistake: "",
    //   };
    // }

    // Invalid JSON or other AI failure
    throw new Error("AI execution failed");
  }
}

function trimInput(text, max = 8000) {
  if (!text) return "";
  if (text.length <= max) return text;
  return text.slice(0, max) + "\n\n[Truncated for length]";
}
