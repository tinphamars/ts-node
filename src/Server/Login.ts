import { TokenGenerator } from "./Model";
import { BaseAbstractClass } from "./BaseAbstractClass";
import { IncomingMessage, ServerResponse } from "http";

export class Login extends BaseAbstractClass {
  private tokenGenerator: TokenGenerator;

  constructor(
    req: IncomingMessage,
    res: ServerResponse,
    tokenGenerator: TokenGenerator
  ) {
    super(req, res); // để thiết lập các thuộc tính chung mà lớp cha cung cấp.
    this.tokenGenerator = tokenGenerator;
  }

  public async handleRequest(): Promise<void> {
    try {
      const body = await this.getRequestBody();
      const token = await this.tokenGenerator.generateToken(body);
      
      if (token) {
        this.res.write("Login is successful");
      } else {
        this.res.write("Username or password is valid");
      }
    } catch (error: any) {
      this.res.write("Error: " + error.message);
    }
  }

  private async getRequestBody(): Promise<{
    username: string;
    password: string;
  }> {
    return new Promise<any>((resolve, reject) => {
      let body: string = "";
      this.req.on("data", (data: string) => {
        body += data;
      });
      this.req.on("end", () => {
        try {
          resolve(JSON.parse(body));
        } catch (error) {
          reject(error);
        }
      });
      this.req.on("error", (error) => {
        reject(error);
      });
    });
  }
}
