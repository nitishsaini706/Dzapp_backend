import { validateObject } from "../paramsValidator/converterObject";
import {getList,convert} from "../service/crypto";
import * as response from "../utils/responseHandler";
import { Request,Response } from "express";

export const cryptoList = async(req:Request,res:Response)=>{
    try{
    
        const list = await getList();
        return response.handleSuccess(res,list,"Data fetched successfully");
    }catch(err:any){
        console.log("Error in getting crpyto list currency",err);
        return response.handleError(res,err);
    }
}


export const currenyForCrypto = async(req:Request,res:Response)=>{
    try{
        const { error, value } = validateObject(req.query);
        if(value){
            const data = await convert(value);
            return response.handleSuccess(res,data,"Data fetched successfully");
        }else if(error){
            return response.handleError(res,error);
        }
        
    }catch(err:any){
        console.log("Error in getting currency for crpyto",err);
        return response.handleError(res,err);
    }
}