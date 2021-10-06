// controllers/accountController.ts
import { Request, Response } from "express";
import Account from "./../account";

//all the api for account will be implemented here


export let getUser = (req: Request, res: Response) => {
    let account = Account.findById(req.params.id, (err: any, acount: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(account);
      }
    });
  };