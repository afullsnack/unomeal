import mongoose from "mongoose";
// require('dotenv').config();

async function dbConnection() {
  try {
    let connection = {};
    const db = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (connection.isConnected) return;
    connection.isConnected = db.connections[0].readyState;
    // let Notes = db.collection("notes");
    console.log(connection.isConnected);
    return db.connections[0];
  } catch (err) {
    console.log(err.message || err.toString());
  }
}

export default dbConnection;

// Model a makeshift database colleection

const stores = [
  {
    id: "",
    name: "",
    location: "",
    coverImg: "",
    logoImg: "",
    type: "restaurant or chef",
    shareCount: null,
    reviewCount: null,
    followCount: null,
  },
];

const categories = [
  {
    id: "",
    name: "",
    _storeId: "",
  },
];

const menu_item = [
  {
    id: "",
    name: "",
    price: null,
    variation: null,
    topping: null,
    options: null,
    imgUrl: "",
    tag: "enum: MTO | RTE",
    _storeId: "",
    _categoryId: "",
  },
];

const review = [
  {
    id: "",
    author: "",
    authorImg: "",
    content: "",
    _storeId: "",
    _authorId: "",
  },
];

const follows = [
  {
    id: "",
    _storeId: "",
    _userId: "",
  },
];
