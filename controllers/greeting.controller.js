/**
 * importing service
 */
const greeting= require('./../services/greeting.service');

let data;
/**
 *
 * @param {object} req
 * @param {object} res
 */
exports.find = (req, res) => {
    data =greeting.getHello();
    res.send(data);
};

/**
 *
 * @param {object} req
 * @param {object} res
 */
exports.create= (req, res) => {
    data =greeting.getHello();
    res.send(data);
};

/**
 *
 * @param {object} req
 * @param {object} res
 */
exports.modify= (req, res) => {
    data =greeting.getHello();
    res.send(data);
};
