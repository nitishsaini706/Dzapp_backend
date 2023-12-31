import axios from "axios";

require('dotenv').config()

const url:string = process.env.CURRENCY_URL ?? "https://currencyapi.net/api/v1/currencies";
export const getList = async () =>{
    try{
        const response:any = await axios.get(url+`?key=${process.env.CURRENCY_API_KEY}&output=json`);

        const data:any = response.data;
        return data;
    }catch(err){
        console.log("service for current list"+err);
        throw err;
    }
}