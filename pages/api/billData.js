import  HttpStatus  from "http-status-codes";
import nextConnect from 'next-connect'
import middleware from '../../middleware/middleware'
const handler = nextConnect();

handler.use(middleware);

handler.post(async(req, res) => {
  try {
    const files = req.files;
    const body = req.body;
    res.status(HttpStatus.OK).json(body);

  }
  catch (err) {
    res.status(HttpStatus.BAD_REQUEST).json({error:err.message});
  }
})

handler.get(
  async (req, res) => {
    res.status(HttpStatus.OK).json({"name":'ayush'})
  }
)
 
export const config = {
  api : {
    bodyParser : false,
  },
}


export default handler
