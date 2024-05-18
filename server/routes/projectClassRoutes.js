import express from "express";
import {fetchClass, fetchProFinance} from "../controllers/proClass.js";


const router = express.Router();

router.get("/proClass", fetchClass);

router.get("/proFinance", fetchProFinance);

router.get("/proStatus", fetchProFinance);

export default router;







// const express = require('express');
// const router = express.Router();
// const ProjectClass = require('../models/ProjectClass'); // Assuming you have a Mongoose model defined for ProjectClass

// // Route to fetch all project classes
// router.get('/projectClasses', async (req, res) => {
//   try {
//     const projectClasses = await ProjectClass.find();
//     res.json(projectClasses);
//   } catch (error) {
//     console.error('Error fetching project classes:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


// router.post('/projectClass/create', async (req, res) => {
//   const { className } = req.body;
//   try {
//     const newProjectClass = new ProjectClass({ className });
//     await newProjectClass.save();

//     res.status(201).json(newProjectClass);
//   } catch (error) {
//     console.error('Error creating project class:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

//   // Route to update an existing project class
// router.put('/projectClass/update/:id', async (req, res) => {
//     const { id } = req.params;
//     const { className } = req.body;
//     try {
//     const updatedProjectClass = await ProjectClass.findByIdAndUpdate(
//         id,
//         { className },
//         { new: true } // Return the updated document
//     );

//     if (!updatedProjectClass) {
//         return res.status(404).json({ error: 'Project class not found' });
//     }
//     res.json(updatedProjectClass);
//     } catch (error) {
//     console.error('Error updating project class:', error);
//     res.status(500).json({ error: 'Internal server error' });
//     }
// });


// // Route to delete an existing project class
// router.delete('/projectClass/delete/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deletedProjectClass = await ProjectClass.findByIdAndDelete(id);

//     if (!deletedProjectClass) {
//       return res.status(404).json({ error: 'Project class not found' });
//     }

//     res.json({ message: 'Project class deleted successfully' });
//   } catch (error) {
//     console.error('Error deleting project class:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// module.exports = router;
