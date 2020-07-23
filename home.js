var express = require('express');

const router = express.Router();

router.route('/courseshome')
.get(function (req, res) {
    const info = [{
        journalPic: 'https://smartual.ai/assets/images/course-banner.png',
        journalTitle: 'journal1',
        journalInfo: 'Some quick example text to build on the card title and make up the bulk of the cards content'
    }, {
        journalPic: 'https://www.itsolution.co.th/training/wp-content/uploads/2014/11/course-service3.jpg',
        journalTitle: 'journal2',
        journalInfo: 'aaaaaaaaaaaaaaaaaaaaaaaaaat'
    },{
        journalPic: 'https://www.csqkynaenglish.com/images/csqkynaenglish/course_default.jpg',
        journalTitle: 'journal3',
        journalInfo: 'bbbbbbbbbbbbbb'
    }]
    res.send(info);
  })

  router.route('/bannerhome')
.get(function (req, res) {
    const allpic = ['https://dict.meemodel.com/image_og/50.jpg','https://p0.pikist.com/photos/825/405/serene-ethereal-calm-tree-forest-nature-natural-outdoors-park.jpg']
    res.send(allpic);
  })
module.exports = router;