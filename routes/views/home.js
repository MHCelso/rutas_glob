module.exports = function ( app ) 
{
	app.get("/", ( request, response ) => {
		response.send("Hola es la Ruta '/'");
	});
}
