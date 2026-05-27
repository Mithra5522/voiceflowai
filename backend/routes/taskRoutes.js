const express = require("express");

const router = express.Router();

const Task = require("../models/Task");



// ================= GET TASKS =================

router.get("/", async (req, res) => {

  try {

    const tasks = await Task.find({
  userEmail: req.query.email
});

    res.json(tasks);

  } catch (error) {

    console.log("GET ERROR:", error);

    res.status(500).json({
      message: "Error fetching tasks",
    });

  }

});



// ================= CREATE TASK =================

router.post("/", async (req, res) => {

  try {

    console.log("POST ROUTE HIT");

    console.log(req.body);

    const newTask = new Task({

  task: req.body.task,

  assignedTo: req.body.assignedTo,

  priority: req.body.priority,

  userEmail: req.body.userEmail,

});

    const savedTask = await newTask.save();

    console.log("TASK SAVED");

    res.status(201).json(savedTask);

  } catch (error) {

    console.log("SAVE ERROR:");

    console.log(error);

    res.status(500).json({
      message: "Error creating task",
      error: error.message,
    });

  }

});



// ================= UPDATE TASK =================

router.put("/:id", async (req, res) => {

  try {

    const updatedTask =
      await Task.findByIdAndUpdate(

        req.params.id,

        req.body,

        { new: true }

      );

    res.json(updatedTask);

  } catch (error) {

    console.log("UPDATE ERROR:", error);

    res.status(500).json({
      message: "Error updating task",
    });

  }

});



// ================= DELETE TASK =================

router.delete("/:id", async (req, res) => {

  try {

    await Task.findByIdAndDelete(req.params.id);

    res.json({
      message: "Task deleted",
    });

  } catch (error) {

    console.log("DELETE ERROR:", error);

    res.status(500).json({
      message: "Error deleting task",
    });

  }

});

module.exports = router;