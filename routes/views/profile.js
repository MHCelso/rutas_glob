module.exports = function ( app )
{
	app.get("/profile/:user", ( request, response ) => {
		response.send(`Hola esta en el perfil de ${request.params.user} ! `);
	});
}
