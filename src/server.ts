import express,{Request,Response} from 'express';

const server = express();

server.get('/',(req:Request,res:Response)=>{
  res.send("Olá Mundo")
});

server.get('/noticia/:slug',(req:Request,res:Response)=>{
  const {slug} = req.params;
  
  res.send(`Noticia: ${slug}`);
});

server.get('/voo/:origem-/:destino',(req:Request,res:Response)=>{
  const {origem,destino} = req.params;

  res.send(`A origem é ${origem.toUpperCase()} e destino ${destino.toUpperCase()}`);
});


server.listen(3000,()=>console.log('Server Started'));


//se colocarmos na porta 80 só precisaremos digitar no navegador "localhost" 