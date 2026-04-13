import OpenAI from "openai";

export default async function handler(req, res) {
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  const userMessage = req.body.message;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Wewe ni AI msaidizi mzuri na rafiki." },
      { role: "user", content: userMessage }
    ]
  });

  res.status(200).json({
    reply: response.choices[0].message.content
  });
                                      }
