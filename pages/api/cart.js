

export default (req, res) => {
   if(req.method == "POST"){
      // console.log("This is a POST mothod to this route");
      res.json({message: "This is a POST response"});
   }

   // req.session = { cart: "Cart session data" };

   console.log(res.session);
   res.status(200).json({ cart: "Some cart items or empty object" });
}