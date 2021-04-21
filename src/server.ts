import express from "express";
import "./database";
import { routes } from "./routes"

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Server is running on port 3333"));




/***
 * GET => BUSCA
 * POST => CRIACAO
 * PUT => ALTERAR
 * DELETE => DELETAR
 * PATCH => ALTERAR CAMPO ESPECIFICO
 */
/*
app.get("/", (request, response) => {
  return response.json({message: "Olá NLW5!"})
});

app.post("/", (request, response) => {
  return response.json({message: "Usuário cadastrado com sucesso!"})
});

app.delete("/", (request, response) => {
  return response.json({message: "Usuário excluído com sucesso!"})
});

app.put("/", (request, response) => {
  return response.json({message: "Usuário alterado com sucesso!"})
});

app.patch("/", (request, response) => {
  return response.json({message: "Usuário atualizado com sucesso!"})
});*/