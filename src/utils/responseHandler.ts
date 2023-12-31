import { Response } from 'express';

interface SuccessResponse {
  success: boolean;
  data?: any;
  message?: string;
}
export function handleSuccess(res: Response, data?: any, message?: string): void {
  const response: SuccessResponse = {
    success: true,
    data: data,
    message: message || 'Request successful',
  };

  res.status(200).json(response);
}

export function handleError(res:Response,error?:any):void{
  
    const response : SuccessResponse = {
        success:false,
        message:error.message ||"Aborting Request" ,
    }

    res.status(500).json(response);
}