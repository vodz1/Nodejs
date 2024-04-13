const Ajv = require('ajv')
const ajv = new Ajv();

let UserSchema = {
    type : "object",
    properties : {
    id : {type : "number"},
    name : {type : "string" , "minLength" : 3},
    age: { type: "number"},
    address : {type : "string"},
    email: { type: "string" , pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$" },
    password: { type: "string","minLength" : 5}
    },
    required :["name","email","password"],
    additionalProperties : false
    }   
    module.exports = ajv.compile(UserSchema);
