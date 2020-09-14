var express = require('express');

const router = express.Router();

router.route('/journalsHome')
    .get(function (req, res) {
        const info = [{
            journalPic: 'https://www.thewellnessworkshop.org/wp-content/uploads/2014/01/fruit-banner.jpg',
            journalTitle: 'กินแบบ “เมดิเตอร์เรเนียน” ไขมันดี คาร์บดี เป็นอย่างไร?',
            journalInfo: 'นอกจากอาหารคลีนที่แบบที่เรารู้กันดีอยู่แล้วว่าต้องกินแบบที่ปรุงอาหารน้อยๆ....'
        }, {
            journalPic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
            journalTitle: 'journal2',
            journalInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content'
        }, {
            journalPic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
            journalTitle: 'journal3',
            journalInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content'
        }, {
            journalPic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
            journalTitle: 'journal4',
            journalInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content'
        }, {
            journalPic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
            journalTitle: 'journal5',
            journalInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content'
        }, {
            journalPic: 'https://cdn11.bigcommerce.com/s-7edce/images/stencil/1000x1000/products/9649/170851/indigo-2020-classic-anne-story-undated-diary-journal-13__79895.1572967566.jpg?c=2',
            journalTitle: 'journal6',
            journalInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content'
        }]
        res.send(info);
    })

router.route('/coursesHome')
    .get(function (req, res) {
        const info = [{
            coursePic: 'https://www.csqkynaenglish.com/images/csqkynaenglish/course_default.jpg',
            courseTitle: 'course1',
            courseInfo: 'course 1 is about...',
            price: 3500
        }, {
            coursePic: 'https://www.csqkynaenglish.com/images/csqkynaenglish/course_default.jpg',
            courseTitle: 'course2',
            courseInfo: 'course 2 is about...',
            price: 1900
        }, {
            coursePic: 'https://www.csqkynaenglish.com/images/csqkynaenglish/course_default.jpg',
            courseTitle: 'course3',
            courseInfo: 'course 3 is about...',
            price: 990
        }, {
            coursePic: 'https://www.csqkynaenglish.com/images/csqkynaenglish/course_default.jpg',
            courseTitle: 'course4',
            courseInfo: 'course 4 is about...',
            price: 2000
        }, {
            coursePic: 'https://www.csqkynaenglish.com/images/csqkynaenglish/course_default.jpg',
            courseTitle: 'course5',
            courseInfo: 'course 5 is about...',
            price: 4500
        }, {
            coursePic: 'https://www.csqkynaenglish.com/images/csqkynaenglish/course_default.jpg',
            courseTitle: 'course6',
            courseInfo: 'course 6 is about...',
            price: 2600
        }]
        res.send(info);
    })

router.route('/newsHome')
    .get(function (req, res) {
        const info = [{
            pic: 'https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-healthy-lifestyle-for-all-image_166269.jpg',
            title: 'ห่วงวิถีชีวิตคอนโด เสี่ยงปัญหาสุขภาพ',
            info: 'ปัจจุบันผู้คนนิยมเลือกพักอาศัยอาคารชุด หรือคอนโดมิเนียมมากขึ้น...',
            count: '100',
            date: '8/5/2010'
        }, {
            pic: 'https://image.shutterstock.com/image-vector/news-anchor-on-tv-breaking-260nw-442698565.jpg',
            title: 'news2',
            info: 'news 2 is about...',
            count: '200',
            date: '1/5/2010'
        }, {
            pic: 'https://image.freepik.com/free-vector/anchorman-breaking-news-tv-screen-layout_44102-98.jpg',
            title: 'news3',
            info: 'news 3 is about...',
            count: '300',
            date: '18/4/2010'
        }, {
            pic: 'https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1',
            title: 'news4',
            info: 'news 4 is about...',
            count: '400',
            date: '23/3/2010'
        }, {
            pic: 'https://www.news10.com/wp-content/uploads/sites/64/2020/07/BREAKING-NEWS-GENERIC-1.jpg?w=1920&h=1080&crop=1',
            title: 'news5',
            info: 'news 5 is about...',
            count: '500',
            date: '25/2/2010'
        }, {
            pic: 'https://image.shutterstock.com/image-vector/breaking-news-live-on-world-260nw-589076237.jpg',
            title: 'news6',
            info: 'news 6 is about...',
            count: '600',
            date: '20/1/2010'
        }]
        res.send(info);
    })

router.route('/bannerHome')
    .get(function (req, res) {
        const allpic = ['https://dict.meemodel.com/image_og/50.jpg', 'https://p0.pikist.com/photos/825/405/serene-ethereal-calm-tree-forest-nature-natural-outdoors-park.jpg']
        res.send(allpic);
    })

router.route('/cart')
    .get((req, res) => {
        const cart = [{
            name: 'วิกฤตต้มยำกุ้ง บทเรียนจากประวัติศาสคร์',
            price: 4500
        }, {
            name: 'ชีวประวัติของ Donald J. Trump',
            price: 3500
        }, {
            name: 'ภาษาอังกฤษในชีวิตประจำวัน',
            price: 2500
        }]
        res.send(cart);
    })
module.exports = router;