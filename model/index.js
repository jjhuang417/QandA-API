const express = require('express');
const db = require('../database/indexPool.js');


module.exports = {
  getProductQuestions: (product_id) => {
    console.log(product_id);
    let getQuestionsSQL =
    `SELECT *
    FROM questions q
    LEFT JOIN answers a
    ON q.id = a.question_id
    WHERE q.product_id = $1 AND q.reported = false;`;
    let queryValue = [product_id]
    return db.query(getQuestionsSQL, queryValue);
  },
  postNewQuestion: (info) => {
    let postQuestionSQL =
    `INSERT INTO questions (question_body, asker_name,  asker_email, product_id)
     VALUES ($1, $2, $3, $4);`
    let queryValue = [info.body, info.name, info.email, info.product_id];
    return db.query(postQuestionSQL, queryValue);
  }
}