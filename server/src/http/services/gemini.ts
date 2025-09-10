import { GoogleGenAI } from "@google/genai";
import { env } from "../../env.ts";

const gemini = new GoogleGenAI({
  apiKey: env.GEMINI_API_KEY,
});

const model = "gemini-2.5-flash";

export async function transcribeAudio(audioAsBase64: string, mimeType: string) {
  const response = await gemini.models.generateContent({
    model,
    contents: [
      {
        text: "Transcreva o áudio para português do Brasil. Seja preciso e natural na transcrição. Mantenha a pontuação correta e divida o texto em parágrafos.",
      },
      {
        inlineData: {
          mimeType,
          data: audioAsBase64,
        },
      },
    ],
  });

  if (!response.text) {
    throw new Error("No transcription found in response");
  }

  return response.text;
}

export async function generateEmbeddings(text: string) {
  const response = await gemini.models.embedContent({
    model: "text-embedding-004",
    contents: [{ text }],
    config: { taskType: "RETRIEVAL_DOCUMENT" },
  });

  if (!response.embeddings?.[0].values) {
    throw new Error("No embeddings found in response");
  }

  return response.embeddings[0].values;
}

export async function gerenateAnswer(
  question: string,
  transcriptions: string[]
) {
  const context = transcriptions.join("\n\n---\n\n");

  const prompt =
    `Você é um assistente de perguntas e respostas. Use o contexto abaixo para responder a pergunta em português do Brasil.

    CONTEXTO:
    ${context}

    PERGUNTA:
    ${question}

    INSTRUÇÕES:
    - Se você não souber a resposta, diga "Desculpe, não tenho informações o suficiente.";
    - Seja breve e direto ao ponto;
    - Use apenas informações do contexto fornecido;
    - Responda em português do Brasil.
    - Mantenha a formatação do texto, incluindo listas, negrito, itálico e links, se houver.
    - Se for citar o contexto, utilize o termo "De acordo com o conteúdo da aula".
    `.trim();

  const response = await gemini.models.generateContent({
    model,
    contents: [
      {
        text: prompt,
      },
    ],
  });

  if (!response.text) {
    throw new Error("No answer found in response Gemini");
  }

  return response.text;
}
