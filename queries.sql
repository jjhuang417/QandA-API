/*Returns all questions for a product (takes in a product ID) - GET /qa/questions*/
SELECT *
FROM questions q
JOIN answers a
ON q.id = a.question_id
WHERE q.product_id = 1;

/*Returns all answers for a question (takes in a questions ID) - GET /qa/questions/:question_id/answers*/
SELECT *
FROM answers
WHERE question_id = 1;

/*Adding new questions (takes in an object from client) - POST /qa/questions*/
INSERT INTO questions (question_body, asker_name,  asker_email, product_id)
VALUES ('What is this product I am seeing', 'Jesse H.',  'jjhuang417@gmail.com', 1);


/*Adding new answers (takes in an object from client) - POST /qa/questions/:question_id/answers*/
INSERT INTO answers (body, answerer_name,  answerer_email, question_id)
VALUES ('What is this product I am seeing', 'Jesse H.',  'jjhuang417@gmail.com', 1);

/*Mark questions as helpful (takes in a quetion ID) - PUT /qa/questions/:question_id/helpful*/
UPDATE

/*Mark answers as helpful (takes in an answer ID) - PUT /qa/answers/:answer_id/helpful */
UPDATE

/*Report questions (takes in a quetion ID) - PUT /qa/questions/:question_id/report*/
UPDATE

/*Report answers (takes in an answer ID) -  PUT /qa/answers/:answer_id/report*/
UPDATE