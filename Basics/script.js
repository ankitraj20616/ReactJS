import { a } from "./app.js";
import array from "./app.js";
var h1 = document.createElement("h1");

h1.innerHTML = "Hello From JS!";
document.body.appendChild(h1);

var p = document.createElement("p");
p.innerHTML = `Imported from app-> ${a} and ${array}`;
document.body.append(p);
