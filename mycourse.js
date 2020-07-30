var express = require('express');

const router = express.Router();

router.route('/mycourse')
    .get((req, res) => {
        console.log(req.query);
        let myCourse;
        if (req.query.id === '3318240668198269') {
            myCourse = [{
                coursePic: 'https://www.aware.org.sg/wp-content/uploads/Ria-Caregivers-600x511.jpg',
                courseTitle: 'บทเรียนวิกฤตต้มยำกุ้ง',
                courseInfo: 'เรียนรู้ประวัติศาสตร์วิกฤตต้มยำ อะไรคือสาเหตุ และเราได้บทเรียนอะไรจากวิกฤตครั้งนี้',
                courseProgress: 35
            }, {
                coursePic: 'https://images-na.ssl-images-amazon.com/images/I/51xzDg7YGRL._SX329_BO1,204,203,200_.jpg',
                courseTitle: 'Donald J. Trump',
                courseInfo: 'ชีวประวัติของ Donald J. Trump',
                courseProgress: 15
            }, {
                coursePic: 'https://cdn11.bigcommerce.com/s-7edce/images/stencil/1000x1000/products/9649/170851/indigo-2020-classic-anne-story-undated-diary-journal-13__79895.1572967566.jpg?c=2',
                courseTitle: 'ภาษาอังกฤษในชีวิตประจำวัน',
                courseInfo: 'ภาษาอังกฤษในชีวิตประจำวัน จะสอนให้รู้เกี่ยวการสนทนาพื้นฐาน',
                courseProgress: 0
            }, {
                coursePic: 'https://images-na.ssl-images-amazon.com/images/I/61xTjuVrwsL._SX375_BO1,204,203,200_.jpg',
                courseTitle: 'BIG PRESCHOOL',
                courseInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
                courseProgress: 85
            }, {
                coursePic: 'https://images-na.ssl-images-amazon.com/images/I/51aDh-YMFAL._SX331_BO1,204,203,200_.jpg',
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
                coursePic: 'https://images-na.ssl-images-amazon.com/images/I/51iHM-M+ADL._SX258_BO1,204,203,200_.jpg',
                courseTitle: 'If Animals Kissed Good Night',
                courseInfo: 'on the card title and make up',
                courseProgress: 89
            }]
        } else if (req.query.id === '114852582086026193162') {
            myCourse = [{
                coursePic: 'https://www.aware.org.sg/wp-content/uploads/Ria-Caregivers-600x511.jpg',
                courseTitle: 'ABC มาเรียนกันเถอะ',
                courseInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content',
                courseProgress: 81
            }, {
                coursePic: 'https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SY344_BO1,204,203,200_.jpg',
                courseTitle: 'misstion to the moon',
                courseInfo: 'on the card title and make up',
                courseProgress: 61
            }, {
                coursePic: 'https://cdn11.bigcommerce.com/s-7edce/images/stencil/1000x1000/products/9649/170851/indigo-2020-classic-anne-story-undated-diary-journal-13__79895.1572967566.jpg?c=2',
                courseTitle: 'ภาษารัสเซีย',
                courseInfo: 'มาหัดพูดภาษารัสเซียกันเถอะ',
                courseProgress: 95
            }, {
                coursePic: 'https://www.aware.org.sg/wp-content/uploads/Ria-Caregivers-600x511.jpg',
                courseTitle: 'จิตวิทยาเด็ก',
                courseInfo: 'สอนเด็กอย่างไรให้เติบโตมาอนาคตดี!!',
                courseProgress: 8
            }, {
                coursePic: 'https://images-na.ssl-images-amazon.com/images/I/41gRbWB7I-L._SX329_BO1,204,203,200_.jpg',
                courseTitle: 'ประวัติศาสตร์สงครามโลกครั้งที่ 1',
                courseInfo: 'on the card title and make up',
                courseProgress: 15
            }, {
                coursePic: 'https://cdn11.bigcommerce.com/s-7edce/images/stencil/1000x1000/products/9649/170851/indigo-2020-classic-anne-story-undated-diary-journal-13__79895.1572967566.jpg?c=2',
                courseTitle: 'ภาษาอังกฤษ',
                courseInfo: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
                courseProgress: 25
            }, {
                coursePic: 'https://images-na.ssl-images-amazon.com/images/I/61xTjuVrwsL._SX375_BO1,204,203,200_.jpg',
                courseTitle: 'ประวัติศาสตร์สงครามโลกครั้งที่ 2',
                courseInfo: 'on the card title and make up',
                courseProgress: 70
            }]
        }
        res.send(myCourse);
    })

module.exports = router;
