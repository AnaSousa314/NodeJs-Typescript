import express, {Response,Request} from 'express';
import path from 'path';
import dotenv from 'dotenv'
import mustache from 'mustache-express';

import mainRoutes from './routes/index';

dotenv.config();


const server = express();

server.set('view engine','mustache');
server.set('views',path.join(__dirname,'views'));
server.engine('mustache',mustache());

server.use(express.static(path.join(__dirname,'../public')));

//habilita a captura de dados dentro da rota,ou seja,ao body, extend true para que ele de os dados detalhados
server.use(express.urlencoded({extended:true}));


server.use(mainRoutes);


//deve ser feito no servidor
server.use((req:Request,res:Response)=>{
  res.status(404).send('Página não encontrada')
})

server.listen(process.env.PORT,()=>console.log('Server Started'));


//se colocarmos na porta 80 só precisaremos digitar no navegador "localhost" 