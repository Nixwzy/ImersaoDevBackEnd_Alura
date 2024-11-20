import express from "express";
import routes from "./src/routes/postsRoutes.js";

const posts = [
  {
    id: 1,
    descricao: "Amizade felina.",
    imagem: "https://placecats.com/millie_neo/300/200",
  },
  {
    id: 2,
    descricao: "Gato comendo banana.",
    imagem: "https://placecats.com/neo_banana/300/200",
  },
  {
    id: 3,
    descricao: "Gato vesgo.",
    imagem: "https://placecats.com/neo_2/300/200",
  },
];

const app = express();
routes(app);
app.listen(3000, () => {
  console.log("Servidor funcionando.");
});
