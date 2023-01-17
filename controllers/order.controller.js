const order = require('../models/order.model');

exports.create = async (req, res) => {

    try {
        const data = req.body;
        const newData = new order();

        newData.title = data.title;
        newData.price = data.price;
        await newData.save();

        return res.status(201).json(newData);
    } catch (error) {
        return res.status(401).json(error);
    }
};

exports.findAll = async (req, res) => {
    try {
        const response = await order.find().sort({ "$natural": -1 }).exec();
        return res.status(201).json(response);
    } catch (error) {
        return res.status(401).json(error);
    }
};