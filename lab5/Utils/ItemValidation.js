const Ajv = require('ajv')
const ajv = new Ajv();

let ItemSchema = {
    type : "object",
    properties : {
    id : {type : "number"},
    name : {type : "string"},
    price: { type: "number", "minimum": 60 },
    desc : {type : "string"}
    },
    required :["price"],
    additionalProperties : false
    }
   module.exports = ajv.compile(ItemSchema);
