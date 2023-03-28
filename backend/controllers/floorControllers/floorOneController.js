const asyncHandler = require('express-async-handler')


// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getFloorOne = asyncHandler(async (req, res) => {
    res.status(200).json("'recieved floor data")
})

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setFloorOne = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('bos qoymaa')
    }

    res.status(200).json({message:"sent floor data"})
})
 
// @desc    Update goal 
// @route   PUT /api/goals/:id
// @access  Private
const updateFloorOne = asyncHandler(async (req, res) => {
    res.status(200).json({message:`updated floor data ${req.params.id}`})
})

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteFloorOne = asyncHandler(async (req, res) => {
    res.status(200).json({message:`deleted data ${req.params.id}`})
})

module.exports = {
  getFloorOne,
  setFloorOne,
  updateFloorOne,
  deleteFloorOne,
}