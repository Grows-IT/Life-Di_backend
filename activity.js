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
            title: 'วิ่งไล่ลุง',
            color: colors.green,
            allDay: true,
            detail: 'วิ่งไล่ลุง วิ่งไล่ลุง วิ่งไล่ลุง ไป๊ ไป ชิ่วๆ',
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
            draggable: false,
            price: 2800,
            registeredUser: 437,
            maximumUser: 500
        }, {
            start: '12 August 2020, 09:00',
            end: '12 August 2020, 20:00',
            preStart: '1 August 2020, 12:00',
            preEnd: '10 August 2020, 12:00',
            title: 'วิ่งไล่เชียร์ลุง',
            color: colors.red,
            allDay: true,
            detail: 'วิ่งไล่ลุง วิ่งไล่ลุง วิ่งไล่ลุง ไป๊ ไป ชิ่วๆ',
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
            draggable: false,
            price: 90,
            registeredUser: 250,
            maximumUser: 250
        }, {
            start: '12 August 2020, 09:00',
            end: '12 August 2020, 20:00',
            preStart: '3 Jane 2020, 12:00',
            preEnd: '3 August 2020, 12:00',
            title: 'วิ่งไล่ลุง ep2',
            color: colors.red,
            allDay: true,
            detail: 'วิ่งไล่ลุง 2 ep ละนะ ไปเถ๊อะ',
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
            draggable: false,
            price: 9000,
            registeredUser: 100,
            maximumUser: 100
        }, {
            start: '9 September 2020, 08:00',
            end: '9 September 2020, 16:00',
            preStart: '3 August 2020, 12:00',
            preEnd: '3 September 2020, 12:00',
            title: 'วิ่งไล่ลุง ep3',
            color: colors.green,
            allDay: true,
            detail: 'วิ่งไล่ลุง ep3 วิ่งมา 3 รอบยังไม่ไปอีก',
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
            draggable: false,
            price: 5000,
            registeredUser: 788,
            maximumUser: 1000
        }, {
            start: '20 September 2020, 10:00',
            end: '20 September 2020, 18:00',
            preStart: '3 August 2020, 12:00',
            preEnd: '3 September 2020, 12:00',
            title: 'วิ่งไล่ลุง ep4',
            color: colors.blue,
            allDay: true,
            detail: 'วิ่งไล่ลุง ep4 วิ่งๆเข้าไป จนกว่าจะออก',
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
            draggable: false,
            price: 1500,
            registeredUser: 218,
            maximumUser: 400
        }, {
            preStart: '1 August 2020, 10:00',
            preEnd: '27 August 2020, 18:00',
            start: '28 August 2020, 08:00',
            end: '28 August 2020, 19:00',
            title: 'วิ่งไล่ลุง ep4',
            color: colors.blue,
            allDay: true,
            detail: 'วิ่งไล่ลุง ep5 วิ่งๆเข้าไป จนกว่าจะออก',
            resizable: {
                beforeStart: true,
                afterEnd: true,
            },
            draggable: false,
            price: 900,
            registeredUser: 15,
            maximumUser: 800
        }, {
            preStart: '1 August 2020, 10:00',
            preEnd: '1 September 2020, 18:00',
            start: '13 September 2020, 08:00',
            end: '13 September 2020, 19:00',
            title: 'ตามหาใจแอ๋น กับซุเนโอ๊ะที่หายไป',
            color: colors.red,
            allDay: true,
            detail: 'ตามหาใจแอ๋น จนกว่าจะเจอ',
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
