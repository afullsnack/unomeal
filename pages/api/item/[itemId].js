import { withSession } from 'next-session';

const options = {
   name: 'unomeal.sid',
   secret: 'sessionSecret',
   cookie: {
      httpOnly: true,
      maxAge: 14 * 24 * 60 * 60, // expires in 14 days
   }
};

const products = [
   {
      id: '_001',
      name: "Product one",
      price: 'variation',
      imgUrl: 'product-img',
      variation: [
         { size: 'small', price: 2300 },
         { size: 'medium', price: 4200 },
         { size: 'large', price: 5900 },
      ],
      _store: 'product-store',
      _category: 'product-category',
      _options: 'product-options',
      _reviews: 'product-reviews',
   },
   {
      id: '_002',
      name: "Product two",
      price: 'variation',
      imgUrl: 'product-img',
      variation: [
         { size: 'small', price: 2300 },
         { size: 'medium', price: 4200 },
         { size: 'large', price: 5900 },
      ],
      _store: 'product-store',
      _category: 'product-category',
      _options: 'product-options',
      _reviews: 'product-reviews',
   },
   {
      id: '_003',
      name: "Product three",
      price: 3200,
      imgUrl: 'product-img',
      variation: null,
      _store: 'product-store',
      _category: 'product-category',
      _options: 'product-options',
      _reviews: 'product-reviews',
   },
   {
      id: '_004',
      name: "Product four",
      price: 1650,
      imgUrl: 'product-img',
      variation: null,
      _store: 'product-store',
      _category: 'product-category',
      _options: 'product-options',
      _reviews: 'product-reviews',
   },
];

function handler(req, res) {
   try {
      if(req.method == "POST") {
         console.log(req.body);
         return res.status(200).json({ message: "DONE" });
      }
         
      if(req.method == "GET"){
         const { itemId } = req.query;
         console.log("ITEM ID", itemId, typeof req.method);
            
         for (const item in products) {
            if (item.id === itemId) {
               const data = products[item];
               console.log(data);
               return res.status(200).json({ data });
            
            }
         }
      }

   } catch(err) {
      res.status(200).json({ message: err.message || err.toString() });
   }
   
}

export const config = {
   api: {
      externalResolver: true
   }
};

export default withSession(handler, options);