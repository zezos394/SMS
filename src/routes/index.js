const bookRouter = require('./book')
const meRouter = require('./me')
const siteRouter = require('./site')
const coursesRouter = require('./courses')
const loginRouter = require('./login')
const registerRouter = require('./register')
const matchRouter = require('./matches')



function route(app){
    app.use('/book', bookRouter)
    app.use('/me', meRouter)
    app.use('/courses', coursesRouter)
    app.use('/', siteRouter)
    app.use('/login', loginRouter)
    app.use('/register', registerRouter)
    app.use('/matches', matchRouter)
}
module.exports = route;