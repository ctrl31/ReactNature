import{Familia} from '../models/index.js';
import {getFilePath} from '../utils/index.js'; 

export const create=(req,res)=>{  
      const familia = new Familia(req.body);
      familia.creator = req.user._id;
      if (req.body.participants) {
        familia.participants = JSON.parse(req.body.participants);
      }

      if(req.files.image){
         const imagePath = getFilePath(req.files.image);
         familia.image = imagePath;
     }
     familia.save()
         .then((familia)=>{
             res.status(201).json(familia);
         })
         .catch((error)=>{
             res.status(500).json({error:error.message});
         });
};

export const getFamilia = (req, res) => {
   res.send('Familia encontrada');
 };
 export const getMessage = (req, res) => {
  res.send('Este es un mensaje de prueba');
};
export const ensureAuth = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: 'No autorizado' });
  }
  next();
};
 
 