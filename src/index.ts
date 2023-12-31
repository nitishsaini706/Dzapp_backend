import express, { Request, Response } from "express";
import router from "./routes/index";
import 'dotenv/config';
import cors from "cors";

const server = express();

const PORT = process.env.PORT || 3000;

server.use(cors());
// Use middleware to apply routes
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
  
server.use(router);

server.get("/", (req: Request, res: Response) => {
    res.status(200).json("Server working fine");
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
