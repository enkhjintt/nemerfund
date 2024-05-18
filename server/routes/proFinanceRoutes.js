






// const express = require('express');
// const router = express.Router();
// const multer = require('multer');
// const proFinance = require('../models/ProFinance');


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './files'); 
//     },
//     filename: function (req, file, cb) {
//         const uniqueSuffix = Date.now();
//         cb(null, uniqueSuffix + file.originalname);
//     }
// });

// const upload = multer({ storage: storage });
// router.post('/create', upload.single('creditRef'),

// async (req, res) => {
//     const selectedIsIntroduced = req.body.selectedIsIntroduced;
//     const selectedProType = req.body.selectedProType;
//     const creditRef = req.file.filename;
//     const fname = req.body.fname;
//     const amount = req.body.amount;
//     const role = req.body.role;
//     const selectedDuring = req.body.selectedDuring;
//     try{
//         await proFinance.create(
//             {
//                 selectedIsIntroduced: selectedIsIntroduced,
//                 selectedProType: selectedProType,
//                 creditRef: creditRef,
//                 fname: fname,
//                 amount: amount,
//                 role: role,
//                 selectedDuring: selectedDuring
//             }
//         );
//     }catch(error){
//         res.json({status: error});
//     }

// });

// module.exports = router;