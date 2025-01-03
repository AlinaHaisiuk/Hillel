const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const articles = [
    { id: 1, title: "Article 1" },
    { id: 2, title: "Article 2" },
  ];
  res.render("articles", { articles });
});

router.get("/:articleId", (req, res) => {
  const articleId = req.params.articleId;
  const article = {
    id: articleId,
    title: `Article ${articleId}`,
    content: `This is the content of article ${articleId}.`,
  };
  res.render("articleDetails", { article });
});

module.exports = router;
