// import { createClient } from '@vercel/kv';

// let client: any = "";

// export const useRedis = async (input: string, value?: any) => {
//     try {
//         if (client === "") {
//             client = createClient({
//                 url: "redis://******:******@poetic-ox-32291.kv.vercel-storage.com:32291",
//             });
//         }

//         if (await client.get(input)) {
//             const result = await client.get(input);
//             return JSON.parse(result);
//         } else if (input && value) {
//             await client.set(input, JSON.stringify(value));
//         }

//         return "";
//     } catch (err) {
//         console.log("Error while initializing Redis", err);
//         throw err;
//     }
// };
