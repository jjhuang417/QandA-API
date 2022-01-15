/*Returns all questions for a product (takes in a product ID) - GET /qa/questions*/
SELECT *
FROM questions q
LEFT JOIN answers a
ON q.id = a.question_id
WHERE q.product_id = 1 AND q.reported = false;

/*Returns all answers for a question (takes in a questions ID) - GET /qa/questions/:question_id/answers*/
SELECT *
FROM answers
WHERE question_id = 1;

/*Adding new questions (takes in an object from client) - POST /qa/questions*/
INSERT INTO questions (question_body, asker_name,  asker_email, product_id)
VALUES ('Can I eat this product?', 'Jesse H.',  'jjhuang417@gmail.com', 1);


/*Adding new answers (takes in an object from client) - POST /qa/questions/:question_id/answers*/


/*Mark questions as helpful (takes in a quetion ID) - PUT /qa/questions/:question_id/helpful*/
UPDATE questions
SET question_helpfulness = question_helpfulness + 1
WHERE id = 1;


/*Mark answers as helpful (takes in an answer ID) - PUT /qa/answers/:answer_id/helpful */
UPDATE answers
SET helpfulness = helpfulness + 1
WHERE id = 1;

/*Report questions (takes in a quetion ID) - PUT /qa/questions/:question_id/report*/
UPDATE questions
SET reported = true
WHERE id = 1

/*Report answers (takes in an answer ID) -  PUT /qa/answers/:answer_id/report*/
UPDATE answers
SET reported = true
WHERE id = 1