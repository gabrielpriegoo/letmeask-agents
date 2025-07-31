import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";
import {
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { sql } from "./db/connection.ts";
import { env } from "./env.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
	origin: "https://localhost:5173",
});

app.setSerializerCompiler(serializerCompiler);
app.setValidatorCompiler(validatorCompiler);

app.get("/", async () => {
	return { message: "Hello, world!" };
});

app
	.listen({ port: env.PORT })
	.then(() => {
		console.log(`Server is running 🚀`);
	})
	.catch((err) => {
		console.error("Error starting server:", err);
	});
