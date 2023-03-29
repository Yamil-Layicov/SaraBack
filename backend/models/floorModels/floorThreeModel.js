const mongoose = require("mongoose");

const floorThreeShema = mongoose.Schema(
  {
    roomNo: {
      type: Number,
      required: [true, "otaq nomresi bos ola bilmez"],
    },
    companyName: {
      type: String,
      required: false,
    },
    owner: {
      type: String,
      required: false,
    },
    area: {
      type: String,
      required: false,
    },
    roomType: {
      type: String,
      required: false,
    },
    qanuniSahe: {
      type: Number,
    },
    qanunsuzSahe: {
      type: Number,
    },
    umumiSahe: {
      type: Number,
      umumiHesab: ''
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FloorThree", floorThreeShema);