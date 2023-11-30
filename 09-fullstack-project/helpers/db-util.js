import { MongoClient } from "mongodb";

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://bgoonz:Summer2015@cluster0.wagx0yc.mongodb.net/events?retryWrites=true&w=majority",
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocuments(client, collection, sort) {
  const db = client.db();
  //here .find() without any arguments will return all documents in the collection.
  //sort({ _id: -1 }) this will sort the documents in descending order by id (latest first)
  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
