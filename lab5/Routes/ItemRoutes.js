const express = require("express");
const routes = new express.Router();
const itm_con = require("../Controllers/ItemController")




routes.get("/",itm_con.GetAllItems );

routes.get("/:id", itm_con.GetItemByID);

routes.post("/",itm_con.AddItem);

routes.put("/:id", itm_con.UpdateItem);

routes.delete("/:id", itm_con.DeleteItem);

module.exports = routes