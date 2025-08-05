import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { env } from "./env.ts";
import { getRoomsRoute } from "./http/routes/get-rooms.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "http://localhost:5173",
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.register(getRoomsRoute);

app
  .listen({ port: env.PORT })
  .then(() => {
    // biome-ignore lint/suspicious/noConsole: console is used for logging server start
    console.log("Server is running 🚀");
  })
  .catch((err) => {
    // biome-ignore lint/suspicious/noConsole: console is used for logging errors
    console.error("Error starting server:", err);
  });
