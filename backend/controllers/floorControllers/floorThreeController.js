const asyncHandler = require('express-async-handler')
const FloorThree = require('../../models/floorModels/floorThreeModel')


// @desc    Get floorThree room
// @route   GET /floorThree
// @access  Public
const getFloorThree = asyncHandler(async (req, res) => {
    const floorThreeData = await FloorThree.find()

    res.status(200).json(floorThreeData)
})

// @desc    Set floorThree room
// @route   POST /floorThree
// @access  Public
const setFloorThree = asyncHandler(async (req, res) => {
    if(!req.body){
        res.status(400)
        throw new Error('bos qoymaa')
    }

    const createdRoom = await FloorThree.create({
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
const updateFloorThree = asyncHandler(async (req, res) => {
    const floorThree = FloorThree.findById(req.params.id) 
    
    if(!floorThree){
        res.status(400)
        throw new Error("otaq tapilmadi")
    }

    const updatedFloorThree = await FloorThree.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })

    res.status(200).json(updatedFloorThree)
})

// @desc    Delete floorThree room
// @route   DELETE /floorThree/:id
// @access  Public
const deleteFloorThree = asyncHandler(async (req, res) => {
    const floorThree = FloorThree.findById(req.params.id) 

    if(!floorThree){
        res.status(400)
        throw new Error("otaq tapilmadi")
    }

    await floorThree.deleteOne()
    
    res.status(200).json({id:req.params.id})
})

module.exports = {
  getFloorThree,
  setFloorThree,
  updateFloorThree,
  deleteFloorThree,
}