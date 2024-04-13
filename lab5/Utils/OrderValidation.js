const express = require("express")
const Ajv = require("ajv")
const ajv = new Ajv();

let OrderSchema = {
    type : "object",
    properties : {
    id : {type : "integer"},
    TotalPrice : { type : "number" },
    items: { type: "array" }
    },
    required :["TotalPrice"],
    additionalProperties : false
    }
    module.exports = ajv.compile(OrderSchema);