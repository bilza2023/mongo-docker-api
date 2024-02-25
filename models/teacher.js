const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  email: { 
    type: String,
    required: false,
    unique: true
  }, 
  createdAt: { 
    type: Date,
    required: true,
    default: Date.now
  },
  password: {
    type: String,
    required: false,
    default : ""
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "teacher"]
  }
  
});

const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;