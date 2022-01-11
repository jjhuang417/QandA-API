/*PostgreSQL*/

CREATE TABLE products (
 product_id BIGSERIAL
);


ALTER TABLE products ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);

CREATE TABLE questions (
 id BIGSERIAL,
 product_id INTEGER,
 question_body VARCHAR(255),
 question_date DATE,
 asker_name VARCHAR(255),
 question_helpfulness INTEGER,
 reported BOOLEAN
);


ALTER TABLE questions ADD CONSTRAINT questions_pkey PRIMARY KEY (id);

CREATE TABLE answers (
 id BIGSERIAL,
 question_id INTEGER,
 body VARCHAR(255),
 date DATE,
 answerer_name VARCHAR(250),
 helpfulness INTEGER,
 reported BOOLEAN
);


ALTER TABLE answers ADD CONSTRAINT answers_pkey PRIMARY KEY (id);

CREATE TABLE photos (
 id BIGSERIAL,
 answer_id INTEGER,
 photo VARCHAR
);


ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (id);

ALTER TABLE questions ADD CONSTRAINT questions_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(product_id);
ALTER TABLE answers ADD CONSTRAINT answers_question_id_fkey FOREIGN KEY (question_id) REFERENCES questions(id);
ALTER TABLE photos ADD CONSTRAINT photos_answer_id_fkey FOREIGN KEY (answer_id) REFERENCES answers(id);