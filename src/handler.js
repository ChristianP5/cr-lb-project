const getRootHandler = (request, h) => {
    const response = h.response({
        status: 'success',
        message: 'Welcome to Service 2',
    });

    response.code(200);

    return response;
}

const getAnyHandler = (request, h) => {
    console.log('GET Any Handler Called! (Service 2)');

    return h.redirect('/');
}

module.exports = {
    getRootHandler, getAnyHandler
};