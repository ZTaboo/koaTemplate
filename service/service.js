const Router = {}

Router.test = async (ctx, next) => {
    console.log(ctx.request.url)
    ctx.body = {
        'msg': 'hello world1'
    }
    return next()
}


Router.Hello = async (ctx, next) => {
    ctx.body = {
        'msg': 'hello world'
    }
}

module.exports = Router