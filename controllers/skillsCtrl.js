

var skillsList = [{skill: 'Kamehameha'}, {skill: 'Spirit Bomb'}, {skill: 'Super Sayjin'}];

module.exports = {
    getAll
  };
  
  function getAll() {
    return skillsList;
  }
 




// module.exports = function(app){
//     app.get('/skills', function(req, res){
//         res.render('skills', {skills: skillsList});
//     });

//     // app.post('/skills', urlencodedParser, function(req, res){
//         // skill.push(req.bodyParcer)
//     // });

//     app.delete('/skills', function(req, res){

//     });
// };