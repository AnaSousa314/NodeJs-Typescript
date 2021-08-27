import express from 'express';
import mainRoutes from './routes/index';
import painelRoutes from './routes/painel'
const server = express();

server.use(mainRoutes);

//esse primeiro parametro do .use é um prefixo para distinguir de onde vem a rota, arquivos de rotas diferentes não podem ter o mesmo prefixo
server.use('/painel',painelRoutes);

server.listen(3000,()=>console.log('Server Started'));


//se colocarmos na porta 80 só precisaremos digitar no navegador "localhost" 