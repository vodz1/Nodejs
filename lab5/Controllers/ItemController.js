const ItemValid = require("../Utils/ItemValidation")
const ItemModel = require("../Models/ItemModel")

let item_ID = 0;

let GetAllItems = (req, res) => {
   let All_items = ItemModel.find()
   return res.json(All_items);
}
let GetItemByID = (req, res) => {
    let item_ID = req.params.id;
    let found_item = All_items.find((item) => item.id == item_ID);
    if (found_item) {
        res.status(200).json({ data: found_item });
    } else {
        res.status(400).send("Not Found");
    }
}
let AddItem =  (req, res) => {
    let newItem = req.body;
    if(ItemValid(newItem)){
    newItem.id = ++item_ID;
    let newItm = new ItemModel(newItem)
    newItm.save();
    return res.status(201).json({ message: "Item Added Successfully", data: newItm });
    }else{
    return res.send(ItemValid.errors[0].instancePath.split("/")[1] + ":" +ItemValid.errors[0].keyword + "==>" +ItemValid.errors[0].message)
    }

}
let UpdateItem = (req, res) => {
    if(ItemValid(req.body)){
    let item_ID = req.params.id;
    All_items.find((item) => {
        if (item.id == item_ID) {
            item.name = req.body.name;
            item.price = req.body.price;
            item.desc = req.body.desc;
            return item;
        }
    });
    res.status(200).json({ message: "Item Updated Successfully", data: All_items });
}else{
     res.status(404).send();
}
}
let DeleteItem = (req, res) => {
    let item_ID = req.params.id;
    let newArray = All_items.filter((item) => item.id != item_ID);
    All_items = newArray;
     res.status(200).json({ message: "Item Deleted Successfully", data: All_items });
}

module.exports = {GetAllItems , GetItemByID , AddItem , UpdateItem , DeleteItem};