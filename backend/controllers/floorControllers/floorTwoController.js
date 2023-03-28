const asyncHandler = require('express-async-handler')
const FloorTwo = require('../../models/floorModels/floorTwoModel')


// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getFloorTwo = asyncHandler(async (req, res) => {
    const floorTwoData = await FloorTwo.find()

    res.status(200).json(floorTwoData)
})

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setFloorTwo = asyncHandler(async (req, res) => {
    // if(!req.body.text){
    //     res.status(400)
    //     throw new Error('bos qoymaa')
    // }

    const createdRoom = await FloorTwo.create({
        roomNo:req.body.roomNo,
        companyName:req.body.companyName,
        owner:req.body.owner,
        area:req.body.area,
        roomType:req.body.roomType,
    })

    res.status(200).json(createdRoom)
})
 
// @desc    Update goal 
// @route   PUT /api/goals/:id
// @access  Private
const updateFloorTwo = asyncHandler(async (req, res) => {
    res.status(200).json({message:`updated floor data ${req.params.id}`})
})

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteFloorTwo = asyncHandler(async (req, res) => {
    res.status(200).json({message:`deleted data ${req.params.id}`})
})

module.exports = {
  getFloorTwo,
  setFloorTwo,
  updateFloorTwo,
  deleteFloorTwo,
}