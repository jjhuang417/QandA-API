const express = require('express');
const model = require('../model/index.js');

module.exports = {
  getProductQuestions: (req, res) => {
    model.getProductQuestions(req.query.product_id)
      .then((results) => {
        // console.log(results)
        res.status(200).send(results.rows);
      })
      .catch((error) => {
        console.log(error)
      })
  },
  postNewQuestion: (req, res) => {
    model.postNewQuestion(req.body)
      .then(() => {
        res.status(201).send('New question added.');
      })
      .catch((error) => {
        console.log(error);
      })
  }
}