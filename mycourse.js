var express = require('express');

const router = express.Router();

router.route('/mycourse')
    .get((req, res) => {
        console.log(req.query);
        let myCourse;
        if (req.query.id === '3318240668198269') {
            myCourse = [{
                courseId: 1,
                coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
                courseTitle: 'บทเรียนวิกฤตต้มยำกุ้ง',
                courseInfo: 'เรียนรู้ประวัติศาสตร์วิกฤตต้มยำ อะไรคือสาเหตุ และเราได้บทเรียนอะไรจากวิกฤตครั้งนี้',
                courseBy: 'อ.หนู',
                courseRating: 3.5,
                courseProgress: 35
            }, {
                courseId: 2,
                coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
                courseTitle: 'Donald J. Trump',
                courseInfo: 'ชีวประวัติของ Donald J. Trump',
                courseBy: 'อ.หมู',
                courseRating: 4.5,
                courseProgress: 15
            }, {
                courseId: 3,
                coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
                courseTitle: 'ภาษาอังกฤษในชีวิตประจำวัน',
                courseInfo: 'ภาษาอังกฤษในชีวิตประจำวัน จะสอนให้รู้เกี่ยวการสนทนาพื้นฐาน',
                courseBy: 'อ.กวาง',
                courseRating: 5,
                courseProgress: 0
            }, {
                courseId: 4,
                coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
                courseTitle: 'BIG PRESCHOOL',
                courseInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
                courseBy: 'อ.นก',
                courseRating: 3.8,
                courseProgress: 85
            }, {
                courseId: 5,
                coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
                courseTitle: 'การลอกการบ้านอย่างมีศิลปะ',
                courseInfo: 'on the card title and make up',
                courseBy: 'อ.พังพอน',
                courseRating: 3.1,
                courseProgress: 100
            }, {
                courseId: 6,
                coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
                courseTitle: 'ภาษาอังกฤษ',
                courseInfo: 'bbbbbbbbbbbbbb',
                courseBy: 'อ.ไก่',
                courseRating: 3.8,
                courseProgress: 60
            }, {
                courseId: 7,
                coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
                courseTitle: 'QWERTY',
                courseInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
                courseBy: 'อ.กา',
                courseRating: 2,
                courseProgress: 36
            }, {
                courseId: 8,
                coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
                courseTitle: 'If Animals Kissed Good Night',
                courseInfo: 'on the card title and make up',
                courseBy: 'อ.เป็ด',
                courseRating: 4.2,
                courseProgress: 89
            }]
        } else if (req.query.id === '114852582086026193162') {
            myCourse = [{
                courseId: 1,
                coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
                courseTitle: 'ABC มาเรียนกันเถอะ',
                courseInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
                courseBy: 'อ.เป็ด',
                courseRating: 3.8,
                courseProgress: 81
            }, {
                courseId: 2,
                coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
                courseTitle: 'misstion to the moon',
                courseInfo: 'on the card title and make up',
                courseBy: 'อ.ปลา',
                courseRating: 4.5,
                courseProgress: 61
            }, {
                courseId: 3,
                coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
                courseTitle: 'ภาษารัสเซีย',
                courseInfo: 'มาหัดพูดภาษารัสเซียกันเถอะ',
                courseBy: 'อ.พิราบ',
                courseRating: 3.9,
                courseProgress: 95
            }, {
                courseId: 4,
                coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
                courseTitle: 'จิตวิทยาเด็ก',
                courseInfo: 'สอนเด็กอย่างไรให้เติบโตมาอนาคตดี!!',
                courseBy: 'อ.งู',
                courseRating: 4.5,
                courseProgress: 8
            }, {
                courseId: 5,
                coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
                courseTitle: 'ประวัติศาสตร์สงครามโลกครั้งที่ 1',
                courseInfo: 'on the card title and make up',
                courseBy: 'อ.ลิง',
                courseRating: 3.5,
                courseProgress: 15
            }, {
                courseId: 6,
                coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
                courseTitle: 'ภาษาอังกฤษ',
                courseInfo: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
                courseBy: 'อ.คิงคอง',
                courseRating: 4.8,
                courseProgress: 25
            }, {
                courseId: 7,
                coursePic: 'https://images.twinkl.co.uk/tw1n/image/private/t_630_eco/image_repo/9c/83/t-or-1140-the-easter-journal-story-powerpoint-_ver_3.jpg',
                courseTitle: 'ประวัติศาสตร์สงครามโลกครั้งที่ 2',
                courseInfo: 'on the card title and make up',
                courseBy: 'อ.เพนกวิน',
                courseRating: 5,
                courseProgress: 70
            }]
        }
        res.send(myCourse);
    })

module.exports = router;
