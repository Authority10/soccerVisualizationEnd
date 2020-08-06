const mongoose=require('mongoose');
const {Schema,model}=mongoose;
const Teams=new Schema({
  __v:{type:Number,select:false},
  teamID:{type:Number,required:true}
});
module.exports=model('Teams',Teams)