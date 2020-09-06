import Cart from "../../lib/cart";
import { withSession, expressSession } from "next-session";
import dbConnection from "../../lib/db";
import Note from "../../models/Note";

const MongoStore = require("connect-mongo")(expressSession);
const conx = dbConnection();

const options = {};

async function handler(req, res) {
  // console.log(req.method, req.body);
  try {
    options = {
      name: "unomeal.sid",
      secret: "sessionSecret",
      store: new MongoStore({
        mongooseConnection: conx,
        ttl: 14 * 24 * 60 * 60,
      }),
      cookie: {
        httpOnly: true,
        maxAge: 14 * 24 * 60 * 60, // expires in 14 days
      },
    };

    let cart = new Cart(req.session.cart ? req.session.cart : {});
    switch (req.method) {
      case "POST":
        const {
          body: {
            name,
            price,
            variation,
            qty,
            totalPrice,
            options,
            prodId,
            store_id,
          },
        } = req;

        cart.add(
          { name, price, variation, id: prodId },
          prodId,
          qty,
          totalPrice,
          options,
          store_id
        );
        req.session.cart = cart;

        res.status(200).json({
          cartItems: cart.generateArray(),
          totalPrice: cart.totalPrice,
          totalQty: cart.totalQty,
          message: "DONE",
        });
        break;

      case "DELETE":
        const {
          query: { itemId },
        } = req;
        // let cart = new Cart(req.session.cart? req.session.cart : {});
        cart.removeItem(itemId);
        req.session.cart = cart;
        res.status(200).json({
          cartItems: cart.generateArray(),
          totalPrice: cart.totalPrice,
          totalQty: cart.totalQty,
          message: "DONE",
        });
        break;

      default:
        if (!req.session.cart) {
          res.status(200).json({
            cartItems: [],
            totalPrice: 0,
            totalQty: 0,
            message: "DONE",
          });
          break;
        }
        // let cart = new Cart(req.session.cart);

        res.status(200).json({
          cartItems: cart.generateArray(),
          totalPrice: cart.totalPrice,
          totalQty: cart.totalQty,
          message: "DONE",
        });
        break;
    }
  } catch (err) {
    res.json({ error: err.message || err.toString() });
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};

export default withSession(handler, options);
