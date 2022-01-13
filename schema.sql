/*PostgreSQL*/
DROP TABLE questions CASCADE;
DROP TABLE answers CASCADE;
DROP TABLE photos CASCADE;

DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS answers;
DROP TABLE IF EXISTS photos;

ALTER TABLE products ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);

CREATE TABLE questions (
 id BIGSERIAL,
 product_id INTEGER,
 question_body VARCHAR(255) NOT NULL,
 question_date BIGINT NOT NULL,
 asker_name VARCHAR(50) NOT NULL,
 asker_email VARCHAR(255),
 reported BOOLEAN NOT NULL DEFAULT FALSE,
 question_helpfulness INTEGER DEFAULT 0
);


ALTER TABLE questions ADD CONSTRAINT questions_pkey PRIMARY KEY (id);

CREATE TABLE answers (
 id BIGSERIAL,
 question_id INTEGER,
 body VARCHAR(255) NOT NULL,
 answer_date BIGINT NOT NULL,
 answerer_name VARCHAR(50) NOT NULL,
 answerer_email VARCHAR(255),
 reported BOOLEAN NOT NULL DEFAULT FALSE,
 helpfulness INTEGER DEFAULT 0
);


ALTER TABLE answers ADD CONSTRAINT answers_pkey PRIMARY KEY (id);

CREATE TABLE photos (
 id BIGSERIAL,
 answer_id INTEGER,
 url VARCHAR(255)
);


ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (id);
ALTER TABLE answers ADD CONSTRAINT answers_question_id_fkey FOREIGN KEY (question_id) REFERENCES questions(id);
ALTER TABLE photos ADD CONSTRAINT photos_answer_id_fkey FOREIGN KEY (answer_id) REFERENCES answers(id);