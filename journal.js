var express = require('express');

const router = express.Router();

router.route('/journal')
    .get(function (req, res) {
        const info = {
            pic: 'https://www.thewellnessworkshop.org/wp-content/uploads/2014/01/fruit-banner.jpg',
            title: 'กินแบบ “เมดิเตอร์เรเนียน” ไขมันดี คาร์บดี เป็นอย่างไร?',
            info: 'Some quick example text to build on the card title and make up the bulk of the cards content',
            count: '2,145',
            date: '1/2/2019'
        }
        res.send(info);
    })

router.route('/journals')
    .get((req, res) => {
        const info = [{
            journalPic: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-cute-pets-attack-cute-cartoon-banner-image_194075.jpg',
            journalTitle: 'journal1',
            journalInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
            journalCreator: 'one',
            journalCount: '600',
            journalCreateDate: 'January 30, 2020 19:30'
        }, {
            journalPic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
            journalTitle: 'journal2',
            journalInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
            journalCreator: 'two',
            journalCount: '500',
            journalCreateDate: 'June 10, 2020 10:00'
        }, {
            journalPic: 'https://www.aware.org.sg/wp-content/uploads/Ria-Caregivers-600x511.jpg',
            journalTitle: 'journal3',
            journalInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
            journalCreator: 'three',
            journalCount: '400',
            journalCreateDate: 'April 5, 2019 19:30'
        }, {
            journalPic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
            journalTitle: 'journal4',
            journalInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
            journalCreator: 'four',
            journalCount: '300',
            journalCreateDate: 'December 10, 2020 19:30'
        }, {
            journalPic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
            journalTitle: 'journal5',
            journalInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
            journalCreator: 'five',
            journalCount: '200',
            journalCreateDate: 'October 14, 2015 19:30'
        }, {
            journalPic: 'https://cdn11.bigcommerce.com/s-7edce/images/stencil/1000x1000/products/9649/170851/indigo-2020-classic-anne-story-undated-diary-journal-13__79895.1572967566.jpg?c=2',
            journalTitle: 'journal6',
            journalInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
            journalCreator: 'six',
            journalCount: '100',
            journalCreateDate: 'July 10, 2020 19:30'
        }, {
            journalPic: 'https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-cute-pets-attack-cute-cartoon-banner-image_194075.jpg',
            journalTitle: 'journal1',
            journalInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
            journalCreator: 'one',
            journalCount: '600',
            journalCreateDate: 'January 30, 2020 19:30'
        }, {
            journalPic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
            journalTitle: 'journal2',
            journalInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
            journalCreator: 'two',
            journalCount: '500',
            journalCreateDate: 'June 10, 2020 10:00'
        }, {
            journalPic: 'https://www.aware.org.sg/wp-content/uploads/Ria-Caregivers-600x511.jpg',
            journalTitle: 'journal3',
            journalInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
            journalCreator: 'three',
            journalCount: '400',
            journalCreateDate: 'April 5, 2019 19:30'
        }, {
            journalPic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
            journalTitle: 'journal4',
            journalInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
            journalCreator: 'four',
            journalCount: '300',
            journalCreateDate: 'December 10, 2020 19:30'
        }, {
            journalPic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
            journalTitle: 'journal5',
            journalInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
            journalCreator: 'five',
            journalCount: '200',
            journalCreateDate: 'October 14, 2015 19:30'
        }, {
            journalPic: 'https://cdn11.bigcommerce.com/s-7edce/images/stencil/1000x1000/products/9649/170851/indigo-2020-classic-anne-story-undated-diary-journal-13__79895.1572967566.jpg?c=2',
            journalTitle: 'journal6',
            journalInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
            journalCreator: 'six',
            journalCount: '100',
            journalCreateDate: 'July 10, 2020 19:30'
        }]
        res.send(info);
    })

router.route('/news')
    .get((req, res) => {
        const info = [{
            pic: 'https://image.shutterstock.com/image-vector/news-anchor-on-tv-breaking-260nw-664193674.jpg',
            title: 'news1',
            info: 'news 1 is about...',
            creator: 'one',
            count: '100',
            date: 'May 5, 2010 19:30'
        }, {
            pic: 'https://image.shutterstock.com/image-vector/news-anchor-on-tv-breaking-260nw-442698565.jpg',
            title: 'news2',
            info: 'news 2 is about...',
            creator: 'two',
            count: '200',
            date: 'May 10, 2020 19:30'
        }, {
            pic: 'https://image.freepik.com/free-vector/anchorman-breaking-news-tv-screen-layout_44102-98.jpg',
            title: 'news3',
            info: 'news 3 is about...',
            creator: 'three',
            count: '300',
            date: 'April 10, 2020 19:30'
        }, {
            pic: 'https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1',
            title: 'news4',
            info: 'news 4 is about...',
            creator: 'four',
            count: '400',
            date: 'December 10, 2020 19:30'
        }, {
            pic: 'https://www.news10.com/wp-content/uploads/sites/64/2020/07/BREAKING-NEWS-GENERIC-1.jpg?w=1920&h=1080&crop=1',
            title: 'news5',
            info: 'news 5 is about...',
            creator: 'five',
            count: '500',
            date: 'July 10, 2020 19:30'
        }, {
            pic: 'https://image.shutterstock.com/image-vector/breaking-news-live-on-world-260nw-589076237.jpg',
            title: 'news6',
            info: 'news 6 is about...',
            creator: 'six',
            count: '600',
            date: 'October 10, 2017 19:30'
        }]
        res.send(info)

    })

module.exports = router;