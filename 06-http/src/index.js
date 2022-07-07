import * as CRUD from "./js/crud-provider";

CRUD.getUser(2).then( console.log );

CRUD.createUser({
    name: "John Santa",
    job: "Software Engineer"
}).then( console.log );