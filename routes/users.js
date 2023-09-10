var mongoose = require('mongoose')
mongoose.connect('mongodb://0.0.0.0/googleauth')

const userSchema = mongoose.Schema({
  email: String,
  name:String
})


module.exports = mongoose.model('user', userSchema);