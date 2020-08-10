/**
 * importing service
 */
const greeting= require('./../services/greeting.service');

/**
 *
 * @param {object} req
 * @param {object} res
 */
exports.find = (req, res) => {
    const data =greeting.getHello();
    res.send(data);
};
