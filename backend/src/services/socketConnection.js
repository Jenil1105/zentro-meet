const {Server} = require("socket.io");

export default connectToSocketio = (server)=>{
    const io = new Server(server);
    return io;
}