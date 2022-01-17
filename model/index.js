const express = require('express');
const db = require('../database/indexPool.js');


module.exports = {
  getProductQuestions: (product_id) => {
    console.log(product_id);
    let getQuestionsSQL = `SELECT *
    FROM questions q
    LEFT JOIN answers a
    ON q.id = a.question_id
    WHERE q.product_id = $1 AND q.reported = false;`
    let queryValue = [product_id]
    return db.query(getQuestionsSQL, queryValue);
  }
}