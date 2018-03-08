
const express = require('express');
const router = express.Router();
const problemService = require('../services/problemService');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
//get problem
router.get('/problems/:id', function(req, res){
  const id = req.params.id;
  problemService.getProblem(+id)
   .then(problems => res.json(problems));
 
 });
//get problems
router.get('/problems', function(req, res){
 problemService.getProblems()
  .then(problems => res.json(problems));

});
//post problem
// router.post('/problems',jsonParser, function(req, res){
//   problemService.addProblem(req.body)
//     .then(problem => {
//       res.json(problem);
//     }, (error) => {
//        res.status(400).send("problem has exist error");
//     });
// });

router.post('/problems', jsonParser, (req, res) => {
  problemService.addProblem(req.body)
      .then(problem => {
          res.json(problem);
      }, (error) => {
          res.status(400).send('Problem name already exists!');
      });
});
module.exports = router;


