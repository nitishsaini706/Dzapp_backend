import { createClient } from 'redis';


let client:any="";
export const useRedis = async (input:string,value?:any) => {
    try {
        if (client == "") {
            client = await createClient().connect();
        }
        if(client.get(input)){
            return JSON.parse(client.get(input));
        }else{
            client.add(input,value);
        }
        return "";
    } catch (err) {
        console.log("Error while initializing Redis", err);
        throw err;
    }
};
