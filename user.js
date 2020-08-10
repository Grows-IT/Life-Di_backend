var express = require('express');

const router = express.Router();

router.route('/user')
    .get((req, res) => {
        const user = [{
            email: 'a@a.com',
            name: 'ปลาหยุด',
            lastname: 'อังคารโอชา',
            provider: 'Facebook'
        }, {
            email: 'b@b.com',
            name: 'ปลาไม่หยุด',
            lastname: 'อังคารโอชา',
            provider: 'Google'
        }, {
            email: 'c@c.com',
            name: 'ปลาเกือบหยุด',
            lastname: 'อังคารโอชา',
            provider: '-'
        }, {
            email: 'd@d.com',
            name: 'ปลาหยัด',
            lastname: 'อังคารโอชา',
            provider: 'Facebook'
        },{
            email: 'a@a.com',
            name: 'ปลาหยุด',
            lastname: 'อังคารโอชา',
            provider: 'Facebook'
        }, {
            email: 'b@b.com',
            name: 'ปลาไม่หยุด',
            lastname: 'อังคารโอชา',
            provider: 'Google'
        }, {
            email: 'c@c.com',
            name: 'ปลาเกือบหยุด',
            lastname: 'อังคารโอชา',
            provider: '-'
        }, {
            email: 'd@d.com',
            name: 'ปลาหยัด',
            lastname: 'อังคารโอชา',
            provider: 'Facebook'
        },{
            email: 'a@a.com',
            name: 'ปลาหยุด',
            lastname: 'อังคารโอชา',
            provider: 'Facebook'
        }, {
            email: 'b@b.com',
            name: 'ปลาไม่หยุด',
            lastname: 'อังคารโอชา',
            provider: 'Google'
        }, {
            email: 'c@c.com',
            name: 'ปลาเกือบหยุด',
            lastname: 'อังคารโอชา',
            provider: '-'
        }, {
            email: 'd@d.com',
            name: 'ปลาหยัด',
            lastname: 'อังคารโอชา',
            provider: 'Facebook'
        }]
        res.send(user);
    })

module.exports = router;
