// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { withSession } from 'next-session';
const options = {
  name: 'unomeal.sid',
  secret: 'sessionSecret',
  cookie: {
    httpOnly: true,
    maxAge: 14 * 24 * 60 * 60 * 1000, // expires in 14 days
  }
};

const handler = (req, res) => {
  res.statusCode = 200
  res.json({ name: 'John Doe', cart: req.session.cart });
}

export default withSession(handler, options);