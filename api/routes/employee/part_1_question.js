const express = require('express');
const { getAgeData, getGender, getCivil, getEthnicity, getNumofchildren, getAgerangeofchildren, getHighesteduc, getSpousestatus, getPosition, getSalary, getPlace, getYears } = require('../../controllers/employee/charts.js');
const {
  addChoice,
  deleteChoices,
  getChoices,
  getAllChoices,
  getChoicesForUI,
} = require('../../controllers/employee/choice.js');
const {
  addQuestion1,
  deleteQuestion1,
  getQuestion1,
  getSingleQuestion1,
  updateQuestion1,
  getQuestionNumber,
  getQuestionType,
} = require('../../controllers/employee/part_1_question.js');
const {
  addQuestion2,
  deleteQuestion2,
  getQuestion2,
  getSingleQuestion2,
  updateQuestion2,
  getQuestionType2,
} = require('../../controllers/employee/part_2_question.js');
const {
  addQuestion3,
  deleteQuestion3,
  getQuestion3,
  getSingleQuestion3,
  updateQuestion3,
  getQuestionType3,
} = require('../../controllers/employee/part_3_question.js');
const {
  addQuestion4,
  deleteQuestion4,
  getQuestion4,
  getSingleQuestion4,
  updateQuestion4,
  getQuestionType4,
} = require('../../controllers/employee/part_4_question.js');

const router = express.Router();

// router.get('/', getQuestion1)
// router.post('/', addQuestion1)
// router.get('/find/:id', getSingleQuestion)
// router.put('/:id', updateQuestion)
// router.delete('/:id', deleteQuestion)


//Router For Employee 1

router.get('/employees1/', getQuestion1)
//dinagdag ko to para di ko na baguhin ung delete button sa may server side
router.get('/employees1/getQuestionNumber/:id', getQuestionNumber)
router.post('/employees1/',addQuestion1)
router.get('/employees1/find/:id',getSingleQuestion1)
router.put('/employees1/:id',updateQuestion1)
router.delete('/employees1/:id',deleteQuestion1)

router.get('/employees1/questiontype/:id', getQuestionType)


//Router For Employee 2

router.get('/employees2/', getQuestion2)
router.post('/employees2/',addQuestion2)
router.get('/employees2/find/:id',getSingleQuestion2)
router.put('/employees2/:id',updateQuestion2)
router.delete('/employees2/:id',deleteQuestion2)
router.get('/employees2/questiontype/:id', getQuestionType2)


//Router For Employee 3

router.get('/employees3/', getQuestion3)
router.post('/employees3/',addQuestion3)
router.get('/employees3/find/:id',getSingleQuestion3)
router.put('/employees3/:id',updateQuestion3)
router.delete('/employees3/:id',deleteQuestion3)
router.get('/employees3/questiontype/:id', getQuestionType3)

//Router For Employee 4

router.get('/employees4/', getQuestion4)
router.post('/employees4/',addQuestion4)
router.get('/employees4/find/:id',getSingleQuestion4)
router.put('/employees4/:id',updateQuestion4)
router.delete('/employees4/:id',deleteQuestion4)
router.get('/employees4/questiontype/:id', getQuestionType4)


//Choice
router.post('/choices', addChoice)
router.get('/choices', getAllChoices)
router.get('/choices/:id', getChoices)
router.delete('/choices/:id', deleteChoices)
router.get('/listOfChoices', getChoicesForUI)


//Charts
router.get('/getAges', getAgeData)
router.get('/getGender', getGender)
router.get('/getCivil', getCivil)
router.get('/getEthnicity', getEthnicity)
router.get('/getNumofchildren', getNumofchildren)
router.get('/getAgerangeofchildren', getAgerangeofchildren)
router.get('/getHighesteduc', getHighesteduc)
router.get('/getSpousestatus', getSpousestatus)
router.get('/getPosition', getPosition)
router.get('/getSalary', getSalary)
router.get('/getPlace', getPlace)
router.get('/getYears', getYears)


module.exports = router;
