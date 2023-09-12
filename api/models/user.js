const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String, require: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,  //data type of the field
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    verificationToken:String,
     adresses:[
        {
            name:String,
            mobileNo:String,
            houseNo:String,
            street:String,
            landmark:String,
            city:String,
            country:String,
            postalCode:String
        }
     ],
     orders:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Orders'
        }
     ],
     createdAt:{
        type : Date ,
        default:Date.now()
     }

});
const User = mongoose.model("User",userSchema);

module.exports = User;