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
      imgUrl: '/sides/peppered-gizzard.jpg',
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
      imgUrl: '/sides/peppered-gizzard.jpg',
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
      imgUrl: '/sides/peppered-gizzard.jpg',
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
      imgUrl: '/sides/peppered-gizzard.jpg',
      variation: null,
      _store: 'product-store',
      _category: 'product-category',
      _options: 'product-options',
      _reviews: 'product-reviews',
   },
];

function handler(req, res) {
   try {

      switch(req.method) {
         case "POST":
            console.log(req.body);
            res.status(200).json({ message: "DONE" });
            break;
         
         case "GET":
            const { itemId } = req.query;
            // console.log(req.query);
               
            for (const item of products) {
               // console.log(typeof item.id, typeof itemId);
               if (item.id === itemId) {
                  // console.log(data);
                  res.status(200).json(item);
                  break;
               }
            }
            break;
         
         default:
            res.json({ message: "NO CASE MATCHED"});
            break;
      }
      // if(req.method == "POST") {
      //    console.log(req.body);
      //    return res.status(200).json({ message: "DONE" });
      // }
         
      // if(req.method == "GET"){
      //    const { itemId } = req.query;
      //    console.log("ITEM ID", itemId, typeof req.method);
            
      //    for (const item of products) {
      //       console.log(typeof item.id, typeof itemId);
      //       if (item.id === itemId) {
      //          const data = item;
      //          console.log(data);
      //          return res.status(200).json({ data });
            
      //       }
      //    }
      // }

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