// src/example/statConfigUsage.ts
import * as dotenv from 'dotenv';
dotenv.config({
  path: '.env.local'
}); // This loads variables from .env into process.env

import { disconnectMongo, initMongo } from '@/libs/mongodb';

const main = async () => {
  try {
    // 1. Connect to MongoDB
    await initMongo(process.env.MONGO_URI!);

  } finally {
    // Ensures that the client will close when you finish/error
    await disconnectMongo();
  }
};

main();