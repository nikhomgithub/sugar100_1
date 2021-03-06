const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BasicDataSchema = new Schema({
    id:{type: Number,required:true}, // ไอดี
    title:{type:[String]}, // คำนำหน้า
    unit:{type:[String]}, // หน่วย
    userLevel:{type:[String]}, // ระดับผู้ใช้
    //transactionType:{type:[String]}, // ประเภทเอกสาร
    //transactionStatus:{type:[String]}, // สถานะเอกสาร

    userId:{teyp:String},
    shopId:{type:String,required:true}, //
    
    //partnerType:{type:[String]}, // ประเภทคู่ค้า.
    routeAuth:{type:[{
        id:{type:Number}, //ไอดี
        routeAddress:{type:String}, // เราท์แอดเดรส
        routeName:{type:String}, // เราท์เนม
        userLevel:{type:[String]} // ระดับผู้ใช้
    }],'default':[]},

    bgColor:{type:String},
    color:{type:String},
    maxWidth:{type:String},
    bottom:{type:String},
    right:{type:String},
    fontSize:{type:String},
    footer:{type:String},
    about:{type:String},
    contact:{type:String},

});

BasicDataSchema.index({id:1})

module.exports = BasicData = mongoose.model('BasicData', BasicDataSchema);