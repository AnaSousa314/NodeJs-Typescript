import express, {Response,Request} from 'express';
import mainRoutes from './routes/index';

const server = express();

server.use(mainRoutes);


//deve ser feito no servidor
server.use((req:Request,res:Response)=>{
  res.status(404).send('Página não encontrada')
})

server.listen(3000,()=>console.log('Server Started'));


//se colocarmos na porta 80 só precisaremos digitar no navegador "localhost" 