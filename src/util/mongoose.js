// ở mongoose course đang là object constructor
// sau khi toObject ==> object literal

module.exports = {
  multipleMongooseToOject: function (mongooses) {
    return mongooses.map(mongoose => mongoose.toObject())
  },
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose
  }
}
