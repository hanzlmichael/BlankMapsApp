const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  teacherRef: {
    type: mongoose.Schema.Types.ObjectId
  },
  title: {
    type: String,
    required: [true, 'Chybí název testu']
  },
  marksBoundaries: {},
  questions: {}
  
});

const Test = mongoose.model('test', testSchema);

module.exports = Test