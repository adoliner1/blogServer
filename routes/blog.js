var express = require("express");
var router = express.Router();
var path = require('path');
var fs = require('fs');
var parseMD = require('parse-md').default

router.get("/:postNumber", function(req, res, next) 
{
	var postName = "post" + req.params.postNumber + ".md"
	try
	{
		var requestedPost = fs.readFileSync(path.join(__dirname, '../public/posts', postName), 'utf8')
		var parsedPost = parseMD(requestedPost)
	 	res.send(parsedPost)
	}
	catch (error)
	{
		console.print(error)
	}
})

module.exports = router;