var friendArray = require("../data/friends");
  var myBestFriendName;
  var myBestFriendPhoto;
  var x;



module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendArray);
  });

  app.post("/api/friends", function(req, res) {
      friendArray.push(req.body);
      bestFriend();
      res.json(x);
 
  });

  
//WHERE DOES THIS GO?!?!?!?!?!
  function bestFriend (){
  var matchArray = [];
  var totalMatch=0;
  for(i=0; i<friendArray.length; i++){
    for(j=0; j<(friendArray[0].surveyAnswers.length)-1; j++)
   {
    var eachAns = Math.abs(parseInt(friendArray[i].surveyAnswers[j],10)- parseInt(friendArray[(friendArray.length-1)].surveyAnswers[j],10));
    console.log(eachAns)
   totalMatch += eachAns;}
   matchArray.push(totalMatch);
   totalMatch = 0;
  console.log(matchArray)


  }
  console.log(matchArray.indexOf(Math.min.apply(null, matchArray)))
  console.log(friendArray[matchArray.indexOf(Math.min.apply(null, matchArray))].name);
  myBestFriendName = friendArray[matchArray.indexOf(Math.min.apply(null, matchArray))].name;
  myBestFriendPhoto = friendArray[matchArray.indexOf(Math.min.apply(null, matchArray))].photo;
x=friendArray[matchArray.indexOf(Math.min.apply(null, matchArray))]
  };
};

