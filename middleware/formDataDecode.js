import {formidable} from 'formidable';

const form = formidable({multiples:true});

export default async function parseFormData(req,res,next) {
  
  form.parse(req,( err, fields, files) => {
    if(!err){
      req.body = fields;
      req.files = files;
    }
    // return res.status(200).json({'message':'failed'});
    next();
  });

}