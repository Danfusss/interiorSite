const { PrismaClient } = require("@prisma/client");
const express = require("express");

const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

const prisma = new PrismaClient();

app.get("/getItem", async (req, res) => {
  const allItems = await prisma.item.findMany();
  res.send(allItems);
});
app.get("/getCategories", async (req, res) => {
  const allCategories = await prisma.categories.findMany();
  res.send(allCategories);
});

app.get("/getFeedback", async (req, res) => {
  const allFeedback = await prisma.reviews.findMany();
  res.send(allFeedback);
});
app.get("/getPopular", async (req, res) => {
  const allPopular = await prisma.popular.findMany();
  res.send(allPopular);
});
app.get("/getArticle", async (req, res) => {
  const allArticle = await prisma.article.findMany();
  res.send(allArticle);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
