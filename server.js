import express from "express";

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

app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor funcionando.");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id);
  res.status(200).json(posts[index]);
});
