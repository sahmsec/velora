import { MongoClient } from "mongodb";
import dns from "node:dns";

dns.setServers(['8.8.8.8', '8.8.4.4']);

if (!process.env.MONGODB_URI) {
  console.warn('Invalid/Missing environment variable: "MONGODB_URI"');
}

// Get DB name from URI or fallback to velora
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017/velora";
const options = {
  family: 4 // Force IPv4 to prevent querySrv ECONNREFUSED on some networks
};

let client;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClient) {
    global._mongoClient = new MongoClient(uri, options);
    global._mongoClient.connect().catch(console.error);
  }
  client = global._mongoClient;
} else {
  client = new MongoClient(uri, options);
  client.connect().catch(console.error);
}

export const db = client.db();
export default client;
