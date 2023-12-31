import {getList} from "../service/currency";
import * as response from "../utils/responseHandler";
import { Request,Response } from "express";

export const currenyList = async(req:Request,res:Response)=>{
    try{
        // let cache = await useRedis('currencylist');
        // if(cache != ""){
        //     return response.handleSuccess(res,cache,"Data fetched from Redis");
        // }
        const list = await getList();
        // await useRedis('currencylist',list);
        return response.handleSuccess(res,list,"Data fetched successfully");
    }catch(err:any){
        console.log("Error in getting currency list currency",err);
        return response.handleError(res,err);
    }
}