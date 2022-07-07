import { init } from "./js/joke-pages";
import { obtainUsers } from "./js/http-provider";

init();
obtainUsers().then( console.log);