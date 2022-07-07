import * as CRUD from "./js/crud-provider";



CRUD.createUser({
    name: "John Santa",
    job: "Software Engineer"
}).then( console.log );

CRUD.updateUser('1',{
    name: "John S",
    job: "Software Engineer",
}).then( console.log );

CRUD.getUser(2).then( console.log );