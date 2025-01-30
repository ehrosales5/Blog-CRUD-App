// DEFINING THE MIDDLEWARE HERE, we use it in the server.js file

function passUserToView(req, res, next){

	// if(req.session.user){
	// 	res.locals.user = req.session.user
	// } else {
	// 	res.locals.user = null;
	// }

	// res.locals.user is creating user variable in every single ejs page we have
	// the value will be the user object in our session cookie if it exists, otherwise user will be null
	res.locals.user = req.session.user ? req.session.user : null;
	next()
}

module.exports = passUserToView;