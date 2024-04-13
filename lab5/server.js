const express = require("express");
const app = express();
const PORT = process.env.PORT || 7005;
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const OrderRoutes = require("./Routes/OrderRoutes");
app.use("/api/orders" , OrderRoutes)

const ItemRoutes = require("./Routes/ItemRoutes");
app.use("/api/items" , ItemRoutes)

const UserRoutes = require("./Routes/UserRoutes");
app.use("/api/users" , UserRoutes)




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
