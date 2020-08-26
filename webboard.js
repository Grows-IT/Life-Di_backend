var express = require('express');

const router = express.Router();
const webboards = [{
    title: 'ไก่จิกเด็กตายบนปากโอ่ง',
    description: 'ก จ ด ต บ ป อ',
    imgProfile: '',
    comments: [{
        name: 'เด็กชาย บัค',
        imgProfile: '',
        comment: 'ดีมากเลยครับ',
        timestamp: 'October 1, 2018 08:10'
    }, {
        name: 'เด็กชาย เออเร่อ',
        imgProfile: '',
        comment: 'ดีสุดยอดไปเลยครับ',
        timestamp: 'October 14, 2018 19:10'
    }],
    createBy: 'ลิง',
    createDate: 'June 14, 2015 10:30',
}, {
    title: 'Lenovo เปิดตัว ThinkVision มอนิเตอร์ขนาด 27 นิ้ว ความละเอียด 2K แสดงผลสี sRGB 99% ราคาราว 8,500 บาท',
    description: 'Lenovo เปิดตัวมอนิเตอร์ขนาด 27 นิ้ว รุ่นใหม่ในซีรีส์ ThinkVision ที่ประเทศจีน โดยมันจะมาพร้อมกับหน้าจอความละเอียดระดับ 2K แสดงผลสีได้กว้างถึง 99% ของ sRGB ซึ่งผ่านการคาลิเบรตสีหน้าจอมาจากโรงงานแล้วอีกด้วย แถมยังมีร่องสำหรับวางสมาร์ทโฟนที่ฐานพร้อมทั้งพอร์ต USB Type-C สำหรับชาร์จในตัว  เปิดราคาสุดคุ้มมา เพียง 1,899 หยวน หรือตีเป็นเงินไทยแค่ประมาณ 8,500 บาท',
    imgProfile: '',
    comments: [{
        name: 'เด็กชาย ตี๋',
        imgProfile: '',
        comment: 'เจ๋งมาก',
        timestamp: 'April 19, 2015 18:45'
    }],
    createBy: 'สิงโต',
    createDate: 'April 14, 2015 12:30',
}, {
    title: 'ลือ Zenfone 7 Pro จะมาพร้อมกับ Snapdragon 865+ และกล้องหลังพลิกได้ ราคาเริ่มต้นราว 18,600 บาท',
    description: 'หลังจากที่ ASUS ได้เผยถึงกำหนดการวันเปิดตัวมือถือในซีรีส์เรือธงอย่าง Zenfone 7 ไปแล้วว่า จะมาในวันที่ 26 เดือนสิงหาคมนี้ ล่าสุดก็ได้มีข่าวลือเรื่องสเปคและราคาของมันหลุดตามออกมาอีกว่า มันจะมีด้วยกันสองรุ่นเป็นอย่างน้อย คือ Zenfone 7 และ 7 Pro โดยทั้งคู่จะมาพร้อมกับชิป Snapdragon 865 และ 865+ ตามลำดับ อีกทั้งยังมีการคาดการณ์ว่า มันจะมีราคาเริ่มต้นเพียง 500 ยูโร หรือตีเป็นเงินไทยประมาณ 18,600 บาท',
    imgProfile: '',
    comments: [],
    createBy: 'สุนัข',
    createDate: 'July 24, 2018 19:30',
    // timestamp: 'Janu 25, 2019 19:30'
}, {
    title: 'Huawei จดสิทธิบัตรมือถือจอพับเข้าด้านใน รองรับปากกา Stylus และมีแถบ Touch Bar คล้าย MacBook',
    description: 'Huawei เปิดตัวมือถือจอพับรองรับ 5G อย่าง Mate Xs ไปเมื่อช่วงต้นปีที่ผ่านมา และล่าสุดก็ได้มีข้อมูลของมือถือจอพับรุ่นใหม่ออกมาอีกแล้ว โดยคราวนี้เป็นภาพจากสิทธิบัตรที่ Huawei ได้จดเอาไว้ เผยให้เห็นดีไซน์การออกแบบตัวเครื่องแบบใหม่ที่คราวนี้ใช้การพับหน้าจอเข้าไปด้านในแทน แถมยังรองรับการใช้งานกับปากกา Stylus ซะด้วย',
    imgProfile: '',
    comments: [{
        name: 'อนัน อันวา',
        imgProfile: '',
        comment: 'เขียนแรงๆแล้วจอจะเป็นรอยไหม',
        timestamp: 'November 14, 2013. 19:30'
    }],
    createBy: 'ลา',
    createDate: 'November 14, 2018 19:30',
}]

router.route('/webboards')
    .get((req, res) => {
        res.send(webboards)
    })

router.route('/webboard')
    .get((req, res) => {

    })

module.exports = router;
