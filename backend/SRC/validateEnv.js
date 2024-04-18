import { cleanEnv, port, str } from "envalid";

export default cleanEnv(process.env, {
  PORT: port(),
  Mongo_CONNECTION_STRING: str(),
  Session_SECRET: str(),
});
