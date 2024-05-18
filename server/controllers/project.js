import multer from 'multer';
import { db } from "../db.js";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images'); 
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    }
});

const upload = multer({ storage: storage }).single('imgRef'); 

export const createProject = (req, res) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            return res.status(500).json(err);
        } else if (err) {
            // An unknown error occurred when uploading.
            return res.status(500).json(err);
        }
        
        const insertQuery = "INSERT INTO tusul (ner, tusul_angilal_id, img, tusul_turul_id, ehleh_ognoo, duusah_ognoo, hugatsaa, tusul_sanhuu_id, delgerengui, tuuh, ersdel) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        const values = [
            req.body.name, 
            req.body.selectedclassName, 
            req.file.filename, // Using req.file to access the uploaded file
            req.body.selectedType, 
            req.body.dateStart,
            req.body.dateEnd, 
            req.body.during, 
            req.body.finance,
            req.body.desc, 
            req.body.history, 
            req.body.risk
        ];

        db.query(insertQuery, values, (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("project has been created.");
        });
    });
};
