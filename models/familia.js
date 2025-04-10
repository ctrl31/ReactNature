import mongoose, {mongo} from "mongoose";
const familiaSchema = new mongoose.Schema({
  name:String,
  image:String,
  creator:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"User",


  },
  participants:[
      {
          type: mongoose.Schema.Types.ObjectId,
          ref:"User",
  
      }
  ],
});

export const Familia = mongoose.model('Familia', familiaSchema);
