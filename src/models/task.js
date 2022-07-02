const {Schema, model} = require('mongoose');

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String, 
      required: true
    }
  }, 
  {timestamps: true}
);

const taskModel = model('task', taskSchema);
module.exports = taskModel;