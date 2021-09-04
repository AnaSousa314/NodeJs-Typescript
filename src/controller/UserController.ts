import {Response,Request} from 'express'


export const nome = (req:Request,res:Response)=>{
  // const {nome} = req.query;
  const nome:string = req.query.nome as string
  const idade:string = req.query.idade as string;

  console.log(nome,idade);
  res.render('pages/nome',{nome,idade})
}

export const idadeForm = (req:Request,res:Response)=>{
  
  res.render('pages/idade');
}

export const idadeAction = (req:Request,res:Response)=>{
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
}