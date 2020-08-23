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
  
  try {

    switch(req.method){
      case 'GET':

        break;

      case 'POST':
        // handle POST requests from user
        break;

      default:
        res.json({ message: "NO CASE MATCHED" });
        break;
    }

  } catch(err) {
    res.json(200).json({ message: err.message || err.tostring() });
  }

}


export const config = {
  api: {
    externalResolver: true,
  }
};

export default withSession(handler, options);