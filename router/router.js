const route = require('koa-router')
const Service = require('../service/service')
const router = route()
router.get('/', Service.test)
router.post('/hi', Service.Hello)

module.exports = router