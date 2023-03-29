const express = require("express");
const router = express.Router()
const {getFloorThree,setFloorThree,updateFloorThree,deleteFloorThree} = require('../controllers/floorControllers/floorThreeController')

router.route('/').get(getFloorThree).post(setFloorThree)
router.route('/:id').put(updateFloorThree).delete(deleteFloorThree)


module.exports = router