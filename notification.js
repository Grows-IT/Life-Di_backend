var express = require('express');

const router = express.Router();

router.route('/notification')
    .get(function (req, res) {
        const notifications = [{
            read: false,
            title: 'ยินดีต้อนรับเข้าสู้โลกแห่งการเรียนรู้ LIFE DI',
            link: '',
            date: '1/1/2020'
        }, {
            read: false,
            title: 'วิกฤตต้มยำกุ้ง ฝากอะไรให้กับเรา?',
            link: 'http://localhost:4200/course/1',
            date: '15/2/2020'
        }, {
            read: true,
            title: 'บทความใหม่สำหรับคุณ',
            link: 'http://localhost:4200/journal',
            date: '5/4/2020'
        }, {
            read: false,
            title: 'คอร์สเรียนใหม่สำหรับคุณ',
            link: '',
            date: '27/6/2020'
        }]
        res.send(notifications);
    })
module.exports = router;
