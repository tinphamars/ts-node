import { Authorizer } from './../Authorization/Authorizer';
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

        case 'tsc-two':
          res.write('Hello World');
          break;
      
        default:
          res.write('Page not found');
          break;
      }
      res.end();
    }).listen(6789);
    console.log("server is started with port", 6789)
  }
}