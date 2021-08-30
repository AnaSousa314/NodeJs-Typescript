import {Router,Response,Request} from 'express'

const router = Router();

router.get('/',(req:Request,res:Response)=>{
  res.render('home');
});

router.get('/contato',(req:Request,res:Response)=>{
  res.send(`Formulario de Contato`);
});

router.get('/sobre',(req:Request,res:Response)=>{
  res.send("Página institucional sobre a empresa");
});

export default router;