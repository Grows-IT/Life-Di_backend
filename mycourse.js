var express = require('express');

const router = express.Router();

router.route('/mycourse')
    .get((req, res) => {
        console.log(req.query);
        let myCourse;
        if (req.query.id === '3318240668198269') {
            myCourse = [{
                courseId: 1,
                coursePic: 'https://www.aware.org.sg/wp-content/uploads/Ria-Caregivers-600x511.jpg',
                courseTitle: 'บทเรียนวิกฤตต้มยำกุ้ง',
                courseInfo: 'เรียนรู้ประวัติศาสตร์วิกฤตต้มยำ อะไรคือสาเหตุ และเราได้บทเรียนอะไรจากวิกฤตครั้งนี้',
                courseBy: 'อ.หนู',
                courseRating: 3.5,
                courseProgress: 35
            }, {
                courseId: 2,
                coursePic: 'https://images-na.ssl-images-amazon.com/images/I/51xzDg7YGRL._SX329_BO1,204,203,200_.jpg',
                courseTitle: 'Donald J. Trump',
                courseInfo: 'ชีวประวัติของ Donald J. Trump',
                courseBy: 'อ.หมู',
                courseRating: 4.5,
                courseProgress: 15
            }, {
                courseId: 3,
                coursePic: 'https://cdn11.bigcommerce.com/s-7edce/images/stencil/1000x1000/products/9649/170851/indigo-2020-classic-anne-story-undated-diary-journal-13__79895.1572967566.jpg?c=2',
                courseTitle: 'ภาษาอังกฤษในชีวิตประจำวัน',
                courseInfo: 'ภาษาอังกฤษในชีวิตประจำวัน จะสอนให้รู้เกี่ยวการสนทนาพื้นฐาน',
                courseBy: 'อ.กวาง',
                courseRating: 5,
                courseProgress: 0
            }, {
                courseId: 4,
                coursePic: 'https://images-na.ssl-images-amazon.com/images/I/61xTjuVrwsL._SX375_BO1,204,203,200_.jpg',
                courseTitle: 'BIG PRESCHOOL',
                courseInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
                courseBy: 'อ.นก',
                courseRating: 3.8,
                courseProgress: 85
            }, {
                courseId: 5,
                coursePic: 'https://images-na.ssl-images-amazon.com/images/I/51aDh-YMFAL._SX331_BO1,204,203,200_.jpg',
                courseTitle: 'การลอกการบ้านอย่างมีศิลปะ',
                courseInfo: 'on the card title and make up',
                courseBy: 'อ.พังพอน',
                courseRating: 3.1,
                courseProgress: 100
            }, {
                courseId: 6,
                coursePic: 'https://cdn11.bigcommerce.com/s-7edce/images/stencil/1000x1000/products/9649/170851/indigo-2020-classic-anne-story-undated-diary-journal-13__79895.1572967566.jpg?c=2',
                courseTitle: 'ภาษาอังกฤษ',
                courseInfo: 'bbbbbbbbbbbbbb',
                courseBy: 'อ.ไก่',
                courseRating: 3.8,
                courseProgress: 60
            }, {
                courseId: 7,
                coursePic: 'https://www.aware.org.sg/wp-content/uploads/Ria-Caregivers-600x511.jpg',
                courseTitle: 'QWERTY',
                courseInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
                courseBy: 'อ.กา',
                courseRating: 2,
                courseProgress: 36
            }, {
                courseId: 8,
                coursePic: 'https://images-na.ssl-images-amazon.com/images/I/51iHM-M+ADL._SX258_BO1,204,203,200_.jpg',
                courseTitle: 'If Animals Kissed Good Night',
                courseInfo: 'on the card title and make up',
                courseBy: 'อ.เป็ด',
                courseRating: 4.2,
                courseProgress: 89
            }]
        } else if (req.query.id === '114852582086026193162') {
            myCourse = [{
                courseId: 1,
                coursePic: 'https://www.aware.org.sg/wp-content/uploads/Ria-Caregivers-600x511.jpg',
                courseTitle: 'ABC มาเรียนกันเถอะ',
                courseInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
                courseBy: 'อ.เป็ด',
                courseRating: 3.8,
                courseProgress: 81
            }, {
                courseId: 2,
                coursePic: 'https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SY344_BO1,204,203,200_.jpg',
                courseTitle: 'misstion to the moon',
                courseInfo: 'on the card title and make up',
                courseBy: 'อ.ปลา',
                courseRating: 4.5,
                courseProgress: 61
            }, {
                courseId: 3,
                coursePic: 'https://cdn11.bigcommerce.com/s-7edce/images/stencil/1000x1000/products/9649/170851/indigo-2020-classic-anne-story-undated-diary-journal-13__79895.1572967566.jpg?c=2',
                courseTitle: 'ภาษารัสเซีย',
                courseInfo: 'มาหัดพูดภาษารัสเซียกันเถอะ',
                courseBy: 'อ.พิราบ',
                courseRating: 3.9,
                courseProgress: 95
            }, {
                courseId: 4,
                coursePic: 'https://www.aware.org.sg/wp-content/uploads/Ria-Caregivers-600x511.jpg',
                courseTitle: 'จิตวิทยาเด็ก',
                courseInfo: 'สอนเด็กอย่างไรให้เติบโตมาอนาคตดี!!',
                courseBy: 'อ.งู',
                courseRating: 4.5,
                courseProgress: 8
            }, {
                courseId: 5,
                coursePic: 'https://images-na.ssl-images-amazon.com/images/I/41gRbWB7I-L._SX329_BO1,204,203,200_.jpg',
                courseTitle: 'ประวัติศาสตร์สงครามโลกครั้งที่ 1',
                courseInfo: 'on the card title and make up',
                courseBy: 'อ.ลิง',
                courseRating: 3.5,
                courseProgress: 15
            }, {
                courseId: 6,
                coursePic: 'https://cdn11.bigcommerce.com/s-7edce/images/stencil/1000x1000/products/9649/170851/indigo-2020-classic-anne-story-undated-diary-journal-13__79895.1572967566.jpg?c=2',
                courseTitle: 'ภาษาอังกฤษ',
                courseInfo: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
                courseBy: 'อ.คิงคอง',
                courseRating: 4.8,
                courseProgress: 25
            }, {
                courseId: 7,
                coursePic: 'https://images-na.ssl-images-amazon.com/images/I/61xTjuVrwsL._SX375_BO1,204,203,200_.jpg',
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
