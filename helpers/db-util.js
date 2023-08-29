import { MongoClient } from "mongodb";

export async function connectDatabase() {
  client = await MongoClient.connect(
    "mongodb+srv://mehdiBa:bbnn21300@cluster0.bg6s64e.mongodb.net/events"
  );
  return client;
}
export async function insertDocument(client, collection, document) {
  const db = client.db("events");
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db("events");

  const documents = await db
    .collection(collection)
    .find()
    //.sort({ _id: -1 })
    .sort(sort)
    .toArray();
  return documents;
}
