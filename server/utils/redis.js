import { createClient } from "redis";

const config = useRuntimeConfig();

const client = createClient({
  url: config.public.RedisUrl,
});

client
  .connect()
  .then(() => console.log("Connected to Redis"))
  .catch((error) => console.error("Could not connect to Redis:", error));

client.on("error", (err) => console.log("Redis Client Error", err));

export default client;
