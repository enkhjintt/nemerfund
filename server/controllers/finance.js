import multer from 'multer';
import { db } from "../db.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './files'); 
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    }
});

const upload = multer({ storage: storage }).single('financeRef'); 

export const createFinance = (req, res) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            
            return res.status(500).json(err);
        } else if (err) {
            
            return res.status(500).json(err);
        }
        
        const insertQuery = "INSERT INTO sanhuujiltDet (tsuglarah_dun, sanhuujilt_ref, tusul_id) VALUES (?, ?, ?)";
        const values = [
            req.body.amount, 
            req.file.filename, 
            req.body.projectId, 
        ];

        db.query(insertQuery, values, (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("finance has been created.");
        });
    });
};
