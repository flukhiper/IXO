import mongoose from 'mongoose';

export async function initMongo (uri: string) {
  await mongoose.connect(uri);
  await mongoose.connection.db?.admin().command({ ping: 1 });
  console.log('Pinged your deployment. You successfully connected to MongoDB!');
}

export async function disconnectMongo () {
  await mongoose.disconnect();
}