const dotenv = require('dotenv');
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

dotenv.config();

const init = async () => {
    const server = Hapi.server({
        host: process.env.NODE_ENV === 'production'? '0.0.0.0' : 'localhost',
        port: process.env.ENV_PORT  
    });

    server.route(routes);

    await server.start();
    console.log(`Server started at ${server.info.uri}`);
}

process.on('unhandledRejection', ()=>{
    console.error(`Process Crashed!`);
    process.exit(1);
})

process.on('SIGTERM', ()=>{
    console.log(`SIGTERM Received!`);
    process.exit(1);
})

init().catch(error=>{
    console.error(`Server Crashed!`);
    process.exit(1);
})