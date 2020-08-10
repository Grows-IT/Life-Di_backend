var express = require('express');

const router = express.Router();

router.route('/journal')
    .get(function (req, res) {
        const info = {
            pic: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-cute-pets-attack-cute-cartoon-banner-image_194075.jpg',
            title: 'บทความที่ 1',
            info: 'Some quick example text to build on the card title and make up the bulk of the cards content',
            count: '2,145',
            date: '1/2/2019'
        }
        res.send(info);
    })

module.exports = router;