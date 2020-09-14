var express = require('express');

const router = express.Router();

router.route('/user')
    .get((req, res) => {
        const user = [{
            email: 'a@a.com',
            name: 'แอปเปิ้ล',
            lastname: 'รักผลไม้',
            provider: 'Facebook'
        }, {
            email: 'b@b.com',
            name: 'มะพร้าว',
            lastname: 'รักผลไม้',
            provider: 'Google'
        }, {
            email: 'c@c.com',
            name: 'แตงโม',
            lastname: 'รักผลไม้',
            provider: '-'
        }, {
            email: 'd@d.com',
            name: 'มะม่วง',
            lastname: 'รักผลไม้',
            provider: 'Facebook'
        },{
            email: 'a@a.com',
            name: 'แอปเปิ้ล',
            lastname: 'รักผลไม้',
            provider: 'Facebook'
        }, {
            email: 'b@b.com',
            name: 'มะพร้าว',
            lastname: 'รักผลไม้',
            provider: 'Google'
        }, {
            email: 'c@c.com',
            name: 'แตงโม',
            lastname: 'รักผลไม้',
            provider: '-'
        }, {
            email: 'd@d.com',
            name: 'มะม่วง',
            lastname: 'รักผลไม้',
            provider: 'Facebook'
        },{
            email: 'a@a.com',
            name: 'แอปเปิ้ล',
            lastname: 'รักผลไม้',
            provider: 'Facebook'
        }, {
            email: 'b@b.com',
            name: 'มะพร้าว',
            lastname: 'รักผลไม้',
            provider: 'Google'
        }, {
            email: 'c@c.com',
            name: 'แตงโม',
            lastname: 'รักผลไม้',
            provider: '-'
        }, {
            email: 'd@d.com',
            name: 'มะม่วง',
            lastname: 'รักผลไม้',
            provider: 'Facebook'
        }]
        res.send(user);
    })

module.exports = router;
