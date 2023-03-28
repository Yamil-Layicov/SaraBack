const asyncHandler = require('express-async-handler')
const FloorOne = require('../../models/floorModels/floorOneModel')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getFloorOne = asyncHandler(async (req, res) => {
    const floorOneData = await FloorOne.find()

    res.status(200).json(floorOneData)
})

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setFloorOne = asyncHandler(async (req, res) => {
    if(!req.body.roomNo){
        res.status(400)
        throw new Error('bos qoymaa')
    }

    const createdRoom = await FloorOne.create({
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
const updateFloorOne = asyncHandler(async (req, res) => {
    const floorOne = await FloorOne.findById(req.params.id)

    if(!floorOne){
        res.status(400)
        throw new Error("otaq tapilmadi")
    }

    const updatedFloorOne = await FloorOne.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })

    res.status(200).json(updatedFloorOne)
})

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteFloorOne = asyncHandler(async (req, res) => {
    const floorOne = await FloorOne.findById(req.params.id)

    if(!floorOne){
        res.status(400)
        throw new Error("otaq tapilmadi")
    }

    await floorOne.deleteOne()

    res.status(200).json({id:req.params.id})
})

module.exports = {
  getFloorOne,
  setFloorOne,
  updateFloorOne,
  deleteFloorOne,
}