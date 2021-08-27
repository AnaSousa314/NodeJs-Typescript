import express,{Request,Response} from 'express';

const server = express();

server.get('/',(req:Request,res:Response)=>{
  res.send("Olá Mundo")
})


server.listen(3000,()=>console.log('Server Started'));


//se colocarmos na porta 80 só precisaremos digitar no navegador "localhost" 