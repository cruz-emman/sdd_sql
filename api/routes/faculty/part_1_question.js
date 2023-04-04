const express = require('express');
const { getAgeData, getGender, getCivil, getEthnicity, getNumofchildren, getAgerangeofchildren, getHighesteduc, getEmploymentstatusofspouse, getSpousestatus, getPosition, getSalary, getPlace, getYears, getTable, getTablebeliefs, getTableyesorno } = require('../../controllers/faculty/charts.js');
const {
  addChoice,
  deleteChoices,
  getChoices,
  getAllChoices,
  getChoicesForUI,
} = require('../../controllers/faculty/choices.js');
const {
  addQuestion1,
  deleteQuestion1,
  getQuestion1,
  getSingleQuestion1,
  updateQuestion1,
  getQuestionType,
} = require('../../controllers/faculty/part_1_question.js');
const {
  addQuestion2,
  deleteQuestion2,
  getQuestion2,
  getSingleQuestion2,
  updateQuestion2,
  getQuestionType2,
} = require('../../controllers/faculty/part_2_question.js');
const {
  addQuestion3,
  deleteQuestion3,
  getQuestion3,
  getSingleQuestion3,
  updateQuestion3,
  getQuestionType3,
} = require('../../controllers/faculty/part_3_question.js');
const {
  addQuestion4,
  deleteQuestion4,
  getQuestion4,
  getSingleQuestion4,
  updateQuestion4,
  getQuestionType4,
} = require('../../controllers/faculty/part_4_question.js');


const router = express.Router();



//Router For Faculty1

router.get('/faculty1/', getQuestion1)
router.post('/faculty1/',addQuestion1)
router.get('/faculty1/find/:id',getSingleQuestion1)
router.put('/faculty1/:id',updateQuestion1)
router.delete('/faculty1/:id',deleteQuestion1)

router.get('/faculty1/questiontype/:id', getQuestionType)

//Router For faculty2

router.get('/faculty2/', getQuestion2)
router.post('/faculty2/',addQuestion2)
router.get('/faculty2/find/:id',getSingleQuestion2)
router.put('/faculty2/:id',updateQuestion2)
router.delete('/faculty2/:id',deleteQuestion2)
router.get('/faculty2/questiontype/:id', getQuestionType2)

//Router For faculty3

router.get('/faculty3/', getQuestion3)
router.post('/faculty3/',addQuestion3)
router.get('/faculty3/find/:id',getSingleQuestion3)
router.put('/faculty3/:id',updateQuestion3)
router.delete('/faculty3/:id',deleteQuestion3)
router.get('/faculty3/questiontype/:id', getQuestionType3)

//Router For faculty4

router.get('/faculty4/', getQuestion4)
router.post('/faculty4/',addQuestion4)
router.get('/faculty4/find/:id',getSingleQuestion4)
router.put('/faculty4/:id',updateQuestion4)
router.delete('/faculty4/:id',deleteQuestion4)
router.get('/faculty4/questiontype/:id', getQuestionType4)


//Choice
router.post('/choices', addChoice)
router.get('/choices/:id', getChoices)
router.delete('/choices/:id', deleteChoices)
router.get('/choices', getAllChoices)
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

router.get('/getTable', getTable)
router.get('/getTablebeliefs', getTablebeliefs)
router.get('/getTableyesorno', getTableyesorno)




module.exports = router;
