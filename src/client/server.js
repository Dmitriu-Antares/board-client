// adress rendering for development/production

const dev = true;
let server;

dev
    ? server="http://localhost:8080/"
    : server="https://task-manager-server.herokuapp.com/";

export default server;