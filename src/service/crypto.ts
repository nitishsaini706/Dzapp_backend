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

export const convert = async(input:{currency:string,crypto:string})=>{
    try{
        const {currency,crypto} = input;
        const response:any= await axios.get(url+`simple/price?ids=${input.crypto}&vs_currencies=${input.currency}`);

        const result = response.data.filter((item:any)=>{
            return item.id === crypto ;
        })

        return result.current_price;

    }catch(err){
        console.log("Error while getting currency for crypto service",err);
        throw err;
    }
}