import express, { Request, Response } from "express";
import router from "./routes/index";
import 'dotenv/config';

const server = express();

const PORT = process.env.PORT || 3000;

// Use middleware to apply routes
server.use(router);

server.get("/", (req: Request, res: Response) => {
    res.status(200).json("Server working fine");
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
