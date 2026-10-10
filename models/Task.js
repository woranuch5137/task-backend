const mongoose = require('mongoose');
//1. สร้างพิมพ์เขียว (schema) คล้ายๆการสร้าง struct ในภาษา c
const taskSchema = new mongoose.Schema({
    //บังคับว่า title ต้องเป็นข้อความ และห้ามเว้นว่าง
    title: {
        type: String,
        required: true 
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'], //กำหนดให้มีค่าได้แค่ 3 ค่า
        default: 'medium' //ถ้าไม่ส่งค่า priority มา ให้ตั้งเป็น ทำกรีท vy9Fo,y9b
    },
    //บังคับว่า completed ต้องเป็น true/false เท่านั้น ถ้าไม่ส่งมาให้ตั้งค่าเป็น false อัตโนมัติ
    completed: {
        type: Boolean,
        default: false
    }
});
//2. แปลงพิมพ์เขียวให้กลายเป็น model (ชิ้นส่วนที่พร้อมใช้งาน)
const Task = mongoose.model('Task', taskSchema);
//3. ส่งออกให้ไปไฟล์อื่น (เช่น server.js) เอสไปใช้งาน
module.exports = Task;