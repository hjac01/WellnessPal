const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        trim: true,
      },
    
      link: {
        type: String,
        trim: true,
      },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
