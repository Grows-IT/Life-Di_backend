var express = require('express');

const router = express.Router();
mycourse = [{
    courseId: 1,
    coursePic: 'https://www.aware.org.sg/wp-content/uploads/Ria-Caregivers-600x511.jpg',
    courseTitle: 'บทเรียนวิกฤตต้มยำกุ้ง',
    courseInfo: 'เรียนรู้ประวัติศาสตร์วิกฤตต้มยำ อะไรคือสาเหตุ และเราได้บทเรียนอะไรจากวิกฤตครั้งนี้',
    courseProgress: 35,
    createDatet: 'August 3, 2020 12:00',
    // courseEnd: 'August 3, 2020 19:30',
    courseCategory: 'history',
    courseLesson: [{
        lessonName: 'วิกฤตเศรษฐกิจ คืออะไร?',
        topic: [{
            topicName: 'วิกฤตเศรษฐกิจ คือ'
        }, {
            topicName: 'วิกฤตเกิดขึ้นได้อย่างไร'
        }]
    }, {
        lessonName: 'ต้มยำกุ้งไม่ใช่อาหาร ?',
        topic: [{
            topicName: 'ทำไมถึงเรียกว่า "ต้มยำกุ้ง'
        }]
    }, {
        lessonName: 'ผลกระทบ ?',
        topic: [{
            topicName: 'ผลกระทบฝั่งเอเชีย'
        }, {
            topicName: 'ผลกระทบฝั่งยุโรป'
        }, {
            topicName: 'ผลกระทบฝั่งอเมริกา'
        }]
    }],
    aboutCourse: {
        courseDetail: 'เยอรมันตากาล็อกฮินดี ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก',
        courseBy: {
            name: 'ลุง',
            description: 'o n e วันหนึ่ง',
            profilePic: 'https://storage.thaipost.net/main/uploads/photos/big/20190412/image_big_5caff2dcf29fe.jpg'
        },
    },
    courseReview: {
        courseRating: 3.5,
        courseReviewNumber: 30,
        review: [{
            userName: 'ปลาหยุด',
            profilePic: 'https://storage.thaipost.net/main/uploads/photos/big/20190412/image_big_5caff2dcf29fe.jpg',
            title: 'เข้าใจง่ายดี สอนรู้เรื่อง',
            comment: 'ตอนแรกคิดว่าจะสอนเข้าใจยาก เรียนไปทีแรกถึงกับหลับ รอบที่สองเลยมาลองดูใหม่ก็หลับเหมือนกัน รอบที่สามเข้าใจเลย ว่าต้องไม่เรียนแล้ว',
            date: '25/4/2020',
            rating: 3
        }, {
            userName: 'ปลาขยับ',
            profilePic: 'https://storage.thaipost.net/main/uploads/photos/big/20190412/image_big_5caff2dcf29fe.jpg',
            title: 'สอนสนุกมากกก เข้าใจ',
            comment: 'สอนดีมาก',
            date: '4/9/2020',
            rating: 3
        }]
    },
    chatCourse: {
        comment: [{
            userName: 'ปลาหยุด',
            profilePic: 'https://www.thebangkokinsight.com/wp-content/uploads/2019/10/223178.jpg',
            comment: 'ตอนแรกคิดว่าจะสอนเข้าใจยาก เรียนไปทีแรกถึงกับหลับ รอบที่สองเลยมาลองดูใหม่ก็หลับเหมือนกัน รอบที่สามเข้าใจเลยว่าไม่ต้องเรียนแล้ว',
            date: '25/4/2020',
        }, {
            userName: 'ปลาขยับ',
            profilePic: 'https://www.thairath.co.th/media/dFQROr7oWzulq5FZYSemi26hBQEHjrwfF6LOpyg9o8bAGYjFBiXxdVFPoT18cnz8gF4.jpg',
            comment: 'สอนดีมาก',
            date: '4/9/2020',
        }]
    }
}, {
    courseId: 2,
    coursePic: 'https://images-na.ssl-images-amazon.com/images/I/51xzDg7YGRL._SX329_BO1,204,203,200_.jpg',
    courseTitle: 'Donald J. Trump',
    courseInfo: 'ชีวประวัติของ Donald J. Trump',
    courseProgress: 15,
    createDatet: 'June 3, 2020 12:00',
    // courseEnd: 'June 28, 2020 19:30',
    courseCategory: 'biography',
    courseBy: 'อ.หมู',
    courseReview: {
        courseRating: 4.5,
        courseReviewNumber: 24,
    },
    aboutCourse: {
        courseDetail: 'เยอรมันตากาล็อกฮินดี ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก',
        courseBy: {
            name: 'ลุงลู่',
            description: 'o n e วันหนึ่ง',
            profilePic: 'https://storage.thaipost.net/main/uploads/photos/big/20190412/image_big_5caff2dcf29fe.jpg'
        },
    },
}, {
    courseId: 3,
    coursePic: 'https://cdn11.bigcommerce.com/s-7edce/images/stencil/1000x1000/products/9649/170851/indigo-2020-classic-anne-story-undated-diary-journal-13__79895.1572967566.jpg?c=2',
    courseTitle: 'ภาษาอังกฤษในชีวิตประจำวัน',
    courseInfo: 'ภาษาอังกฤษในชีวิตประจำวัน จะสอนให้รู้เกี่ยวการสนทนาพื้นฐาน',
    courseProgress: 0,
    createDatet: 'October 1, 2020 10:00',
    // courseEnd: 'October 30, 2020 19:30',
    courseCategory: 'language',
    courseBy: 'อ.กวาง',
    courseReview: {
        courseRating: 5,
        courseReviewNumber: 95,
    },
    aboutCourse: {
        courseDetail: 'เยอรมันตากาล็อกฮินดี ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก',
        courseBy: {
            name: 'ลุงปู่',
            description: 'o n e วันหนึ่ง',
            profilePic: 'https://storage.thaipost.net/main/uploads/photos/big/20190412/image_big_5caff2dcf29fe.jpg'
        },
    },
}, {
    courseId: 4,
    coursePic: 'https://images-na.ssl-images-amazon.com/images/I/61xTjuVrwsL._SX375_BO1,204,203,200_.jpg',
    courseTitle: 'BIG PRESCHOOL',
    courseInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
    courseProgress: 85,
    createDatet: 'January 1, 2020 12:00',
    // courseEnd: 'January 30, 2020 19:30',
    courseCategory: 'language',
    courseBy: 'อ.นก',
    courseReview: {
        courseRating: 3.8,
        courseReviewNumber: 81,
    },
    aboutCourse: {
        courseDetail: 'เยอรมันตากาล็อกฮินดี ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก',
        courseBy: {
            name: 'ลุงกู่',
            description: 'o n e วันหนึ่ง',
            profilePic: 'https://storage.thaipost.net/main/uploads/photos/big/20190412/image_big_5caff2dcf29fe.jpg'
        },
    },

}, {
    courseId: 5,
    coursePic: 'https://images-na.ssl-images-amazon.com/images/I/51aDh-YMFAL._SX331_BO1,204,203,200_.jpg',
    courseTitle: 'การลอกการบ้านอย่างมีศิลปะ',
    courseInfo: 'on the card title and make up',
    courseProgress: 100,
    createDatet: 'August 1, 2020 12:00',
    // courseEnd: 'August 30, 2020 19:30',
    courseCategory: 'lifestyle',
    courseBy: 'อ.พังพอน',
    courseReview: {
        courseRating: 3.1,
        courseReviewNumber: 20,
    },
    aboutCourse: {
        courseDetail: 'เยอรมันตากาล็อกฮินดี ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก',
        courseBy: {
            name: 'ลุงนู่',
            description: 'o n e วันหนึ่ง',
            profilePic: 'https://storage.thaipost.net/main/uploads/photos/big/20190412/image_big_5caff2dcf29fe.jpg'
        },
    },

}, {
    courseId: 6,
    coursePic: 'https://cdn11.bigcommerce.com/s-7edce/images/stencil/1000x1000/products/9649/170851/indigo-2020-classic-anne-story-undated-diary-journal-13__79895.1572967566.jpg?c=2',
    courseTitle: 'ภาษาอังกฤษ',
    courseInfo: 'bbbbbbbbbbbbbb',
    courseProgress: 60,
    createDatet: 'April 3, 2020 12:00',
    // courseEnd: 'April 3, 2021 19:30',
    courseCategory: 'language',
    courseBy: 'อ.ไก่',
    courseReview: {
        courseRating: 3.8,
        courseReviewNumber: 5,
    },
    aboutCourse: {
        courseDetail: 'เยอรมันตากาล็อกฮินดี ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก',
        courseBy: {
            name: 'ลุงบู่',
            description: 'o n e วันหนึ่ง',
            profilePic: 'https://storage.thaipost.net/main/uploads/photos/big/20190412/image_big_5caff2dcf29fe.jpg'
        },
    },

}, {
    courseId: 7,
    coursePic: 'https://www.aware.org.sg/wp-content/uploads/Ria-Caregivers-600x511.jpg',
    courseTitle: 'QWERTY',
    courseInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
    courseProgress: 36,
    createDatet: 'September 3, 2020 12:00',
    // courseEnd: 'September 30, 2020 19:30',
    courseCategory: 'language',
    courseBy: 'อ.กา',
    courseReview: {
        courseRating: 2,
        courseReviewNumber: 35,
    },
    aboutCourse: {
        courseDetail: 'เยอรมันตากาล็อกฮินดี ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก',
        courseBy: {
            name: 'ลุงสู่',
            description: 'o n e วันหนึ่ง',
            profilePic: 'https://storage.thaipost.net/main/uploads/photos/big/20190412/image_big_5caff2dcf29fe.jpg'
        },
    },

}, {
    courseId: 8,
    coursePic: 'https://images-na.ssl-images-amazon.com/images/I/51iHM-M+ADL._SX258_BO1,204,203,200_.jpg',
    courseTitle: 'If Animals Kissed Good Night',
    courseInfo: 'on the card title and make up',
    courseProgress: 89,
    createDatet: 'December 1, 2020 12:00',
    // courseEnd: 'December 30, 2020 19:30',
    courseCategory: 'tale',
    courseBy: 'อ.เป็ด',
    courseReview: {
        courseRating: 4.2,
        courseReviewNumber: 15,
    },
    aboutCourse: {
        courseDetail: 'เยอรมันตากาล็อกฮินดี ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก',
        courseBy: {
            name: 'ลุงขู่',
            description: 'o n e วันหนึ่ง',
            profilePic: 'https://storage.thaipost.net/main/uploads/photos/big/20190412/image_big_5caff2dcf29fe.jpg'
        },
    },
}]

router.route('/course')
    .get((req, res) => {
        let course;
        for (let i = 0; i < mycourse.length; i++) {
            if (mycourse[i].courseId === +req.query.courseId) {
                course = mycourse[i];
            }
        }
        res.send(course);
    })

router.route('/courses')
    .get((req, res) => {
        res.send(mycourse);
    })

module.exports = router;