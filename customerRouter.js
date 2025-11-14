import express from "express";

const customerRouter = express.Router();

customerRouter.get("/user/all/get", (req, res) => {
  res.send("Customer List");
});

customerRouter.get("/user/one/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Get One:${id}`);
});

customerRouter.get("/client/one/:user/view", (req, res) => {
  const user = req.params.id;
  res.send(`Get One:${user}`);
});

customerRouter.post("/users/new/add", (req, res) => {
  const customer = req.body;
  console.log(customer);
  console.log(req.body.name);
  res.status(201).send("Created");
});

customerRouter.post("/client/add/create", (req, res) => {
  const customer = req.body;
  console.log(customer);
  console.log(req.body.name);
  res.status(201).send("Client Created");
});

customerRouter.put("/users/:id/update", (req, res) => {
  const id = req.params.id;
  const product = req.body;
  console.log(`Update ${id}`, product);
  res.send(`Updated ${id}`);
});

customerRouter.put("/:id/change/one", (req, res) => {
  const id = req.params.id;
  const product = req.body;
  console.log(`Update ${id}`, product);
  res.send(`Updated ${id}`);
});

customerRouter.delete("/users/:id/delete/one", (req, res) => {
  const id = req.params.id;
  console.log(`Delete ${id}`);
  res.send(`Delete ${id}`);
});

customerRouter.delete("/delete/one/:user_id", (req, res) => {
  const id = req.params.id;
  console.log(`Delete Client${id}`);
  res.send(`Delete Client ${id}`);
});

export default customerRouter;
