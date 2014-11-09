var items = [{name:'asdf',description:'test'}];

exports.list = function (req, res)
{
	res.render('index',{items:items});
};