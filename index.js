const express = require("express");
const app = express();

console.log("Iniciando Express.js");
app.listen(3000, () => {
	console.log("Express ha iniciado correctamente");
});
