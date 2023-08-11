import { Server } from "./Server/Server";

class Index {
  private server:Server;
  
  constructor() {
    this.server = new Server();
  }
  public madeSever() {
    this.server.createServer();
  }
}

new Index().madeSever()

// Hàng đợi tin nhắn (RabbitMQ)