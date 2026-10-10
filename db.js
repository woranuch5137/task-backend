const mongoose = require('mongoose');

//นำ Connection String ที่คัดลอกไว้มาใส่ในเครื่องหมายคำพูดด้านล่างนี้
const dbURI = process.env.MONGO_URL;

//เริ่มการเชื่อมต่อ
mongoose.connect(dbURI)
    .then(() => {
        console.log('สำเร็จ! Node.js เชื่อมต่อกับ MongoDB Atlas แล้ว');
    })
    .catch((err) => {
        console.log('พัง! เชื่อมต่อ Database ไม่สำเร็จ:', err);
    });