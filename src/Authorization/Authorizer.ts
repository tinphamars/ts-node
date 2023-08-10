import { BodyLogin, SessionToken, TokenGenerator } from "../Server/Model";

import event from "events";

export class Authorizer implements TokenGenerator {
  /**
   * Generates a session token based on the provided login credentials.
   *
   * @param {BodyLogin} body - The login credentials.
   * @return {Promise<SessionToken | undefined>} - The generated session token, or undefined if the credentials are invalid.
   */
  async generateToken(body: BodyLogin): Promise<SessionToken | undefined> {
    const eventEmitter = new event.EventEmitter();
    // tạo một event listener
    eventEmitter.addListener("clicked", function () {
      console.log("Something is clicked! 234234");
    });
    
    eventEmitter.emit("clicked");


    if (body.password === "password" && body.username === "username") {
      return { tokenId: "someTokenId" };
    } else {
      return undefined;
    }
  }
}
