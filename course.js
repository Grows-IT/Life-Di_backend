var express = require('express');

const router = express.Router();
mycourse = [{
    courseId: 1,
    coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
    courseTitle: 'บทเรียนวิกฤตต้มยำกุ้ง',
    courseInfo: 'เรียนรู้ประวัติศาสตร์วิกฤตต้มยำ อะไรคือสาเหตุ และเราได้บทเรียนอะไรจากวิกฤตครั้งนี้',
    courseProgress: 35,
    coursePrice: 4700,
    createDate: 'August 3, 2020 12:00',
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
            name: 'ดร.มะลิ',
            description: 'อย่าทำวันนี้ให้ดีที่สุด เพราะวันพรุ่งนี้จะไม่มีไรทำ',
            profilePic: 'https://humanimals.co.nz/wp-content/uploads/2019/11/blank-profile-picture-973460_640.png'
        },
    },
    courseReview: {
        courseRating: 3.5,
        courseReviewNumber: 30,
        review: [{
            userName: 'นาย วันจันทร์',
            profilePic: 'https://humanimals.co.nz/wp-content/uploads/2019/11/blank-profile-picture-973460_640.png',
            title: 'เข้าใจง่ายดี สอนรู้เรื่อง',
            comment: 'ตอนแรกคิดว่าจะสอนเข้าใจยาก เรียนไปทีแรกถึงกับหลับ รอบที่สองเลยมาลองดูใหม่ก็หลับเหมือนกัน รอบที่สามเข้าใจเลย ว่าต้องไม่เรียนแล้ว',
            date: '25/4/2020',
            rating: 3
        }, {
            userName: 'นาย วันอังคาร',
            profilePic: 'https://humanimals.co.nz/wp-content/uploads/2019/11/blank-profile-picture-973460_640.png',
            title: 'สอนสนุกมากกก เข้าใจ',
            comment: 'สอนดีมาก',
            date: '4/9/2020',
            rating: 3
        }]
    },
    chatCourse: {
        comment: [{
            userName: 'นาย วันพุธ',
            profilePic: 'https://humanimals.co.nz/wp-content/uploads/2019/11/blank-profile-picture-973460_640.png',
            comment: 'ตอนแรกคิดว่าจะสอนเข้าใจยาก เรียนไปทีแรกถึงกับหลับ รอบที่สองเลยมาลองดูใหม่ก็หลับเหมือนกัน รอบที่สามเข้าใจเลยว่าไม่ต้องเรียนแล้ว',
            date: '25/4/2020',
        }, {
            userName: 'นาย วันพฤหัส',
            profilePic: 'https://humanimals.co.nz/wp-content/uploads/2019/11/blank-profile-picture-973460_640.png',
            comment: 'สอนดีมาก',
            date: '4/9/2020',
        }]
    }
}, {
    courseId: 2,
    coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
    courseTitle: 'Donald J. Trump',
    courseInfo: 'ชีวประวัติของ Donald J. Trump',
    courseProgress: 15,
    coursePrice: 2900,
    createDate: 'June 3, 2020 12:00',
    // courseEnd: 'June 28, 2020 19:30',
    courseCategory: 'biography',
    courseReview: {
        courseRating: 4.5,
        courseReviewNumber: 24,
    },
    aboutCourse: {
        courseDetail: 'เยอรมันตากาล็อกฮินดี ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก',
        courseBy: {
            name: 'อ.อัญชัน',
            description: 'อย่าทำวันนี้ให้ดีที่สุด เพราะวันพรุ่งนี้จะไม่มีไรทำ',
            profilePic: 'https://humanimals.co.nz/wp-content/uploads/2019/11/blank-profile-picture-973460_640.png'
        },
    },
}, {
    courseId: 3,
    coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
    courseTitle: 'ภาษาอังกฤษในชีวิตประจำวัน',
    courseInfo: 'ภาษาอังกฤษในชีวิตประจำวัน จะสอนให้รู้เกี่ยวการสนทนาพื้นฐาน',
    courseProgress: 0,
    coursePrice: 3800,
    createDate: 'October 1, 2020 10:00',
    // courseEnd: 'October 30, 2020 19:30',
    courseCategory: 'language',
    courseReview: {
        courseRating: 5,
        courseReviewNumber: 95,
    },
    aboutCourse: {
        courseDetail: 'เยอรมันตากาล็อกฮินดี ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก',
        courseBy: {
            name: 'อ.บานไม่รู้โรย',
            description: 'อย่าทำวันนี้ให้ดีที่สุด เพราะวันพรุ่งนี้จะไม่มีไรทำ',
            profilePic: 'https://humanimals.co.nz/wp-content/uploads/2019/11/blank-profile-picture-973460_640.png'
        },
    },
}, {
    courseId: 4,
    coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
    courseTitle: 'BIG PRESCHOOL',
    courseInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
    courseProgress: 85,
    coursePrice: 4000,
    createDate: 'January 1, 2020 12:00',
    // courseEnd: 'January 30, 2020 19:30',
    courseCategory: 'language',
    courseReview: {
        courseRating: 3.8,
        courseReviewNumber: 81,
    },
    aboutCourse: {
        courseDetail: 'เยอรมันตากาล็อกฮินดี ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก',
        courseBy: {
            name: 'ผศ.กล้วยไม้',
            description: 'อย่าทำวันนี้ให้ดีที่สุด เพราะวันพรุ่งนี้จะไม่มีไรทำ',
            profilePic: 'https://humanimals.co.nz/wp-content/uploads/2019/11/blank-profile-picture-973460_640.png'
        },
    },

}, {
    courseId: 5,
    coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
    courseTitle: 'การลอกการบ้านอย่างมีศิลปะ',
    courseInfo: 'on the card title and make up',
    courseProgress: 100,
    coursePrice: 6000,
    createDate: 'August 1, 2020 12:00',
    // courseEnd: 'August 30, 2020 19:30',
    courseCategory: 'lifestyle',
    courseReview: {
        courseRating: 3.1,
        courseReviewNumber: 20,
    },
    aboutCourse: {
        courseDetail: 'เยอรมันตากาล็อกฮินดี ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก',
        courseBy: {
            name: 'รศ.ดาวเรือง',
            description: 'อย่าทำวันนี้ให้ดีที่สุด เพราะวันพรุ่งนี้จะไม่มีไรทำ',
            profilePic: 'https://humanimals.co.nz/wp-content/uploads/2019/11/blank-profile-picture-973460_640.png'
        },
    },

}, {
    courseId: 6,
    coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
    courseTitle: 'ภาษาอังกฤษ',
    courseInfo: 'bbbbbbbbbbbbbb',
    courseProgress: 60,
    coursePrice: 1800,
    createDate: 'April 3, 2020 12:00',
    // courseEnd: 'April 3, 2021 19:30',
    courseCategory: 'language',
    courseReview: {
        courseRating: 3.8,
        courseReviewNumber: 5,
    },
    aboutCourse: {
        courseDetail: 'เยอรมันตากาล็อกฮินดี ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก',
        courseBy: {
            name: 'อ.ชบา',
            description: 'อย่าทำวันนี้ให้ดีที่สุด เพราะวันพรุ่งนี้จะไม่มีไรทำ',
            profilePic: 'https://humanimals.co.nz/wp-content/uploads/2019/11/blank-profile-picture-973460_640.png'
        },
    },

}, {
    courseId: 7,
    coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
    courseTitle: 'QWERTY',
    courseInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
    courseProgress: 36,
    coursePrice: 3500,
    createDate: 'September 3, 2020 12:00',
    // courseEnd: 'September 30, 2020 19:30',
    courseCategory: 'language',
    courseReview: {
        courseRating: 2,
        courseReviewNumber: 35,
    },
    aboutCourse: {
        courseDetail: 'เยอรมันตากาล็อกฮินดี ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก',
        courseBy: {
            name: 'อ.กุหลาบ',
            description: 'อย่าทำวันนี้ให้ดีที่สุด เพราะวันพรุ่งนี้จะไม่มีไรทำ',
            profilePic: 'https://humanimals.co.nz/wp-content/uploads/2019/11/blank-profile-picture-973460_640.png'
        },
    },

}, {
    courseId: 8,
    coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
    courseTitle: 'If Animals Kissed Good Night',
    courseInfo: 'on the card title and make up',
    courseProgress: 89,
    coursePrice: 2600,
    createDate: 'December 1, 2020 12:00',
    // courseEnd: 'December 30, 2020 19:30',
    courseCategory: 'tale',
    courseReview: {
        courseRating: 4.2,
        courseReviewNumber: 15,
    },
    aboutCourse: {
        courseDetail: 'เยอรมันตากาล็อกฮินดี ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก ซีริลลิกเตลุคูฮันกึล กไมถิลีคุรุมุขี ตากาล็อก ฮีบรูเซลติก  โอริยากัณณาฑไอริชเซลติกสวาฮิลี ฮันกึลคุรุมุขีสินธี อูรดูซูลูเบงกาลีอัสสมี สวาฮิลีไมถิลีฮินดีคุชราตีเซลติก',
        courseBy: {
            name: 'รศ.ลินลี่',
            description: 'อย่าทำวันนี้ให้ดีที่สุด เพราะวันพรุ่งนี้จะไม่มีไรทำ',
            profilePic: 'https://humanimals.co.nz/wp-content/uploads/2019/11/blank-profile-picture-973460_640.png'
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