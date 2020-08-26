var express = require('express');

const router = express.Router();
const report = {
    user: {
        allUser: 85210,
        active: 68913,
    },
    course: {
        allCourse: 48,
        activeCourse: 30,
        registeredUser: 3216,
        topCourse: [{
            name: 'Calculus 12',
            registered: 600
        }, {
            name: 'Python',
            registered: 483
        }, {
            name: 'Physics',
            registered: 349
        }, {
            name: 'Chemistry',
            registered: 287
        }, {
            name: 'English in daily life',
            registered: 198
        }]
    },
    activity: {
        allActivity: 15,
        registeredUser: 1863,
        topActivity: [{
            name: 'เทรดหุ้นอย่างไรให้ได้เงินล้าน',
            registered: 450
        }, {
            name: 'ลงทุนในอสังหาฯ อย่างไรให้ไม่เจ๊ง!!',
            registered: 379
        }, {
            name: 'จิตวิทยาเบื้องต้นที่คุณควรรู้',
            registered: 343
        }, {
            name: 'แก้ปัญหาในธุรกิจ Logistics ได้อย่างไร',
            registered: 154
        }, {
            name: 'New Normal ในธุรกิจ',
            registered: 89
        }]
    },
    profit: [{
        allProfit: 451698,
        course: 354897,
        activity: 96801
    }, {
        allProfit: 795215,
        course: 725341,
        activity: 69874
    }, {
        allProfit: 564132,
        course: 500000,
        activity: 64132
    }, {
        allProfit: 450000,
        course: 359000,
        activity: 101000
    }, {
        allProfit: 620050,
        course: 470000,
        activity: 150050
    }, {
        allProfit: 451698,
        course: 354897,
        activity: 96801
    }, {
        allProfit: 241050,
        course: 140000,
        activity: 101050
    }, {
        allProfit: 360000,
        course: 262000,
        activity: 98000
    }, {
        allProfit: 0,
        course: 0,
        activity: 0
    }, {
        allProfit: 0,
        course: 0,
        activity: 0
    }, {
        allProfit: 0,
        course: 0,
        activity: 0
    }, {
        allProfit: 0,
        course: 0,
        activity: 0
    }]
}

router.route('/systemReport')
    .get((req, res) => {
        res.send(report);
    })

module.exports = router;
