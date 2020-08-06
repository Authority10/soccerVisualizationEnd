const Router=require('koa-router');
const routers=new Router({prefix:'/team'});
const {find,create,update}=require('../controllers/team');
routers.get('/',find);
// routers.post('/',create);
// routers.put('/',update);
module.exports=routers;
