import { validateObject } from "../paramsValidator/converterObject";
import {getList,convert} from "../service/crypto";
import * as response from "../utils/responseHandler";
import { Request,Response } from "express";

export const cryptoList = async(req:Request,res:Response)=>{
    try{
        // let cache = await useRedis('cryptolist');
        // if(cache != ""){
        //     return response.handleSuccess(res,cache,"Data fetched from Redis");
        // }
        const list = await getList();
        // await useRedis('cryptolist',list);
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