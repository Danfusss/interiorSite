const { PrismaClient } = require("@prisma/client");
const express = require("express");
//Создание сервера

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
  console.log(res.send(allCategories));
  getCategories;
});
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
//
