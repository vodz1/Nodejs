let AllOrders = [];

class OrderModel {
    constructor(ord){
        this.id = ord.id
        this.TotalPrice = ord.TotalPrice
        this.items = ord.items
    }

static find(){
return AllOrders
}
save(){
    AllOrders.push(this)
}

}
module.exports = OrderModel