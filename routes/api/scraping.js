const router = require("express").Router();
const axios = require ("axios")
const cheerio = require ("cheerio")
const articlesController = require("../../controllers/articlesController");
const Post = require ("../../models/article")


router.route("/")
  .get ((req,res) => {
      let results=[];
    axios.get("https://old.reddit.com/r/webdev/").then((response) => {
        const $ = cheerio.load(response.data);
        $("p.title").each((i, element) => {
          const title = $(element).text();
          const link = $(element).children().attr("href");
      
      const post = {
          title: title,
          link: link
      }
        results.push(post) 
        });
        res.json(results)
      });
    
  });





module.exports = router;
