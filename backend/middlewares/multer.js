import multer from "multer";
const storage = multer.memoryStorage();
export const singleUpload = multer({storage}).single("file");
export default multer({ storage: storage }).single('file');