const express = require("express");
const router = express.Router()
const {getFloorTwo,setFloorTwo,updateFloorTwo,deleteFloorTwo} = require('../controllers/floorControllers/floorTwoController')

router.route('/').get(getFloorTwo).post(setFloorTwo)
router.route('/:id').put(updateFloorTwo).delete(deleteFloorTwo)


module.exports = router