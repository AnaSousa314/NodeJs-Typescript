import {Router,Response,Request} from 'express'

const router = Router();

router.get('/',(req:Request,res:Response)=>{
  let user = {
    name: 'Ana',
    age: 15
  };
  let showOld:boolean = false;

  //o mustache não aceita tratamento de condições no html, por isso ela deve ser feita pelo back
  if(user.age > 50){
    showOld = true;
  }

  res.render('pages/home',{
    name: 'Ana', 
    lastName: 'Sousa',
    showWelcome:true,
    user,
    showOld,
    products:[
      {title:'Produto x',price:10},
      {title:'Produto y',price:50},
      {title:'Produto z',price:20}
    ],
    frasesDoDia:[]
  
  });
});

router.get('/contato',(req:Request,res:Response)=>{
  res.render('pages/contato');
});

router.get('/sobre',(req:Request,res:Response)=>{
  res.render('pages/sobre');
});

router.get('/nome',(req:Request,res:Response)=>{
  // const {nome} = req.query;
  const nome:string = req.query.nome as string
  const idade:string = req.query.idade as string;

  console.log(nome,idade);
  res.render('pages/nome',{nome,idade})
});

router.get('/idade',(req:Request,res:Response)=>{
  
  res.render('pages/idade');
});

router.post('/idade-resultado',(req:Request,res:Response)=>{
  // const {ano} = req.body;
  let mostrarIdade:boolean = false;
  let idade:number = 0;

  if(req.body.ano){
    let anoNascimento:number = parseInt(req.body.ano as string);
    let anoAtual:number = new Date().getFullYear();

    idade = anoAtual-anoNascimento;
    mostrarIdade=true;
  }
  
  console.log(req.body);
  res.render('pages/idade',{idade,mostrarIdade})
});



export default router;