// agent.ts
import { stepCountIs } from "ai";

export default async function ({ model, respond, mcp }) {
  return respond({
    model: model("openai-fast"), // ID модели из каталога Pollinations
    instructions: "Ты — полезный ассистент. Отвечай кратко.",
    tools: await mcp.tools("pollinations"),
    stopWhen: stepCountIs(4),
  });
}
