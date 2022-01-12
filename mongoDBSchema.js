const mongoDBSchema = mongoose.Schema(
  id: "number",
  question_id: "number",
  question_body: "string",
  question_date: "Date",
  asker_name: "string",
  question_helpfulness: "number",
  reported: "boolean",
  answers: [{
    answer_id: "number",
    body: "string",
    date: "string",
    answerer_name: "string",
    helpfulness: "number",
    reported: "boolean"
    photos: [{
      photo_id: "number",
      photo: "string"
    }]
  },...]
)