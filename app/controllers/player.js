const Player=require('../models/player');
class  UserCtl{
    async find(ctx){
        const {teamID}=ctx.query;
        ctx.body= await Player.find({teamID});
    }
    // async create(ctx){
    //     const {teamID}=ctx.request.body;
    //     // const {name}=ctx.request.body;
    //     // const repeatUser=await Player.findOne({name});
    //     // if(repeatUser){ctx.throw(409,'文件已经存在')}
    //     const ability=await new Player(ctx.request.body).save();
    //     ctx.body=ability;
    // }
    // async update(ctx){
    //     const {teamID} =ctx.request.body;
    //     //const Player=await Player.findByIdAndUpdate(ctx.params.id,ctx.request.body)
    //     const ability= await  Player.findOneAndUpdate({teamID},ctx.request.body,{new:true})
    //     if(!ability){
    //         ctx.throw(404,'文件不存在！')
    //     }
    //     ctx.body=ability;
    // }
    // async del(ctx){
    //     const {teamID} =ctx.requst.body;
    //     const ability= await Player.findOneAndRemove({teamID});
    //     if(!ability){ctx.throw(404,'文件不存在！')}
    //     ctx.status=204;
    // }
};
module.exports=new UserCtl();