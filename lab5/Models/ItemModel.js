let All_items = [];

class ItemModel{
constructor(item){
    this.name = item.name
    this.price = item.price
    this.desc = item.desc
}
static find(){
return All_items
}
save(){
All_items.push(this)
}
}

module.exports = ItemModel