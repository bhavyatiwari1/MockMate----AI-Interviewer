/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_QPVKI69xhRrU@ep-floral-breeze-a4zzzcy8-pooler.us-east-1.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };