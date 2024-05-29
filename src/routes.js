const {
    getRootHandler, getAnyHandler
} = require('./handler');

const routes = [
    {
        path: '/',
        method: 'GET',
        handler: getRootHandler,
    },
    {
        path: '/{any*}',
        method: '*',
        handler: getAnyHandler,
    }
]

module.exports = routes;