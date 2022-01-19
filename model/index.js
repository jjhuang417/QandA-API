const express = require('express');
const db = require('../database/indexPool.js');


module.exports = {
  getProductQuestions: (product_id) => {
    let querySQL =
    `SELECT product_id, json_agg(
      json_build_object(
        'question_id', q.id,
        'question_body', q.question_body,
        'question_date', q.question_date,
        'asker_name', q.asker_name,
        'question_helpfulness', q.question_helpfulness,
        'reported', q.reported,
        'answers', (
          SELECT coalesce(answers, '{}'::json)
          FROM (
            SELECT
              json_object_agg(
                id,
                json_build_object(
                  'id', id,
                  'body', body,
                  'date', answer_date,
                  'answerer_name', answerer_name,
                  'helpfulness', helpfulness,
                  'photos', (
                    SELECT coalesce(photos, '[]'::json)
                    FROM (
                      SELECT json_agg(url) as photos
                      FROM photos p
                      WHERE p.id = a.id
                    ) as photos
                  )
                )
              ) as answers
            FROM answers a
            WHERE a.question_id = q.id
          ) as answers
        )
      )
        ) as results
        FROM (
          SELECT *
          FROM questions
          WHERE product_id = $1
            AND reported = false
    ) as q
    GROUP BY 1`;
    let queryValue = [product_id]
    return db.query(querySQL, queryValue);
  },
  postNewQuestion: (info) => {
    let querySQL =
      `INSERT INTO questions (question_body, asker_name,  asker_email, product_id)
      VALUES ($1, $2, $3, $4);`
    let queryValue = [info.body, info.name, info.email, info.product_id];
    return db.query(querySQL, queryValue);
  },
  updateHelpfulness: (question_id) => {
    let querySQL =
      `UPDATE questions
      SET question_helpfulness = question_helpfulness + 1
      WHERE id = $1;`;
    let queryValue = [question_id];
    return db.query(querySQL, queryValue);
  }
}