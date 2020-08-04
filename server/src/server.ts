import express from "express";

const app = express();

app.get("/users", (_request, response) => {
  return response.json({ message: "Hello world" });
});

app.listen(3333);
