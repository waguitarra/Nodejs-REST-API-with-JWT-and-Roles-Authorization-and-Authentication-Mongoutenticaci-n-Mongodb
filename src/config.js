import { config } from "dotenv";
config();

export default {
  MONGODB_URI: process.env.MONGODB_URI || "mongodb://localhost/apicompany",
  PORT: process.env.PORT || 8080,
  SECRET: 'products-api'
};
