import {Schema} from "mongoose"
const RoomsSchema = new Schema(
    {
        label:{type: String,require:true,},
        type:{type: String,require:true,},
        remaining:{type: Number,require:true,default:0},
    }
)