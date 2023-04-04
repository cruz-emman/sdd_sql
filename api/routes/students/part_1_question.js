const express = require('express');
const {
  addChoice,
  deleteChoices,
  getChoices,
  getAllChoices,
  getChoicesForUI,
} = require('../../controllers/students/choices.js');
const {
  addQuestion1,
  deleteQuestion1,
  getQuestion1,
  getSingleQuestion1,
  updateQuestion1,
  getQuestionType,
} = require('../../controllers/students/part_1_question.js');
const {
  addQuestion2,
  deleteQuestion2,
  getQuestion2,
  getSingleQuestion2,
  updateQuestion2,
  getQuestionType2,
} = require('../../controllers/students/part_2_question.js');
const {
  addQuestion3,
  deleteQuestion3,
  getQuestion3,
  getSingleQuestion3,
  updateQuestion3,
  getQuestionType3,
} = require('../../controllers/students/part_3_question.js');
const {
  addQuestion4,
  deleteQuestion4,
  getQuestion4,
  getSingleQuestion4,
  updateQuestion4,
  getQuestionType4,
} = require('../../controllers/students/part_4_question.js');



const router = express.Router();

//Router For Students 1

router.get('/students1/', getQuestion1)
router.post('/students1/',addQuestion1)
router.get('/students1/find/:id',getSingleQuestion1)
router.put('/students1/:id',updateQuestion1)
router.delete('/students1/:id',deleteQuestion1)

router.get('/students1/questiontype/:id', getQuestionType)


//Router For students 2

router.get('/students2/', getQuestion2)
router.post('/students2/',addQuestion2)
router.get('/students2/find/:id',getSingleQuestion2)
router.put('/students2/:id',updateQuestion2)
router.delete('/students2/:id',deleteQuestion2)
router.get('/students2/questiontype/:id', getQuestionType2)

//Router For students 3

router.get('/students3/', getQuestion3)
router.post('/students3/',addQuestion3)
router.get('/students3/find/:id',getSingleQuestion3)
router.put('/students3/:id',updateQuestion3)
router.delete('/students3/:id',deleteQuestion3)
router.get('/students3/questiontype/:id', getQuestionType3)


//Router For students 4

router.get('/students4/', getQuestion4)
router.post('/students4/',addQuestion4)
router.get('/students4/find/:id',getSingleQuestion4)
router.put('/students4/:id',updateQuestion4)
router.delete('/students4/:id',deleteQuestion4)
router.get('/students4/questiontype/:id', getQuestionType4)



//Choice
router.post('/choices', addChoice)
router.get('/choices/:id', getChoices)
router.delete('/choices/:id', deleteChoices)
router.get('/choices', getAllChoices)
router.get('/listOfChoices', getChoicesForUI)

module.exports = router;
