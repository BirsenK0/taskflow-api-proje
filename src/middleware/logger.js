const logger = (req, res, next) => {
    const baslangic = Date.now();

    res.on('finish', () => {
        const sure = Date.now() - baslangic;
        console.log(req.method, req.url, res.statusCode, sure + 'ms');
    });

    next();
};   
module.exports = logger;