const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

router.post("/insertOne", dataController.insertOne);
router.post("/insertMany", dataController.insertMany);

router.get("/find", dataController.find);

router.put("/updateOne", dataController.updateOne);
router.put("/updateMany", dataController.updateMany);
router.put("/replaceOne", dataController.replaceOne);

router.delete("/deleteOne", dataController.deleteOne);
router.delete("/deleteMany", dataController.deleteMany);

module.exports = router;
