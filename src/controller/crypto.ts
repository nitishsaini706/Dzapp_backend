import { validateObject } from "../paramsValidator/converterObject";
import {getList,convert} from "../service/crypto";
import * as response from "../utils/responseHandler";
import { Request,Response } from "express";
import {client} from "../utils/redis";

export const cryptoList = async(req:Request,res:Response)=>{
    try{
        if(client.get('cryptolist')){
            let list = JSON.parse(client.get("cryptolist"))
            return response.handleSuccess(res,list,"Data fetched from Redis");
        }
        const list = await getList();
        await client.add('cryptolist',list);
        return response.handleSuccess(res,list,"Data fetched successfully");
    }catch(err:any){
        console.log("Error in getting crpyto list currency"+err);
        return response.handleError(res,err);
    }
}


export const currenyForCrypto = async(req:Request,res:Response)=>{
    try{
        const { error, value } = validateObject(req.query);
        if (error) {
            return response.handleError(res, error?.details[0]?.message);
          }
          
          if (value && Object?.keys(value)?.length > 0) {
            const data = await convert(value);
            return response.handleSuccess(res, data, "Data fetched successfully");
          } else {
            return response.handleError(res, "Invalid query parameters");
          }
        
    }catch(err:any){
        console.log("Error in getting currency for crpyto"+err);
        return response.handleError(res,err);
    }
}