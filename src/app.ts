import express, { Request, Response } from "express";
import * as accountController from "./controllers/accountController";

// Our Express APP config
const app = express();
app.use(express.json());
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get("/", (req: Request, res: Response) => res.send("hi"));

app.get("/user/:id", accountController.getUser);


const server = app.listen(app.get("port"), () => {
  console.log("App is running on http://localhost:%d", app.get("port"));
});