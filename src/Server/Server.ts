import { Authorizer } from './../Authorization/Authorizer';
import { TokenGenerator } from './Model';
import { createServer, IncomingMessage, ServerResponse } from "http";
import { Utils } from "./Utils";
import { Login } from "./Login";

export class Server {
  private authorizer: Authorizer = new Authorizer();

  public createServer () {
    createServer( async (req: IncomingMessage, res:ServerResponse) => {
      const basePath = Utils.getUrlBasePath(req.url)
      switch (basePath) {
        case 'login':
          await new Login(req, res, this.authorizer).handleRequest()
          break;
      
        default:
          break;
      }
      res.end();
    }).listen(7777);
    console.log("server is started with port", 7777)
  }
}