const express = require("express");
const routes = new express.Router();
const Usr_con = require("../Controllers/UserController")


routes.get("/", Usr_con.GetALlUsers);

routes.get("/:id",Usr_con.GetUserById);

routes.post("/", Usr_con.AddUsers);

routes.put("/:id", Usr_con.UpdateUsers);

routes.delete("/:id", Usr_con.DeleteUsers);

module.exports = routes;