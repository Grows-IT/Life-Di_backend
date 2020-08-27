var express = require('express');
const router = express.Router();

const colors = {
    green: {
        primary: '#4BB543',
    },
    red: {
        primary: '#ff0000',
    },
    blue: {
        primary: '#2a9df4',
    }
}

router.route('/getActivity')
    .get((req, res) => {
        let myEvent = [{
            start: '13 August 2020, 12:00',
            end: '13 August 2020, 19:30',
            preStart: '1 August 2020, 12:00',
            preEnd: '10 August 2020, 12:00',
            title: 'วิ่งเพื่อสุขภาพ',
            color: colors.green,
            allDay: true,
            detail: 'วิ่งเพื่อเพิ่มความแข็งแรงให้ร่างกาย',
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
            draggable: false,
            price: 800,
            registeredUser: 437,
            maximumUser: 500
        }, {
            start: '12 August 2020, 09:00',
            end: '12 August 2020, 20:00',
            preStart: '1 August 2020, 12:00',
            preEnd: '10 August 2020, 12:00',
            title: 'วาดรูป',
            color: colors.red,
            allDay: true,
            detail: 'เปลี่ยนการวาดภาพของคุณให้มีเทคนิคมากยิ่งขึ้น!',
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
            draggable: false,
            price: 1500,
            registeredUser: 250,
            maximumUser: 250
        }, {
            start: '12 August 2020, 09:00',
            end: '12 August 2020, 20:00',
            preStart: '3 Jane 2020, 12:00',
            preEnd: '3 August 2020, 12:00',
            title: 'ทำเครื่องประดับด้วยตัวเอง',
            color: colors.red,
            allDay: true,
            detail: 'สร้างสรรค์เครื่องประดับที่ไม่มีเหมือนใครบนโลก!',
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
            draggable: false,
            price: 5000,
            registeredUser: 100,
            maximumUser: 100
        }, {
            start: '9 September 2020, 08:00',
            end: '9 September 2020, 16:00',
            preStart: '3 August 2020, 12:00',
            preEnd: '3 September 2020, 12:00',
            title: 'สบู่อโรม่า',
            color: colors.green,
            allDay: true,
            detail: 'สรรค์สร้างสบู่รูปแบบและกลิ่นที่คุณเลือกเองได้!',
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
            draggable: false,
            price: 1000,
            registeredUser: 788,
            maximumUser: 1000
        }, {
            start: '20 September 2020, 10:00',
            end: '20 September 2020, 18:00',
            preStart: '3 August 2020, 12:00',
            preEnd: '3 September 2020, 12:00',
            title: 'ปลูกต้นกระบองเพชร',
            color: colors.blue,
            allDay: true,
            detail: 'สอนให้คุณได้เข้าใจธรรมชาติของแคคตัส และรู้เทคนิคเคล็ดลับเกี่ยวกับการปลูกต้นกระบองเพชร',
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
            draggable: false,
            price: 500,
            registeredUser: 218,
            maximumUser: 400
        }, {
            preStart: '1 August 2020, 10:00',
            preEnd: '27 August 2020, 18:00',
            start: '28 August 2020, 08:00',
            end: '28 August 2020, 19:00',
            title: 'ปั้นดินเผา',
            color: colors.blue,
            allDay: true,
            detail: 'ทำงานปั้นเกี่ยวกับเครื่องปั้นดินเผา เพ้นท์ลดลายต่างๆ ลงไปบนภาชนะ เซรามิค',
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
            draggable: false,
            price: 2000,
            registeredUser: 15,
            maximumUser: 800
        }, {
            preStart: '1 August 2020, 10:00',
            preEnd: '1 September 2020, 18:00',
            start: '13 September 2020, 08:00',
            end: '13 September 2020, 19:00',
            title: 'สอนปักผ้า',
            color: colors.red,
            allDay: true,
            detail: 'เหมาะมากๆ สำหรับสาย craft ที่เน้นการถักกับผ้าไม่ว่าจะเป็นหมวกดอกไม้ ถักอัฟกัน ปักตะกร้า ปะ-ชุน',
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
            draggable: false,
            price: 1500,
            registeredUser: 5000,
            maximumUser: 5000
        }]
        res.send(myEvent);
    })

module.exports = router;
