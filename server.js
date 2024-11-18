import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Servidor funcionando.");
});

app.get("/api", (req, res) => {
  res.status(200).send("Mensagem do servidor!");
});
