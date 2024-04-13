const express = require("express");
const routes = new express.Router();
const Ord_con = require("../Controllers/OrderController")

routes.get("/", Ord_con.GetAllOrders);

routes.get("/:id",Ord_con.GetOrdersById);

routes.post("/",Ord_con.AddOrders );

routes.put("/:id",Ord_con.UpdateOrders);

routes.delete("/:id",Ord_con.DeleteOrders);

module.exports = routes;