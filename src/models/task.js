const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String, 
    required: true
  }
}, {timestamps: true});

const taskModel = mongoose.model('task', taskSchema);
module.exports = taskModel;