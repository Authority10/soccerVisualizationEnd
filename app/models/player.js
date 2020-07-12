const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const Players=new Schema({
    __v:{type:Number,select:false},
    teamID:{type:Number,required:true}
});
module.exports=model('Players',Players)