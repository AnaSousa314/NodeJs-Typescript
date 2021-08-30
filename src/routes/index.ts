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

  res.render('home',{
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
    frasesDoDia:[
      
    ]
  
  });
});

router.get('/contato',(req:Request,res:Response)=>{
  res.send(`Formulario de Contato`);
});

router.get('/sobre',(req:Request,res:Response)=>{
  res.send("Página institucional sobre a empresa");
});

export default router;