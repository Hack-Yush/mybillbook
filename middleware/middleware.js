import nextConnect from 'next-connect';
import parseFormData from './formDataDecode'

const middleware = nextConnect();

middleware.use(parseFormData);
export default middleware
