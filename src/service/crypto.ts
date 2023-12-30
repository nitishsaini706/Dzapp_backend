import axios from "axios";

require('dotenv').config()

const url:string = process.env.CRYPTO_URL ?? "https://api.coingecko.com/api/v3/";

interface Object {
    id : string,
    name:string,
    symbol:string,
}

interface List {
    list:[Object]
}

interface Item {
    [key: string]: {
      [nestedKey: string]: number;
    };
  }
export const getList = async () =>{
    try{
        const response:any = await axios.get(url+"coins/list");
        const data:List = response.data;
        return data;
    }catch(err){
        console.log("service for current list",err);
        throw err;
    }
}

export const convert = async(input:{currency:string,crypto:string,amount:string})=>{
    try{
        const {currency,crypto,amount} = input;
        const res = await axios.get(url+`simple/price?ids=${crypto}&vs_currencies=${currency}`);
        const response:Item = res.data;
        
        const data:number =  response[crypto][currency];

        const result = Math.round(data * parseInt(amount));

        return result;

    }catch(err){
        console.log("Error while getting currency for crypto service",err);
        throw err;
    }
}