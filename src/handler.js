const getRootHandler = (request, h)=>{
    const response = h.response({
        status: 'success',
        message: 'Welcome to Service 1',
    });

    response.code(200);

    return response;
}

const getAnyHandler = (request, h)=>{
    console.log('GET Any Handler Called!');

    return h.redirect('/');
}

module.exports = {
    getRootHandler, getAnyHandler
};