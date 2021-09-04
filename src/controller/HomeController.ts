import {Response,Request} from 'express';
import {Product } from '../models/Product'


export const home = (req:Request,res:Response)=>{
  let user = {
    name: 'Ana',
    age: 15
  };
  let showOld:boolean = false;

  //o mustache não aceita tratamento de condições no html, por isso ela deve ser feita pelo back
  if(user.age > 50){
    showOld = true;
  }

  let list = Product.getAll();
  let expensiveList = Product.getFromPriceAfter(12);

  res.render('pages/home',{
    name: 'Ana', 
    lastName: 'Sousa',
    showWelcome:true,
    user,
    showOld,
    frasesDoDia:[],
    products: list,
    expensives: expensiveList
  
  });
}