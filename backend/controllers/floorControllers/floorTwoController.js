const asyncHandler = require('express-async-handler')
const FloorTwo = require('../../models/floorModels/floorTwoModel')


// @desc    Get floorThree room
// @route   GET /floorThree
// @access  Public
const getFloorTwo = asyncHandler(async (req, res) => {
    const floorTwoData = await FloorTwo.find()

    res.status(200).json(floorTwoData)
})

// @desc    Set floorThree room
// @route   POST /floorThree
// @access  Public
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
 
// @desc    Update floorThree room
// @route   PUT /floorThree/:id
// @access  Public
const updateFloorTwo = asyncHandler(async (req, res) => {
    const floorTwo = FloorTwo.findById(req.params.id) 
    
    if(!floorTwo){
        res.status(400)
        throw new Error("otaq tapilmadi")
    }

    const updatedFloorTwo = await FloorTwo.findByIdAndUpdate(req.params.id, req.body, {
        new:true
    })

    res.status(200).json(updatedFloorTwo)
})


// @desc    Delete floorThree room
// @route   DELETE /floorThree/:id
// @access  Public
const deleteFloorTwo = asyncHandler(async (req, res) => {
    const floorTwo = FloorTwo.findById(req.params.id) 

    if(!floorTwo){
        res.status(400)
        throw new Error("otaq tapilmadi")
    }

    await floorTwo.deleteOne()

    res.status(200).json({id:req.params.id})
})

module.exports = {
  getFloorTwo,
  setFloorTwo,
  updateFloorTwo,
  deleteFloorTwo,
}