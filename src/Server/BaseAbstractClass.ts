import { IncomingMessage, ServerResponse } from "http";

export abstract class BaseAbstractClass {

  protected req: IncomingMessage;
  protected res: ServerResponse;

  constructor(rep: IncomingMessage, res: ServerResponse) {
    this.req = rep;
    this.res = res;
  }
}