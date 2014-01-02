
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Dafuq' });
};

exports.what = function(req, res){
  res.render('what', { title: 'What page' });
};