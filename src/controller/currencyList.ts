import { client } from "../utils/redis";
import {getList} from "../service/currency";
import * as response from "../utils/responseHandler";
import { Request,Response } from "express";

export const currenyList = async(req:Request,res:Response)=>{
    try{
        if(client.get('currencylist')){
            let list = JSON.parse(client.get("currencylist"))
            return response.handleSuccess(res,list,"Data fetched from Redis");
        }
        const list = await getList();
        await client.add('currencylist',list);
        return response.handleSuccess(res,list,"Data fetched successfully");
    }catch(err:any){
        console.log("Error in getting currency list currency",err);
        return response.handleError(res,err);
    }
}