const authorize = (req, res, next) =>{
const {user} = req.query

if(user === 'elisabetta'){
    req.user = {name: 'elisabetta'}
    next()
}else{
    console.log(user)
    res.status(401).send(`Utente ${user} non è autorizzato`)
}

}

module.exports = authorize