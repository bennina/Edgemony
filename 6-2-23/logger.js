const logger = (req, res, next) =>{
    const method = req.method  //indica il metodo di http
    const url = req.url  // indica il path
    const data = new Date().getFullYear()
    console.log(method, url, data)
    next()
}

module.exports = logger