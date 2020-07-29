var express = require('express');

const router = express.Router();

router.route('/mycourse')
    .get((req, res) => {
        console.log(req.query);
        let myCourse;
        if (req.query.id === '3318240668198269') {
            myCourse = [{
                coursePic: 'https://www.aware.org.sg/wp-content/uploads/Ria-Caregivers-600x511.jpg',
                courseTitle: 'QWERTY',
                courseInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
                courseProgress: 35
            }, {
                coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/8c3/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
                courseTitle: 'การลอกการบ้านอย่างมีศิลปะ',
                courseInfo: 'on the card title and make up',
                courseProgress: 15
            }, {
                coursePic: 'https://cdn11.bigcommerce.com/s-7edce/images/stencil/1000x1000/products/9649/170851/indigo-2020-classic-anne-story-undated-diary-journal-13__79895.1572967566.jpg?c=2',
                courseTitle: 'ภาษาอังกฤษ',
                courseInfo: 'bbbbbbbbbbbbbb',
                courseProgress: 0
            }, {
                coursePic: 'https://www.aware.org.sg/wp-content/uploads/Ria-Caregivers-600x511.jpg',
                courseTitle: 'QWERTY',
                courseInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
                courseProgress: 85
            }, {
                coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/8c3/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
                courseTitle: 'การลอกการบ้านอย่างมีศิลปะ',
                courseInfo: 'on the card title and make up',
                courseProgress: 100
            }, {
                coursePic: 'https://cdn11.bigcommerce.com/s-7edce/images/stencil/1000x1000/products/9649/170851/indigo-2020-classic-anne-story-undated-diary-journal-13__79895.1572967566.jpg?c=2',
                courseTitle: 'ภาษาอังกฤษ',
                courseInfo: 'bbbbbbbbbbbbbb',
                courseProgress: 60
            }, {
                coursePic: 'https://www.aware.org.sg/wp-content/uploads/Ria-Caregivers-600x511.jpg',
                courseTitle: 'QWERTY',
                courseInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
                courseProgress: 36
            }, {
                coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/8c3/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
                courseTitle: 'การลอกการบ้านอย่างมีศิลปะ',
                courseInfo: 'on the card title and make up',
                courseProgress: 89
            }]

        } else if (req.query.id === '114852582086026193162') {
            myCourse = [{
                coursePic: 'https://www.aware.org.sg/wp-content/uploads/Ria-Caregivers-600x511.jpg',
                courseTitle: 'ABC',
                courseInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
                courseProgress: 81
            }, {
                coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/8c3/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
                courseTitle: '1234',
                courseInfo: 'on the card title and make up',
                courseProgress: 61
            }, {
                coursePic: 'https://cdn11.bigcommerce.com/s-7edce/images/stencil/1000x1000/products/9649/170851/indigo-2020-classic-anne-story-undated-diary-journal-13__79895.1572967566.jpg?c=2',
                courseTitle: 'กขคง',
                courseInfo: 'bbbbbbbbbbbbbb',
                courseProgress: 95
            }, {
                coursePic: 'https://www.aware.org.sg/wp-content/uploads/Ria-Caregivers-600x511.jpg',
                courseTitle: '98765',
                courseInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
                courseProgress: 8
            }, {
                coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/8c3/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
                courseTitle: 'ASDFG',
                courseInfo: 'on the card title and make up',
                courseProgress: 15
            }, {
                coursePic: 'https://cdn11.bigcommerce.com/s-7edce/images/stencil/1000x1000/products/9649/170851/indigo-2020-classic-anne-story-undated-diary-journal-13__79895.1572967566.jpg?c=2',
                courseTitle: 'ภาษาอังกฤษ',
                courseInfo: 'bbbbbbbbbbbbbb',
                courseProgress: 25
            }, {
                coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/8c3/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
                courseTitle: 'การลอกการบ้านอย่างมีศิลปะ',
                courseInfo: 'on the card title and make up',
                courseProgress: 70
            }]

        }
        res.send(myCourse);
    })

module.exports = router;
