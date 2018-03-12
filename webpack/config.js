const environment = {
    development: {
        api_server: "http://localhost:8080/"
    },
    production: {
        api_server: "https://task-manager-server.herokuapp.com/"
    }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({}, environment);