import {getList} from "../service/currency";
import * as response from "../utils/responseHandler";
import { Request,Response } from "express";

export const currenyList = async(req:Request,res:Response)=>{
    try{
        const list = await getList();
        return response.handleSuccess(res,list,"Data fetched successfully");
    }catch(err:any){
        console.log("Error in getting currency list currency",err);
        return response.handleError(res,err);
    }
}