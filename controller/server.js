var server = function(req, res) {
	var sum = (parseInt(req.headers['num1']) + parseInt(req.headers['num2']));
	console.log('test server sum: '+sum);
	res.header('sum', sum);
	res.sendStatus(200);
};

module.exports = server;

