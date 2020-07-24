var express = require('express');

const router = express.Router();

router.route('/journalshome')
    .get(function (req, res) {
        const info = [{
            journalPic: 'https://www.aware.org.sg/wp-content/uploads/Ria-Caregivers-600x511.jpg',
            journalTitle: 'journal1',
            journalInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content'
        }, {
            journalPic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
            journalTitle: 'journal2',
            journalInfo: 'aaaaaaaaaaaaaaaaaaaaaaaaaat'
        }, {
            journalPic: 'https://cdn11.bigcommerce.com/s-7edce/images/stencil/1000x1000/products/9649/170851/indigo-2020-classic-anne-story-undated-diary-journal-13__79895.1572967566.jpg?c=2',
            journalTitle: 'journal3',
            journalInfo: 'bbbbbbbbbbbbbb'
        }]
        res.send(info);
    })

router.route('/courseshome')
    .get(function (req, res) {
        const info = [{
            coursePic: 'https://smartual.ai/assets/images/course-banner.png',
            courseTitle: 'course1',
            courseInfo: 'course 1 is about...'
        }, {
            coursePic: 'https://www.itsolution.co.th/training/wp-content/uploads/2014/11/course-service3.jpg',
            courseTitle: 'course2',
            courseInfo: 'course 2 is about...'
        }, {
            coursePic: 'https://www.csqkynaenglish.com/images/csqkynaenglish/course_default.jpg',
            courseTitle: 'course3',
            courseInfo: 'course 3 is about...'
        }]
        res.send(info);
    })

router.route('/bannerhome')
    .get(function (req, res) {
        const allpic = ['https://dict.meemodel.com/image_og/50.jpg', 'https://p0.pikist.com/photos/825/405/serene-ethereal-calm-tree-forest-nature-natural-outdoors-park.jpg']
        res.send(allpic);
    })
module.exports = router;