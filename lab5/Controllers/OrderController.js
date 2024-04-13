const OrderValid = require("../Utils/OrderValidation")
const OrderModel = require("../Models/OrderModel")
let Ord_ID = 0;
let AllOrders = [];


let GetAllOrders = (req, res) => {
let AllOrders = OrderModel.find();
    return res.json(AllOrders);
}
let GetOrdersById =  (req, res) => {
    let Ord_ID = req.params.id;
    let foundOrder = AllOrders.find((order) => order.id == Ord_ID);
    if (foundOrder) {
        res.status(200).json({ data: foundOrder });
    } else {
        res.status(400).send("Not Found");
    }
}
let AddOrders = (req, res) => {
    let newOrder = req.body;
    if(OrderValid(newOrder)){
    newOrder.id = ++Ord_ID;
    let newOrd = new OrderModel(newOrder)
    newOrd.save();
    return res.status(200).json({ message: "Order Added Successfully", data: newOrd });
    }
    return res.send(OrderValid.errors[0].instancePath.split("/")[1] + ":" +OrderValid.errors[0].keyword + "==>" +OrderValid.errors[0].message)
}
let UpdateOrders =  (req, res) => {
    if(OrderValid(req.body)){
    let Ord_ID = req.params.id;
    AllOrders.find((order) => {
        if (order.id == Ord_ID) {
            order.TotalPrice = req.body.TotalPrice;
            order.items = req.body.items;
            return order;
        }
    
    });
  return res.status(200).json({ message: "Order Updated Successfully", data: AllOrders });
}else{
   return res.status(404).send()
}
}
let DeleteOrders = (req, res) => {
    let Ord_ID = req.params.id;
    let newArray = AllOrders.filter((order) => order.id != Ord_ID);
    AllOrders = newArray;
   return res.status(200).json({ message: "Order Deleted Successfully", data: AllOrders });
}

module.exports ={GetAllOrders , GetOrdersById , AddOrders , UpdateOrders , DeleteOrders};