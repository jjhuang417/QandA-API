# QandA-API

This is an API for an eCommerce website, please see below for all the functionality and routes:

GET - get all questions and answers for a specific prodct.

Route
/qa/questions

Supply the following to get the questions and answers for a product:
- product_id

Example: /qa/questions?product_id=2

POST - submit a new question for a specific product

Route
/qa/questions

Supply the following to add a new question for a product:
- question_body
- asker_name
- asker_email
- product_id


UPDATE - update the helpfulness of a question.

Route
/questions/helpful

Supply for following to update the helpfulness of a question:
- question_id

Example: /questions/helpful?question_id=44

HELLO