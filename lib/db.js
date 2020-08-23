import mongoose from 'mongoose';
require('dotenv').config();


// mongoose.connect(MONGO_URL);


// let conx = mongoose.connection;

// conx.on('error', console.error.bind(console, 'connection error:'));

// conx.once('open', function() {

//    // we're connected!

//    console.log("we are connected");

// });


// Model a makeshift database colleection

const stores = [
   {
      id: '',
      name: '',
      location: '',
      coverImg: '',
      logoImg: '',
      type: 'restaurant or chef',
      shareCount: null,
      reviewCount: null,
      followCount: null,
   }
];

const categories = [
   {
      id: '',
      name: '',
     _storeId: '',
   }
];

const menu_item = [
   {
      id: '',
      name: '',
      price: null,
      variation: null,
      topping: null,
      options: null,
      imgUrl: '',
      tag: 'enum: MTO | RTE',
      _storeId: '',
      _categoryId: '',
   }
];

const review = [
   {
      id: '',
      author: '',
      authorImg: '',
      content: '',
      _storeId: '',
      _authorId: '',
   }
];

const follows = [
   {
      id: '',
      _storeId: '',
      _userId: '',
   }
];