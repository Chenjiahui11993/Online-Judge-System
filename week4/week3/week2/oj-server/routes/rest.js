
const express = require('express');
const router = express.Router();
const problemService = require('../services/problemService');
const bodyParser = require('body-parser');
const ndoeRestClient = require('node-rest-client').Client;
const jsonParser = bodyParser.json();
const restClient = new ndoeRestClient();

EXECUTOR_SERVER_URL = 'http://localhost:5000/build_and_run';
restClient.registerMethod('build_and_run', EXECUTOR_SERVER_URL, 'POST');
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
router.post('/build_and_run', jsonParser, (req,res) => {
   // console.log(222);
    const userCodes = req.body.userCodes;
   const lang = req.body.lang;
    console.log('code', userCodes, 'language', lang);
    
   // res.json({'text': 'hello from nodejs'});
   restClient.methods.build_and_run(
       {
           data: {code: userCodes, lang: lang},
           headers: {'Content-Type': 'application/json'}
       },
       (data, response) => {
        const text = `Build output: ${data['build']}. Execute Output: ${data['run']}`;
        data['text'] = text;
        res.json(data);
       }
   )
});
module.exports = router;


