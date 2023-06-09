const asyncHandler = require('express-async-handler')
const FloorOne = require('../../models/floorModels/floorOneModel')

// @desc    Get floorThree room
// @route   GET /floorThree
// @access  Public
const getFloorOne = asyncHandler(async (req, res) => {
    const floorOneData = await FloorOne.find()

    res.status(200).json(floorOneData)
})

// @desc    Set floorThree room
// @route   POST /floorThree
// @access  Public
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
 
// @desc    Update floorThree room
// @route   PUT /floorThree/:id
// @access  Public
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


// @desc    Delete floorThree room
// @route   DELETE /floorThree/:id
// @access  Public
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