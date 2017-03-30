
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', name: 'Sean', params: {age: 30, language: 'node/express'} });
};