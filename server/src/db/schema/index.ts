import { audioChunks } from "./audio-chuncks.ts";
import { questions } from "./questions.ts";
import { rooms } from "./rooms.ts";

// Barrel file for database schema
export const schema = {
  rooms,
  questions,
  audioChunks,
};
