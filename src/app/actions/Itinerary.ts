import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
export async function ITINERARY() {
  const response = await openai.responses.create({
    prompt: {
      id: "pmpt_68c06b14833481979c3df17ab8007d4f0aa18b34c01b7b27",
      version: "2",
    },
  });
  if (!response) {
    throw new Error("No response from OpenAI");
  }
  return response;
}
