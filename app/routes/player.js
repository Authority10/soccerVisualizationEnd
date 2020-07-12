const Router=require('koa-router');
const routers=new Router({prefix:'/player'});
const {find,create,update}=require('../controllers/player');
routers.get('/',find);
routers.post('/',create);
routers.put('/',update);
module.exports=routers;
