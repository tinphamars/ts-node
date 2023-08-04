export interface TokenGenerator {
  generateToken(body: BodyLogin): Promise<SessionToken | undefined>
}

export interface SessionToken {
  tokenId : string
}

export interface BodyLogin {
  username : string,
  password : string
}