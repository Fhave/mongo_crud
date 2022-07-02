const Task =  require("../models/task");

// get all task
exports.getTasks = async (req,res) => {
    try{
      let tasks = await Task.find();
      if(tasks.length == 0){
        return res.status(404).json({
          success: false,
          message: "No Tasks"
        })
      }
      res.status(200).json({
        success: true,
        message: "All Tasks",
        tasks,
        count:tasks.length
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Server Error",
        error: err.message,
      });
    }
  };

// get a task detail
exports.getTask = async (req,res) => {
    try{
      let id = { _id: req.params.id};
      let task = await Task.findOne(id);
      if(!task) {
        return res.status(404).json({
          success: false,
          message: "Task Not Found"
        })
      }
      res.status(200).json({
        success: true,
        message: "Task found",
        task,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Server Error",
        error: err.message,
      });
    }
  }

// add a new task
exports.addTask = async (req,res) => {
    try{
      let task = await req.body;
      let created  = await Task.create(task);
      if(!created){
        return res.status(404).json({
          success: false,
          message: "No Task created"
        })
      }
      return res.status(200).json({
        success: true,
        message: "Task created",
        task: created,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err.message,
      });
    }
  }

// update/edit task
exports.updateTask = async (req,res) => {
  try {
    let id = { _id: req.params.id};
      let task = await req.body;
      let update = await Task.findOneAndUpdate(id, task, {new: true});

      if(!update)
        return res.status(404).json({
          success: false,
          message: "No Task updated"
        });

        return res.status(200).json({
          success: true,
          message: "User Updated",
          task: update,
        }); 
      } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
}



// delete task
exports.deleteTask = async (req,res) => {
   try {
    let id = { _id: req.params.id};
      let deleted = await Task.findOneAndRemove(id);

      if(!deleted)
        return res.status(404).json({
          success: false,
          message: "No Task deleted"
        });

        return res.status(200).json({
          success: true,
          message: "User deleted",
        }); 
      } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
}