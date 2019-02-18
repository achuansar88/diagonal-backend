var express = require('express');
var router = express.Router();
const RomanticComedy = require('../public/models/romantic-comedy');
var mongoosePaginate = require('mongoose-paginate-v2');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addData', (req, res) => {
  // const romanticComedy = new RomanticComedy({
  //   "name": req.b
  // });
  RomanticComedy.insertMany(req.body.content).then((result) => {
    res.json({
      status: "success",
      message: "inserted",
      result: result
    })
  }).catch((err) => {
    res.json({
      status: "error",
      error: err
    })
  });
});

router.get('/getComedies', (req, res) => {

  RomanticComedy.paginate({}, { page:req.query.page, limit: 20 }).then(function(result) {
    res.json({
      status: "success",
      message: "Romatic comedy lists",
      result: result
    });

  }).catch((err) => {
    res.json({
      status: "error",
      message: "Romatic comedy lists not available",
      error: err
    });
  });

});
router.get('/search', (req, res) => {

  let search = req.query.search;

  RomanticComedy.find({ name: new RegExp(search, 'i') }, 'name poster-image').then((result) => {

    res.json({
      status: "success",
      message: "Romatic comedy lists",
      result: result
    });

  }).catch((err) => {
    res.json({
      status: "error",
      message: "Romatic comedy lists not available",
      error: err
    });
  });

});

module.exports = router;
