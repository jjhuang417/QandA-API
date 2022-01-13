const mongoose = require('mongoose');

const QandA = new mongoose.Schema ({
  id: Number,
  question_id: Number,
  question_body: String,
  question_date: Date,
  asker_name: String,
  question_helpfulness: Number,
  reported: Boolean,
  answers: [Number]
});

const Answer = new mongoose.Schema ({
  answer_id: Number,
  body: String,
  date: String,
  answerer_name: String,
  helpfulness: Number,
  reported: Boolean
  photos: [{
    photo_id: Number,
    photo: String
  }]
});
