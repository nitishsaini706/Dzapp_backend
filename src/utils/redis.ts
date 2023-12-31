import { createClient } from 'redis';

export let client:any=""; // Declare client outside the function

export const useRedis = async () => {
    try {
        if (!client) {
            client = await createClient().connect();
        }

        return client;
    } catch (err) {
        console.log("Error while initializing Redis", err);
        throw err;
    }
};
