import app from "./src/controller/http/express";
import { Connect } from "./src/controller/db/db";
import "dotenv/config";

const hostname = process.env.DB_HOSTNAME || "localhost";
const password = process.env.DB_PASSWORD || "admin";
const database = process.env.DB_DATABASE || "postgres";
const port = process.env.DB_PORT || 5432;
const user = process.env.DB_USER || "admin";

// console.log(process.env);
await Connect({ hostname, password, database, port, user });
