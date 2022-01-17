const express = require('express');
const model = require('../model/index.js');

module.exports = {
  getProductQuestions: (req, res) => {
    model.getProductQuestions(req.query.product_id)
    .then((results) => {
      console.log(results)
      res.status(200).send(results.rows);
    })
    .catch((error) => {
      console.log(error)
    })
    console.log(res.data);
  }
}