const DataModel = require("../models/dataModel");
const { ObjectId } = require("mongodb");

exports.insertOne = async (req, res) => {
  try {
    const result = await DataModel.create(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.insertMany = async (req, res) => {
  try {
    const result = await DataModel.insertMany(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.find = async (req, res) => {
  try {
    const query = {};
    const projection = "name email age hobbies";
    const result = await DataModel.find(query).select(projection).lean();
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateOne = async (req, res) => {
  try {
    const filter = { _id: new ObjectId(req.body._id) };
    const updateDoc = { $set: req.body };
    const result = await DataModel.updateOne(filter, updateDoc);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateMany = async (req, res) => {
  try {
    const filter = {};
    const updateDoc = { $set: req.body };
    const result = await DataModel.updateMany(filter, updateDoc);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.replaceOne = async (req, res) => {
  try {
    const filter = { _id: new ObjectId(req.body._id) };
    const replacementDoc = req.body;
    const result = await DataModel.replaceOne(filter, replacementDoc);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const filter = { _id: new ObjectId(req.body._id) };
    const result = await DataModel.deleteOne(filter);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteMany = async (req, res) => {
  try {
    const filter = {};
    const result = await DataModel.deleteMany(filter);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
