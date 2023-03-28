const express = require("express");
const router = express.Router()
const {getFloorOne,setFloorOne,updateFloorOne,deleteFloorOne} = require('../controllers/floorControllers/floorOneController')

router.route('/').get(getFloorOne).post(setFloorOne)
router.route('/:id').put(updateFloorOne).delete(deleteFloorOne)


module.exports = router